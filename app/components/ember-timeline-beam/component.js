import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['ember-timeline-beam'],
  tagName: 'svg',

  range: computed('min', 'max', function() {
    return this.get('max').diff(this.get('min')) * 1.02;
  }),

  ratioLeft: computed('range', 'min', 'start', function() {
    let min = this.get('min'),
        cur = this.get('start'),
        range = this.get('range');

    return (cur.diff(min) * 100 / range) + "%";
  }),

  ratioRight: computed('range', 'min', 'end', function() {
    let min = this.get('min'),
        cur = this.get('end'),
        range = this.get('range');

    return (cur.diff(min) * 100 / range) + "%";
  }),
});
