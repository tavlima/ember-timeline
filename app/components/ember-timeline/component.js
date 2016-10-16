import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['ember-timeline'],

  totalDuration: computed('minDate', 'maxDate', function() {
    var min = moment(this.get('minDate'));
    var max = moment(this.get('maxDate'));

    return moment.duration(max.diff(min)).asDays();
  }),

  daySlice: computed('totalDuration', function() {
    return 100 / this.get('totalDuration');
  }),

  backgroundPhaseModel: computed('minDate', 'totalDuration', function() {
    return {
      color: '#eaeaea',
      start: this.get('minDate'),
      duration: this.get('totalDuration')
    };
  }),

  placeholderMilestoneModel: computed('minDate', 'totalDuration', function() {
    return {
      title: 'PLACEHOLDER',
      start: this.get('minDate')
    };
  }),
});
