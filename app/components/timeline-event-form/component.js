import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['timeline-event-form'],

  momentToDate(date) {
    return moment(date).toDate();
  },

  modelChangeListener: function() {
    this.sendAction('submit', this.get('model'));
  }.observes('model.title', 'model.start', 'model.end', 'model.color'),

  actions: {
    submit: function() {
      this.sendAction('submit', this.get('model'));
    },
    delete: function(model) {
      this.sendAction('delete', this.get('model'));
    }
  }
});
