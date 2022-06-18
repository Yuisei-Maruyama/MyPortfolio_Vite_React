import packageJson from '../package.json'
import { readFileSync, writeFile } from 'fs-extra'

const { dependencies, devDependencies } = packageJson
const readme = readFileSync('README.md', 'utf-8')

const name: string[] = []
const version: string[] = []

const getDesc = (packageName: string) => {
  switch (packageName) {
    case '':
      return ''
    default:
      break
  }
  if (packageName.startsWith('@types')) {
    return `${packageName.split('@types/')[1]}の型定義ファイル`
  }
  return ''
}

Object.entries(dependencies).forEach(([key, value]) => {
  name.push(key)
  version.push(value)
})

Object.entries(devDependencies).forEach(([key, value]) => {
  name.push(key)
  version.push(value)
})

let tableBody = '| 技術 | version | 備考 |\n| ---- | ------- | ---- |\n'

for (let i = 0; i < name.length; i++) {
  tableBody = tableBody.concat(
    `| [${name[i]}](https://www.npmjs.com/package/${name[i]}) | ${version[i]} | ${getDesc(name[i])} |\n`
  )
}

writeFile(
  'README.md',
  readme.replace(
    readme.match(/### 使用パッケージ\n\n([\s\S]*)\n### コンポーネント作成にあたって/)?.[1] || '',
    tableBody
  ),
  (err) => {
    if (err) throw err
    console.log('正常に書き込みが完了しました')
  }
)
