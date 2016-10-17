import Ember from 'ember';

const {
  computed,
  run
} = Ember;

export default Ember.Component.extend({

  arrows: true,
  min: 0,
  max: 100,
  start: 20,
  end: 50,
  delayOut: undefined,
  durationIn: undefined,
  durationOut: undefined,
  enabled: true,
  formatter: undefined, // TODO This should be a function... How to do it?
  rangeMin: undefined,
  rangeMax: undefined,
  scales: undefined, // TODO not supported by simple range slider
  step: undefined,
  symmetricPositionning: false,
  type: undefined, // TODO not supported by simple range slider
  valueLabels: 'show', // show, hide or change
  wheelMode: null, // null, scroll or zoom
  wheelSpeed: 4,

  initialBounds: function() {
    this.setProperties({
      _bounds: this.get('bounds')
    });
  }.on('init'),

  bounds: computed('min', 'max', function() {
    return {
      min: this.get('min'),
      max: this.get('max')
    };
  }),

  defaultValues: computed('start', 'end', function() {
    return {
      min: this.get('start'),
      max: this.get('end')
    };
  }),

  range: computed('rangeMin', 'rangeMax', function() {
    let ret,
      rangeMin = this.get('rangeMin'),
      rangeMax = this.get('rangeMax');

    if (rangeMin !== undefined || rangeMax !== undefined) {
      ret = {};
    }

    if (rangeMin !== undefined) {
      ret['min'] = rangeMin;
    }

    if (rangeMax !== undefined) {
      ret['max'] = rangeMax;
    }

    return ret;
  }),

  _init: function() {
    let $this = this.$(),
        properties = this.getProperties(
          'arrows', 'bounds', 'defaultValues',
          'delayOut', 'durationIn', 'durationOut',
          'enabled', 'formatter', 'range', 'step',
          'symmetricPositionning', 'type', 'valueLabels',
          'wheelMode', 'wheelSpeed');

    $this.dateRangeSlider(properties).on("valuesChanging", (evt, data) => {
        run(this, function() {
          this.set('start', data.values.min);
          this.set('end', data.values.max);
          this.sendAction('on-changing', evt, data);
        });

      }).on("valuesChanged", (evt, data) => {
        run(this, function() {
          this.set('start', data.values.min);
          this.set('end', data.values.max);
          this.sendAction('on-changed', evt, data);
        });

      }).on("userValuesChanged", (evt, data) => {
        run(this, function() {
          this.set('start', data.values.min);
          this.set('end', data.values.max);
          this.sendAction('on-userchanged', evt, data);
        });
      });
  }.on('didInsertElement'),

  _updateBounds: function() {
    let min = this.get('min'),
        max = this.get('max'),
        bounds = this.get('bounds'),
        _bounds = this.get('_bounds'),
        deltaBounds = (bounds.max - bounds.min) - (_bounds.max - _bounds.min),
        zoom = deltaBounds / this.get('step');

    this.$().dateRangeSlider("bounds", min, max);
    // this.$().rangeSlider("values", newStart, newEnd);
    this.$().dateRangeSlider('zoomIn', zoom);

    this.set('_bounds', bounds);
  }.observes('bounds'),

  _destroy: function() {
    this.$().dateRangeSlider('destroy');
  }.on('willDestroyElement')
});
