import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['timeline-event-table'],

  actions: {
    submit(model) {
      this.sendAction('submit', model);
    },
    delete(model) {
      this.sendAction('delete', model);
    }
  }
});
