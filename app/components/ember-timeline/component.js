import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['ember-timeline'],

  totalDuration: computed('minDate', 'maxDate', function() {
    var min = moment(this.get('minDate'));
    var max = moment(this.get('maxDate'));

    return moment.duration(max.diff(min)).asDays();
  }),

  daySlice: computed('totalDuration', function() {
    return 100 / this.get('totalDuration');
  }),

  backgroundPhaseModel: computed('minDate', 'totalDuration', function() {
    return {
      color: '#eaeaea',
      start: this.get('minDate'),
      duration: this.get('totalDuration')
    };
  }),

  placeholderMilestoneModel: computed('minDate', 'totalDuration', function() {
    return {
      title: 'PLACEHOLDER',
      start: this.get('minDate')
    };
  }),

  _updateMilestonesVisibility: function() {
    let sortedMilestones = this.$().find('.ember-timeline-milestone .ember-timeline-milestone-texts').map((_, o) => {
      let rect = o.getBoundingClientRect();

      return {
        x: [rect.left, rect.right],
        center: (rect.left + rect.right) / 2,
        node: o,
        overlaps: []
      };

    }).sort((a, b) => {
      return (a.x[0] - b.x[0]) / Math.abs(a.x[0] - b.x[0]) || 0;
    });

    sortedMilestones.get().map((obj, index, arr) => {
      arr.slice(index + 1).forEach((obj2) => {
        if (this._overlaps(obj, obj2)) {
          obj.overlaps.push(obj2);
          obj2.overlaps.push(obj);
        }
      });

      return obj;

    }).sort((a, b) => {
      return (b.overlaps.length - a.overlaps.length) / Math.abs(b.overlaps.length - a.overlaps.length) || 0;

    }).map((obj) => {
      if (this._countVisualOverlaps(obj) > 0) {
        this._hideMilestone(obj);
      } else {
        this._showMilestone(obj);
      }

      return obj;
    });
  }.on('didRender'),

  _overlaps(a, b) {
    return !(a.x[1] < b.x[0]) || (b.x[1] < a.x[0]);
  },

  _countVisualOverlaps(obj) {
    return obj.overlaps.reduce((a, b) => {
      return a + (this._isHidden(b) ? 0 : 1);
    }, 0);
  },

  _hideMilestone(obj) {
    Ember.$(obj.node).css('visibility','hidden');
  },

  _showMilestone(obj) {
    Ember.$(obj.node).css('visibility','inherit');
  },

  _isHidden(obj) {
    return Ember.$(obj.node).css('visibility') == 'hidden';
  }
});
