import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-timeline'],

  totalDuration: Ember.computed('minDate', 'maxDate', function() {
    var min = moment(this.get('minDate'));
    var max = moment(this.get('maxDate'));

    return moment.duration(max.diff(min)).asDays();
  }),

  daySlice: Ember.computed('totalDuration', function() {
    return 100 / this.get('totalDuration');
  }),

  backgroundPhaseModel: Ember.computed('minDate', 'totalDuration', function() {
    return {
      color: '#eaeaea',
      start: this.get('minDate'),
      duration: this.get('totalDuration')
    };
  }),

  placeholderMilestoneModel: Ember.computed('minDate', 'totalDuration', function() {
    return {
      title: 'PLACEHOLDER',
      start: this.get('minDate')
    };
  }),
});
