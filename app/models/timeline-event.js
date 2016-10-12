import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  start: DS.attr('date'),
  end: DS.attr('date'),
  color: DS.attr('string', {
    defaultValue: null
  }),

  duration: Ember.computed('start', 'end', {
    get() {
      var start = moment(this.get('start'));
      var end = moment(this.get('end'));

      return moment.duration(end.diff(start)).asDays();
    },
    set(key, value) {
      this.set('end', moment(this.get('start')).add(value, 'days').toDate());
      return value;
    }
  }),

  type: Ember.computed('duration', function() {
    return this.get('duration') === 0 ? 'milestone' : 'phase';
  })
});
