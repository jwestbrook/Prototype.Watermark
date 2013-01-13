/*
* http://github.com/jwestbrook/Prototype.Watermark
*/
var Watermark = Class.create({

	initialize: function(el, text, inForm)
	{
		this.el = $(el);
		this.watermarkEl = new Element('div', {'class': 'watermarked'}).update(text);

		if(inForm)
		{
			this.el.observe('focus', function(){
				this.watermarkEl.setStyle({'textAlign': 'right'});
			}.bind(this));
			this.el.observe('keydown', this.hide.bind(this));
			this.watermarkEl.setStyle({width: (this.el.getWidth() - (this.el.paddingLeft() * 2) - (this.el.marginLeft() * 2)) + 'px'});
		}
		else
		{
			this.el.observe('focus', this.hide.bind(this));
		}
		this.el.observe('blur', this.show.bind(this));
		this.el.observe('change', function(){
				if(this.canShow())
				{
					this.show();
				}
				else
				{
					this.hide();
				}
		}.bind(this));
		this.watermarkEl.setStyle({
			'display': 'none',
			'fontSize':   this.el.getStyle('fontSize'),
			'fontFamily': this.el.getStyle('fontFamily'),
			'lineHeight': this.el.getStyle('lineHeight'),
			'paddingLeft': this.el.getStyle('paddingLeft'),
			'paddingTop': this.el.getStyle('paddingTop'),
			'marginLeft': this.el.getStyle('marginLeft'),
			'marginTop': this.el.getStyle('marginTop')
		});
		this.watermarkEl.observe('click', function(){
			this.el.focus();
		}.bind(this));

		// Wrap relative container around watermark element.
		var wrapperEl = new Element('div', { 'style': 'position:relative;' });
		wrapperEl.insert(this.watermarkEl);
		Element.wrap(this.el, wrapperEl);
		this.el.disabled = false;

		var form = this.el.up('form');
		if(Object.isElement(form))
		{
			form.observe('reset', function(){
				this.show.bind(this).defer();
			}.bind(this));
		}
		// Show watermark if text is not empty.
		this.show();
	},

	show: function()
	{
		this.watermarkEl.setStyle({'textAlign': 'left'});
		if(this.canShow())
		{
			this.el.setValue('');
			this.watermarkEl.show();
		}
	},

	hide: function()
	{
		if(this.isActivated())
		{
			this.watermarkEl.hide();
		}
	},

	canShow: function()
	{
		return !this.isActivated() && this.el.getValue().blank();
	},

	isActivated: function()
	{
		return this.watermarkEl.visible();
	}
});

Element.addMethods(['INPUT', 'TEXTAREA'], {
	watermark: function(element, text, forTabs)
	{
		var waterMark = element.retrieve('watermark');
		if(!waterMark)
		{
			waterMark = new Watermark(element, text || element.readAttribute('title'), forTabs);
			element.store('watermark', waterMark);
		}
		return waterMark;
	}
});

document.observe('dom:loaded', function() {
	$$('.watermark').each(function(el) {
		el.watermark();
	});
});