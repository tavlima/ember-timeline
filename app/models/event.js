import DS from 'ember-data';
import Ember from 'ember';

const {
  computed,
  observer,
  isEmpty
} = Ember;

const defaultColor = '#deadbe';

export default DS.Model.extend({
  title: DS.attr('string'),
  start: DS.attr('date'),
  end: DS.attr('date'),
  color: DS.attr('string'),

  duration: computed('start', 'end', {
    get() {
      var start = moment(this.get('start'));
      var end = moment(this.get('end'));

      return moment.duration(end.diff(start)).asDays();
    },
    set(key, value) {
      let newEnd = moment(this.get('start')).add(value, 'days').toDate();

      this.set('end', newEnd);

      return parseInt(value);
    }
  }),

  type: computed('start', 'end', 'duration', function() {
    return this.get('duration') === 0 ? 'milestone' : 'phase';
  }),

  checkDuration: observer('start', 'end', 'duration', function() {
    if (this.get('duration') === 0) {
      this.set('color', undefined);
    } else if (! this.get('color')) {
      this.set('color', defaultColor);
    }
  }),

  validate: function() {
    let title = this.get('title'),
        start = this.get('start'),
        end = this.get('end'),
        duration = this.get('duration'),
        color = this.get('color');

    return !isEmpty(title) &&
            !isEmpty(start) &&
            !isEmpty(end) &&
            (duration === 0 || (duration > 0 && color));
  }
});
