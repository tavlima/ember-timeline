import Ember from 'ember';

const {
  computed,
  run
} = Ember;

export default Ember.Component.extend({
  classNames: ['timeline-event-form'],

  _startDisabled: computed('model.title', function() {
    return !this.get('model.title') ? true : null;
  }),

  _endDisabled: computed('_startDisabled', 'model.start', function() {
    return (this.get('_startDisabled') || !this.get('model.start')) ? true : null;
  }),

  _duration: computed('model.duration', 'model.start', 'model.end', {
    get() {
      return (this.get('model.start') && this.get('model.end')) ? this.get('model.duration') : null;
    },
    set(key, value) {
      this.set('model.duration', value);
      return value;
    }
  }),

  momentToDate(date) {
    return moment(date).toDate();
  },

  modelChangeListener: function() {
    run.once(this, '_change');
  }.observes('model.start', 'model.end', 'model.color'),

  actions: {
    delete: function() {
      this.sendAction('delete', this.get('model'));
    },

    focusOut: function() {
      this._change();
    }
  },

  _change: function() {
    let model = this.get('model');

    if (model.validate()) {
      this.sendAction('change', model);
    }
  }
});
