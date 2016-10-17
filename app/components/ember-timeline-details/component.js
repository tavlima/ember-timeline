import Ember from 'ember';

const {
  computed
} = Ember;

const initialZoomRatio = 0.3;

export default Ember.Component.extend({
  classNames: ['ember-timeline-details'],

  initZoomRange: function() {
    let min = this.get('masterMinDate'),
        max = this.get('masterMaxDate'),
        diff = moment.duration(max.diff(min)).asDays();

    this.setProperties({
      zoomMinDate: min.clone().add(diff * initialZoomRatio, 'days'),
      zoomMaxDate: max.clone().add(diff * -initialZoomRatio, 'days')
    });
  }.on("init"),

  eventsMinDate: computed('models.@each.start', function() {
    return this.get('models').mapBy('start').reduce(function(a, b) {
      return Math.min(a, b);
    });
  }),

  eventsMaxDate: computed('models.@each.end', function() {
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

  zoomModels: computed('zoomMinDate', 'zoomMaxDate', function() {
    var min = this.get('zoomMinDate');
    var max = this.get('zoomMaxDate');

    return this.get('models').filter(function (model) {
      return !(model.get('start') > max || model.get('end') < min);
    });
  }),
});
