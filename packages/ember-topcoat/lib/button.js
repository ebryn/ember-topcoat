TC.Button = Ember.View.extend({
  tagName: 'a',
  classNames: ['button'],
  classNameBindings: ['disabled', 'quiet', 'large'],
  attributeBindings: ['role', 'aria-disabled'],
  role: 'button',
  "aria-disabledBinding": "disabled",

  disabled: false,
  quiet: false,
  large: false
});

TC.IconButton = TC.Button.extend({
  classNames: ['no-label'],

  iconClass: function() {
    var large = this.get('large');
    return large ? 'icon-sm' : 'icon-xs';
  }.property('large'),

  layout: Ember.Handlebars.compile('<i {{bindAttr class="view.iconClass :example"}}>{{yield}}</i>')
})