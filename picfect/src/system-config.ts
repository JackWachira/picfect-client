// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'angular2-jwt': 'vendor/angular2-jwt',
  'ng2-facebook-sdk': 'vendor/ng2-facebook-sdk',
  'ng2-uploader': 'vendor/ng2-uploader',
  'ng2-image-lazy-load': 'vendor/ng2-image-lazy-load',
  'ng2-toasty': 'vendor/ng2-toasty'
};

/** User packages configuration. */
const packages: any = {
  'angularfire2': {main: 'angularfire2.js'},
  'angular2-jwt': {main: 'angular2-jwt.js'},
  'ng2-facebook-sdk': {main: 'ng2-facebook-sdk.js'},
  'ng2-uploader': {main: 'ng2-uploader.js'},
  'ng2-image-lazy-load': {main: 'ng2-image-lazy-load.js'},
  'ng2-toasty': {main: 'ng2-toasty.js'}
};
const materialPkgs:string[] = [
  'core',
  'toolbar',
  'icon',
  'button',
  'sidenav',
  'list',
  'card',
  'input',
  'progress-bar',
  'progress-circle',
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/auth',
  'app/canvas',
  'app/category',
  'app/gallery',
  'app/home',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
