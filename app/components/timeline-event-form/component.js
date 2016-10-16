import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['timeline-event-form'],

  momentToDate(date) {
    return moment(date).toDate();
  },

  actions: {
    submit: function() {
      this.sendAction('submit', this.get('model'));
    }
  }
});
