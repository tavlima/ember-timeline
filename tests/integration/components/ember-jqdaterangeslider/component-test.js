import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-jqdaterangeslider', 'Integration | Component | ember jqdaterangeslider', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-jqdaterangeslider}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-jqdaterangeslider}}
      template block text
    {{/ember-jqdaterangeslider}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
