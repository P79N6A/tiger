const Table = require('cli-table')
const chalk = require('chalk')

const table = new Table({
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
  head: ['Num', 'Template Name', 'Author', 'Branch'],
  style: {
    head: ['green']
  },
  colWidths: [8, 25, 10, 10]
})

function listTable(tplList, lyric) {
  const list = Object.keys(tplList.tpl)
  if (list.length) {
    list.forEach((key, i) => {
      table.push([`No.${i + 1}`, key, tplList['tpl'][key]['author'], tplList['tpl'][key]['branch']])
      if (table.length === list.length) {
        console.log(table.toString())
        if (lyric) {
          console.log(chalk.green(`\u2714 ${lyric}`))
        }
        process.exit()
      }
    })
  } else {
    console.log(table.toString())
    if (lyric) {
      console.log(chalk.green(`\u2714 ${lyric}`))
    }
    process.exit()
  }
}

exports.listTable = listTable