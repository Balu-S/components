import Ember from 'ember';
import FoldersviewactionMixin from '../../../mixins/foldersviewaction';
import { module, test } from 'qunit';

module('Unit | Mixin | foldersviewaction');

// Replace this with your real tests.
test('it works', function(assert) {
  let FoldersviewactionObject = Ember.Object.extend(FoldersviewactionMixin);
  let subject = FoldersviewactionObject.create();
  assert.ok(subject);
});
