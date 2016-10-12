import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-timeline-milestone', 'Integration | Component | ember timeline milestone', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-timeline-milestone}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-timeline-milestone}}
      template block text
    {{/ember-timeline-milestone}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
