TC.Button = Ember.View.extend({
  tagName: 'a',
  classNames: ['button'],
  classNameBindings: ['disabled', 'quiet', 'large'],
  attributeBindings: ['href', 'role', 'aria-disabled'],
  role: 'button',
  "aria-disabledBinding": "disabled",

  disabled: false,
  quiet: false,
  large: false
});

TC.IconLabelButton = TC.Button.extend({
  iconClass: Ember.computed(function() {
    var large = this.get('large');
    return large ? 'icon-sm' : 'icon-xs';
  }).property('large'),

  layout: Ember.Handlebars.compile('<i {{bindAttr class="view.iconClass :example"}}></i>{{yield}}')
});

TC.IconButton = TC.IconLabelButton.extend({
  classNames: ['no-label'],

  layout: Ember.Handlebars.compile('<i {{bindAttr class="view.iconClass :example"}}>{{yield}}</i>')
});

TC.CTAButton = TC.Button.extend({
  classNames: ['cta']
});