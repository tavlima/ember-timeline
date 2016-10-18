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

  _updateMilestonesVisibility: function() {
    this.$().find('.ember-timeline-milestone .ember-timeline-milestone-texts').map((_, o) => {
      let rect = o.getBoundingClientRect();

      return {
        x: [rect.left, rect.right],
        center: (rect.left + rect.right) / 2,
        node: o
      };

    }).sort((a, b) => {
      return (a.x[0] - b.x[0]) / Math.abs(a.x[0] - b.x[0]) || 0;

    }).get().reduce((a, b) => {
      let dontOverlap = (a.x[1] < b.x[0]) || (b.x[1] < a.x[0]),
          shouldHideA = !dontOverlap && a.center <= b.center,
          shouldHideB = !dontOverlap && b.center < a.center;

          Ember.$(a.node).css('visibility', shouldHideA ? 'hidden' : 'inherit');
          Ember.$(b.node).css('visibility', shouldHideB ? 'hidden' : 'inherit');

          return b;
    });

  }.on('didRender')
});
