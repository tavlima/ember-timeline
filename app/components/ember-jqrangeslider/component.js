import Ember from 'ember';

const {
  on,
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

  setup: on('didInsertElement', function() {
    let $this = this.$().get(0);
    let properties = this.getProperties(
      'arrows', 'bounds', 'defaultValues',
      'delayOut', 'durationIn', 'durationOut',
      'enabled', 'formatter', 'range', 'step',
      'symmetricPositionning', 'type', 'valueLabels',
      'wheelMode', 'wheelSpeed');

    Ember.$.ui.rangeSlider(properties, $this);

    this.$().on("valuesChanging", (evt, data) => {
      run(this, function() {
        this.set('start', data.values.min);
        this.set('end', data.values.max);
        this.sendAction('on-changing', evt, data);
      });
    });

    this.$().on("valuesChanged", (evt, data) => {
      run(this, function() {
        this.set('start', data.values.min);
        this.set('end', data.values.max);
        this.sendAction('on-changed', evt, data);
      });
    });

    this.$().on("userValuesChanged", (evt, data) => {
      run(this, function() {
        this.set('start', data.values.min);
        this.set('end', data.values.max);
        this.sendAction('on-userchanged', evt, data);
      });
    });
  }),

  teardown: on('willDestroyElement', function() {
    console.log('teardown');
    // this.$().progressbar('destroy');
  })
});
