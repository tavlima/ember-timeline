import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['ember-timeline-details'],

  eventsMinDate: computed('models', function() {
    return this.get('models').mapBy('start').reduce(function(a, b) {
      return Math.min(a, b);
    });
  }),

  eventsMaxDate: computed('models', function() {
    return this.get('models').mapBy('end').reduce(function(a, b) {
      return Math.max(a, b);
    });
  }),

  masterMinDate: computed('eventsMinDate', function() {
    return moment(this.get('eventsMinDate')).add(-1, 'days');
  }),

  masterMaxDate: computed('eventsMaxDate', function() {
    return moment(this.get('eventsMaxDate')).add(1, 'days');
  }),

  masterDays: computed('masterMinDate', 'masterMaxDate', function() {
    var min = this.get('masterMinDate');
    var max = this.get('masterMaxDate');

    return moment.duration(max.diff(min)).asDays();
  }),

  zoomMinDate: computed('masterMinDate', 'masterDays', function() {
    return this.get('masterMinDate').clone().add(this.get('masterDays') * 0.3, 'days');
  }),

  zoomMaxDate: computed('masterMaxDate', 'masterDays', function() {
    return this.get('masterMaxDate').clone().add(this.get('masterDays') * -0.3, 'days');
  }),

  zoomModels: computed('zoomMinDate', 'zoomMaxDate', 'models', function() {
    var min = this.get('zoomMinDate');
    var max = this.get('zoomMaxDate');

    return this.get('models').filter(function (model) {
      return !(model.get('start') > max || model.get('end') < min);
    });
  }),
});
