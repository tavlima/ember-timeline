/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    'ember-cli-bootstrap-sassy': {
      'js': false
    }
  });

  app.import('bower_components/moment/moment.js');

  app.import('bower_components/jquery-ui/ui/jquery.ui.core.js');
  app.import('bower_components/jquery-ui/ui/jquery.ui.widget.js');
  app.import('bower_components/jquery-ui/ui/jquery.ui.mouse.js');
  app.import('bower_components/jquery-ui/themes/cupertino/jquery-ui.min.css');

  app.import('bower_components/jquery-mousewheel/jquery.mousewheel.js');
  app.import('vendor/jQRangeSlider-5.7.2/jQRangeSlider-min.js');
  app.import('vendor/jQRangeSlider-5.7.2/css/classic.css');

  var jQRangeSliderAssets = new Funnel('vendor/jQRangeSlider-5.7.2', {
    srcDir: '/css/icons-classic',
    include: ['*.png'],
    destDir: '/assets/icons-classic'
  });

  app.import('bower_components/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js');
  app.import('bower_components/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css');

  var bootstrapCollorpickerAssets = new Funnel('bower_components/mjolnic-bootstrap-colorpicker', {
    srcDir: '/dist/img/bootstrap-colorpicker',
    include: ['*.png'],
    destDir: '/img/bootstrap-colorpicker'
  });

  return app.toTree([jQRangeSliderAssets, bootstrapCollorpickerAssets]);
};
