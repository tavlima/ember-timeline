export default function() {
  this.namespace = '/api';

  this.get('/events');
  this.post('/events');
  this.get('/events/:id');
  this.put('/events/:id');
  this.patch('/events/:id');
  this.delete('/events/:id');
}
