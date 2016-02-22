import Ember from 'ember';
import CommonactionsMixin from '../../../mixins/commonactions';
import { module, test } from 'qunit';

module('Unit | Mixin | commonactions');

// Replace this with your real tests.
test('it works', function(assert) {
  let CommonactionsObject = Ember.Object.extend(CommonactionsMixin);
  let subject = CommonactionsObject.create();
  assert.ok(subject);
});
