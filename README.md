# My Portfolio of React Vite

## Environment

```bash
npx create-vite MyPortfolio_Vite_React --template react-ts 
```

### Lint関連

```bash
npm i -D @typescript-eslint/eslint-plugin eslint eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks husky lint-staged prettier
npm i eslint-plugin-styled-components-varname
```

### 使用パッケージ

| 技術 | version | 備考 |
| ---- | ------- | ---- |
| [@types/styled-components](https://www.npmjs.com/package/@types/styled-components) | ^5.1.25 | styled-componentsの型定義ファイル |
| [eslint-plugin-styled-components-varname](https://www.npmjs.com/package/eslint-plugin-styled-components-varname) | ^1.0.1 | styled-components の変数名の命名ルールを設定する |
| [fs-extra](https://www.npmjs.com/package/fs-extra) | ^10.1.0 | node.js標準のfsモジュールを vite で使用可能にする |
| [react](https://www.npmjs.com/package/react) | ^18.0.0 | ユーザインタフェース構築のための JavaScript |
| [react-dom](https://www.npmjs.com/package/react-dom) | ^18.0.0 | Javascript のオブジェクトでリアルDOMを仮想的に作り、変更箇所だけ差分検知し更新することを React で行えるようにする |
| [react-icons](https://www.npmjs.com/package/react-icons) | ^4.4.0 | `Ant Design` や `Material Design`などを集めたアイコンの宝庫 |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom) | ^6.3.0 | ルーティングを定義できる |
| [styled-components](https://www.npmjs.com/package/styled-components) | ^5.3.5 | React思想のコンポーネント単位での管理がスタイルにも可能になる |
| [vite-plugin-env-compatible](https://www.npmjs.com/package/vite-plugin-env-compatible) | ^1.1.1 | vite で process.env の形式で環境変数を使用可能にする |
| [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths) | ^3.5.0 | vite.config.ts に tsconfig.json で指定した alias path を反映する |
| [@types/fs-extra](https://www.npmjs.com/package/@types/fs-extra) | ^9.0.13 | fs-extraの型定義ファイル |
| [@types/react](https://www.npmjs.com/package/@types/react) | ^18.0.0 | reactの型定義ファイル |
| [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) | ^18.0.0 | react-domの型定義ファイル |
| [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | ^5.28.0 | ESLint で Typescript のチェックを行う |
| [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react) | ^1.3.0 | vite 公式の React サポートプラグイン |
| [babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components) | ^2.0.7 | styled-componentsで出力されるクラス属性にファイル名やdisplayNameを表示する |
| [eslint](https://www.npmjs.com/package/eslint) | ^8.18.0 | コードの解析 |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) | ^8.5.0 | ESLint と Prettier を併用する |
| [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard) | ^17.0.0 | JavaScript Standard Styleのルールをeslintに適用する |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) | ^2.26.0 | importの順番をルール化して自動で整列させる |
| [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node) | ^11.1.0 | Node.js の記述に対するルールを設定する |
| [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) | ^6.0.0 | 非同期処理に対するルールを設定する |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) | ^7.30.0 | React のルールを設定する |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | ^4.6.0 | React Hooksのルールを設定する |
| [husky](https://www.npmjs.com/package/husky) | ^8.0.0 | Git コマンドフックに指定したコマンドを呼び出せる |
| [lint-staged](https://www.npmjs.com/package/lint-staged) | ^13.0.2 | commit したファイル(ステージングにあるファイル)に lint を実行する  |
| [prettier](https://www.npmjs.com/package/prettier) | ^2.7.1 | コードの整形 |
| [typescript](https://www.npmjs.com/package/typescript) | ^4.6.3 | JavaScript に対して、静的型付けとクラスベースオブジェクト指向を加えた言語 |
| [vite](https://www.npmjs.com/package/vite) | ^2.9.9 | 従来のビルドツールと比較して、高速で動作するビルドツールパッケージ |

### コンポーネント作成にあたって
