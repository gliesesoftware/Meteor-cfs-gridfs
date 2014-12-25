Package.describe({
  name: 'gliese:cfs-gridfs',
  version: '0.0.28',
  summary: 'Gliese flavour of the GridFS storage adapter for CFS (INTERNAL USE ONLY)',
  git: 'https://github.com/gliesesoftware/cfs-gridfs.git'
});

Npm.depends({
  mongodb: '1.3.23',
  'gridfs-stream': '0.5.1'
  //'gridfs-locking-stream': '0.0.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['gliese:cfs-base@0.0.28', 'gliese:cfs-storage@0.1.2']);
  api.addFiles('gridfs.server.js', 'server');
  api.addFiles('gridfs.client.js', 'client');
});

Package.onTest(function(api) {
  api.use(['gliese:cfs-gridfs', 'test-helpers', 'tinytest'], 'server');
  api.addFiles('tests/server-tests.js', 'server');
  api.addFiles('tests/client-tests.js', 'client');
});
