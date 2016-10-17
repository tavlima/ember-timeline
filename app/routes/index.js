import Ember from 'ember';

export default Ember.Route.extend({
  rangeStart: new Date(2016, 0, 1),
  rangeEnd: new Date(2016, 0, 31),

  model() {
    return Ember.RSVP.hash({
      events: this.get('store').query('event', {}),
      newEvent: this.get('store').createRecord('event')
    });
  },

  actions: {
    saveEvent(event) {
      if (event.get('hasDirtyAttributes')) {
        let isNew = event.get('isNew');

        event.save().then(() => {
          if (isNew) {
            this.controller.set('model.newEvent', this.get('store').createRecord('event'));
          }
        });
      }
    },

    deleteEvent(event) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        event.destroyRecord();
      }
    },

    willTransition(transition) {
      let model = this.controller.get('newEvent');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();

        } else {
          transition.abort();
        }
      }
    }
  }
});
