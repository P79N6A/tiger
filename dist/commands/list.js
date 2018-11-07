'use strict';

var _require = require(__dirname + '/../scripts/utils'),
    listTable = _require.listTable;

var projectsList = require(__dirname + '/../templates/projects');
var componentsList = require(__dirname + '/../templates/components');

// 脚手架和公共组件库
module.exports = listTable({
  pList: projectsList,
  cList: componentsList
}, 'Cli：脚手架 - Com：公共组件');