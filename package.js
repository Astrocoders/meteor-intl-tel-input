Package.describe({
  name: 'astrocoders:intl-tel-input',
  version: '0.0.1',
  summary: 'Internation input masker',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles([
    'lib/js/intlTelInput.js',
  ], 'client');

  api.addFiles([
    'lib/css/intlTelInput.css',
  ], 'client');

  api.addAssets([
    'lib/img/flags.png',
  ], 'client');
});

Package.onTest(function(api) {
});
