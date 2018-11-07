'use strict';

require('babel-polyfill');
var co = require('co');
var prompt = require('co-prompt');
var config = require('../templates/components');
var chalk = require('chalk');
var fs = require('fs');

module.exports = function () {
  co( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var tplAuthor, tplName;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prompt('Author name: ');

          case 2:
            tplAuthor = _context.sent;
            _context.next = 5;
            return prompt('Component name: ');

          case 5:
            tplName = _context.sent;


            // 避免重复添加
            if (!config.tpl[tplName]) {
              config.tpl[tplName] = {};
              config.tpl[tplName]['author'] = tplAuthor;
            } else {
              console.log(chalk.red('Component has already existed!'));
              process.exit();
            }

            // 把模板信息写入templates.json
            fs.writeFile(__dirname + '/../templates/components.json', JSON.stringify(config), 'utf-8', function (err) {
              if (err) console.log(err);
              console.log(chalk.green('Success! New component added!\n'));
              console.log(chalk.grey('Run the following commands to view the list of components: \n'));
              console.log(chalk.red('tiger list'));
              console.log('\n');
              process.exit();
            });

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};