const core = require('@actions/core');

try {
  core.info('Here is some log');
  
  core.warning('And a warning message');
  
  core.error('Or an error one');
  
  core.info('ℹ️ I can also embed icons if I want');
  
  core.startGroup('A group of log lines')
  core.info('my first log')
  core.info('my second log')
  core.info('my third log')
  core.endGroup()
}
catch (err) {
  core.error(`Error ${err}, action may still succeed though`);
}
