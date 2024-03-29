const core = require('@actions/core');

try {
  core.info('Here is some log');
  core.info('')
  core.warning('And a warning message');
  core.info('')
  core.error('Or an error one');
  core.info('')
  core.info('\u001b[38;5;6mI can play with colors')
  core.info('\u001b[48;2;255;0;0mEven the background')
  core.info('\u001b[1mBold text')
   core.info('')
  core.info('ℹ️ I can also embed icons if I want');
  core.info('any type of icon 💥');
  core.info('')
  core.startGroup('A group of log lines')
  core.info('my first log')
  core.info('my second log')
  core.info('my third log')
  core.endGroup()
    core.info('')
    core.info('')
    core.info('')
}
catch (err) {
  core.error(`Error ${err}, action may still succeed though`);
}
