import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['timeline-event-table'],

  actions: {
    change(model) {
      this.sendAction('change', model);
    },
    delete(model) {
      this.sendAction('delete', model);
    }
  }
});
