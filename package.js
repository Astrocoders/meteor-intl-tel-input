Package.describe({
  name: 'astrocoders:intl-tel-input',
  version: '0.0.1',
  summary: 'Internation input masker',
  git: 'https://github.com/Astrocoders/meteor-intl-tel-input',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('fourseven:scss@3.4.1');

  api.addFiles([
    'lib/js/utils.js',
    'lib/js/intlTelInput.js',
  ], 'client');

  api.addFiles([
    'lib/css/sprite.scss',
    'lib/css/intlTelInput.scss',
  ], 'client');

  api.addAssets([
    'lib/img/flags.png',
  ], 'client');
});

Package.onTest(function(api) {
});
