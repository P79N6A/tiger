'use strict';

var Table = require('cli-table');
var chalk = require('chalk');

var table = new Table({
  chars: {
    'top': '═',
    'top-mid': '╤',
    'top-left': '╔',
    'top-right': '╗',
    'bottom': '═',
    'bottom-mid': '╧',
    'bottom-left': '╚',
    'bottom-right': '╝',
    'left': '║',
    'left-mid': '╟',
    'mid': '─',
    'mid-mid': '┼',
    'right': '║',
    'right-mid': '╢',
    'middle': '│'
  },
  head: ['Cli./Com.', 'Project Name', 'Author', 'Branch'],
  style: {
    head: ['green']
  },
  colWidths: [12, 25, 10, 10]
});

function listTable(list, lyric) {
  var plist = Object.keys(list.pList.tpl);
  if (plist.length) {
    plist.forEach(function (key, i) {
      // 处理模板文件
      var plistObj = list.pList.tpl[key];
      table.push(['Cli.' + (i + 1), key, plistObj['author'], plistObj['branch']]);
      if (table.length === plist.length) {
        // 处理公共组件库
        var clist = Object.keys(list.cList.tpl);
        clist.forEach(function (key, j) {
          table.push(['Com.' + (j + 1), key, list.cList['tpl'][key]['author'], '/']);
        });
        if (lyric) {
          console.log(chalk.green('\u2714 ' + lyric));
        }
        console.log(table.toString());
        process.exit();
      }
    });
  } else {
    console.log(table.toString());
    if (lyric) {
      console.log(chalk.green('\u2714 ' + lyric));
    }
    process.exit();
  }
}

exports.listTable = listTable;