'use strict';

require('babel-polyfill');
var co = require('co');
var prompt = require('co-prompt');
var config = require('../templates/projects');
var chalk = require('chalk');
var fs = require('fs');

module.exports = function () {
  co( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var tplName;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prompt('Project name: ');

          case 2:
            tplName = _context.sent;


            // 删除对应的模板
            if (config.tpl[tplName]) {
              config.tpl[tplName] = undefined;
            } else {
              console.log(chalk.red('Project does not exist!'));
              process.exit();
            }
            // 写入template.json
            fs.writeFile(__dirname + '/../templates/projects.json', JSON.stringify(config), 'utf-8', function (err) {
              if (err) console.log(err);
              console.log(chalk.green('Success! project deleted!'));
              console.log(chalk.grey('Run the following commands to view the list of projects: \n'));
              console.log(chalk.red('tiger list'));
              console.log('\n');
              process.exit();
            });

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};