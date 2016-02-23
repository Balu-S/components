import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('folder-tree-item-reopen', 'Integration | Component | folder tree item reopen', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{folder-tree-item-reopen}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#folder-tree-item-reopen}}
      template block text
    {{/folder-tree-item-reopen}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
