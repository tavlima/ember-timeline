import Ember from 'ember';

export default Ember.Route.extend({
  rangeStart: new Date(2016, 0, 1),
  rangeEnd: new Date(2016, 0, 31),

  model() {
    return this.get('store').findAll('event');
  },

  actions: {
    saveEvent(event) {
      event.save();
      // this.get('store').createRecord('event', event).save();
    },

    deleteEvent(event) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        event.destroyRecord();
      }
    }
  }
});
