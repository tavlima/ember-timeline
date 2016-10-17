import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['ember-timeline-slider'],

  minDate: computed('min', {
    get() {
      return moment(this.get('min')).toDate();
    },
    set(key, value) {
      this.set('min', moment(value));
      return value;
    }
  }),

  maxDate: computed('max', {
    get() {
      return moment(this.get('max')).toDate();
    },
    set(key, value) {
      this.set('max', moment(value));
      return value;
    }
  }),

  startDate: computed('start', {
    get() {
      return moment(this.get('start')).toDate();
    },
    set(key, value) {
      this.set('start', moment(value));
      return value;
    }
  }),

  endDate: computed('end', {
    get() {
      return moment(this.get('end')).toDate();
    },
    set(key, value) {
      this.set('end', moment(value));
      return value;
    }
  }),
});
