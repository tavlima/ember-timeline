import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['ember-timeline-phase'],
  attributeBindings: ['style:style'],

  style: computed('model.start', 'model.duration', 'model.color', 'start', 'dayslice', function() {
    var modelStart = moment(this.get('model.start'));
    var timelineStart = moment(this.get('start'));

    var width = this.get('model.duration') * this.get('dayslice');
    var left = moment.duration(modelStart.diff(timelineStart)).asDays() * this.get('dayslice');

    return "width: " + width + "%; left: " + left + "%; background-color: " + this.get('model.color');
  }),
});
