import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['input-group', 'colorpicker-component'],
  format: 'hex',
  component: '.input-group-addon',

  _initializeBootstrapColorpicker: function() {
    let $this = this.$(),
      properties = this.getProperties(
        'format', 'component', 'input', 'horizontal',
        'inline', 'sliders', 'slidersHorz');

    $this.colorpicker(properties).on('changeColor.colorpicker', (event) => {
      this.set('color', event.color.toString(this.get('format')));
    });
  }.on('didInsertElement'),

  _updateColor: function() {
    this.$().colorpicker('setValue', this.get('_color'));
  }.observes('_color'),

  _destroyBootstrapColorpicker: function() {
    if (this.$().data('colorpicker')) {
      this.$().colorpicker('destroy');
    }

    this._super();
  }.on('willDestroyElement'),

  _color: computed('color', function() {
    let newColor = this.get('color');

    return newColor ? newColor : 'transparent';
  }),

  disabled: computed('_color', function() {
    return this.get('_color') === 'transparent' ? 'disable' : null;
  })
});
