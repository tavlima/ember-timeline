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

  // Moment.js
  app.import('bower_components/moment/moment.js');

  // jQuery UI
  app.import('bower_components/jquery-ui/ui/jquery.ui.core.js');
  app.import('bower_components/jquery-ui/ui/jquery.ui.widget.js');
  app.import('bower_components/jquery-ui/ui/jquery.ui.mouse.js');
  app.import('bower_components/jquery-ui/themes/cupertino/jquery-ui.min.css');

  // jQDateRangeSlider
  app.import('bower_components/jquery-mousewheel/jquery.mousewheel.js');
  app.import('vendor/jQRangeSlider-5.7.2/jQRangeSliderMouseTouch.js');
  app.import('vendor/jQRangeSlider-5.7.2/jQRangeSliderDraggable.js');
  app.import('vendor/jQRangeSlider-5.7.2/jQRangeSliderBar.js');
  app.import('vendor/jQRangeSlider-5.7.2/jQRangeSliderHandle.js');
  app.import('vendor/jQRangeSlider-5.7.2/jQRangeSliderLabel.js');
  app.import('vendor/jQRangeSlider-5.7.2/jQRangeSlider.js');
  app.import('vendor/jQRangeSlider-5.7.2/jQDateRangeSliderHandle.js');
  app.import('vendor/jQRangeSlider-5.7.2/jQDateRangeSlider.js');
  app.import('vendor/jQRangeSlider-5.7.2/css/classic.css');

  var jQRangeSliderAssets = new Funnel('vendor/jQRangeSlider-5.7.2', {
    srcDir: '/css/icons-classic',
    include: ['*.png'],
    destDir: '/assets/icons-classic'
  });

  // Bootstrap Colorpicker
  app.import('bower_components/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js');
  app.import('bower_components/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css');

  var bootstrapCollorpickerAssets = new Funnel('bower_components/mjolnic-bootstrap-colorpicker', {
    srcDir: '/dist/img/bootstrap-colorpicker',
    include: ['*.png'],
    destDir: '/img/bootstrap-colorpicker'
  });

  // Hammer.js
  app.import('bower_components/hammerjs/hammer.js')

  return app.toTree([jQRangeSliderAssets, bootstrapCollorpickerAssets]);
};
