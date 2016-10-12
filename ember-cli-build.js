/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-bootstrap-sassy': {
      'js': false
    }
  });

  app.import('bower_components/moment/moment.js');

  app.import('bower_components/jquery-ui/ui/jquery-ui.js');
  app.import('bower_components/jquery-ui/themes/cupertino/jquery-ui.min.css');

  app.import('bower_components/jquery-mousewheel/jquery.mousewheel.js');
  app.import('vendor/jQRangeSlider-5.7.2/jQRangeSlider-min.js');
  app.import('vendor/jQRangeSlider-5.7.2/css/iThing-min.css');

  return app.toTree();
};
