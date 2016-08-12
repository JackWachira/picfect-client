// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*',
      'rxjs/**/*',
      '@angular/**/*',
      '@angular2-material/**/*',
      'angular2-jwt/**/*',
      'ng2-facebook-sdk/dist/**/*',
      'ng2-uploader/**/*',
      'ng2-image-lazy-load/**/*',
      'ng2-toasty/**/*'
    ]
  });
};
