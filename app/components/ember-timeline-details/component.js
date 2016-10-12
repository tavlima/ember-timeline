import Ember from 'ember';

export default Ember.Component.extend({
  eventsMinDate: Ember.computed('models', function() {
    return this.get('models').mapBy('start').reduce(function(a, b) {
      return Math.min(a, b);
    });
  }),

  eventsMaxDate: Ember.computed('models', function() {
    return this.get('models').mapBy('end').reduce(function(a, b) {
      return Math.max(a, b);
    });
  }),

  masterMinDate: Ember.computed('eventsMinDate', function() {
    return moment(this.get('eventsMinDate')).add(-1, 'days');
  }),

  masterMaxDate: Ember.computed('eventsMaxDate', function() {
    return moment(this.get('eventsMaxDate')).add(1, 'days');
  }),

  zoomMinDate: new Date(2016, 0, 1),
  zoomMaxDate: new Date(2016, 0, 15),

  zoomModels: Ember.computed('zoomMinDate', 'zoomMaxDate', 'models', function() {
    var min = this.get('zoomMinDate');
    var max = this.get('zoomMaxDate');

    return this.get('models').filter(function (model) {
      return !(model.get('start') > max || model.get('end') < min);
    });
  }),
});
