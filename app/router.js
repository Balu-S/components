import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('components', function() {});
  this.route('selection');
  this.route('foldertree', function() {
    this.route('reopen');
  });
  this.route('rename');
  this.route('customfields');
});

export default Router;
