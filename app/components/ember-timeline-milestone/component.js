import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['ember-timeline-milestone'],
  attributeBindings: ['style:style'],

  style: computed('model.start', 'start', 'dayslice', function() {
    var modelStart = moment(this.get('model.start'));
    var timelineStart = moment(this.get('start'));

    var left = moment.duration(modelStart.diff(timelineStart)).asDays() * this.get('dayslice');

    return "left: " + left + "%";
  })
});
