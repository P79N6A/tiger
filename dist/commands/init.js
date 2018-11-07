
'use strict';

require('babel-polyfill');
var exec = require('child_process').exec;
var co = require('co');
var prompt = require('co-prompt');
var config = require('../templates/projects');
var chalk = require('chalk');

module.exports = function () {
  co( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var tplName, projectName, gitUrl, branch, cmdStr;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prompt('Template name: ');

          case 2:
            tplName = _context.sent;
            _context.next = 5;
            return prompt('Project name: ');

          case 5:
            projectName = _context.sent;
            gitUrl = void 0;
            branch = void 0;


            if (!config.tpl[tplName]) {
              console.log(chalk.red('\n × Template does not exit!'));
              process.exit();
            }
            gitUrl = config.tpl[tplName].url;
            branch = config.tpl[tplName].branch;

            // git命令，远程拉取项目并自定义项目名
            cmdStr = 'git clone ' + gitUrl + ' ' + projectName + ' && cd ' + projectName + ' && git checkout ' + branch;


            console.log(chalk.white('\n Start generating...'));

            exec(cmdStr, function (error, stdout, stderr) {
              if (error) {
                console.log(error);
                process.exit();
              }
              console.log(chalk.green('\n √ Generation completed!'));
              console.log('\n cd ' + projectName + ' && npm install \n');
              process.exit();
            });

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};