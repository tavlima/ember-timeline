export default function() {
  this.namespace = '/api';

  this.get('/timeline-events', function() {
    return {
      data: [{
        type: 'timeline-events',
        id: 1,
        attributes: {
          title: 'Mile #1',
          start: new Date(2016, 0, 1),
          end: new Date(2016, 0, 1),
          color: null
        }
      }, {
        type: 'timeline-events',
        id: 2,
        attributes: {
          title: 'Mile #2',
          start: new Date(2016, 0, 2),
          end: new Date(2016, 0, 2),
          color: null
        }
      }, {
        type: 'timeline-events',
        id: 3,
        attributes: {
          title: 'Phase #5-#10',
          start: new Date(2016, 0, 5),
          end: new Date(2016, 0, 10),
          color: '#4dd963'
        }
      }, {
        type: 'timeline-events',
        id: 4,
        attributes: {
          title: 'Mile #4',
          start: new Date(2016, 0, 4),
          end: new Date(2016, 0, 4),
          color: null
        }
      }]
    };
  });
}
