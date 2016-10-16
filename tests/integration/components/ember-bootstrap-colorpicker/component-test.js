import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-bootstrap-colorpicker', 'Integration | Component | ember bootstrap colorpicker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-bootstrap-colorpicker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-bootstrap-colorpicker}}
      template block text
    {{/ember-bootstrap-colorpicker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
