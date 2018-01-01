# dentemple/boilerplate

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> A React/Redux boilerplate.

This repo is for my own use only.

However, feel free to fork, clone, or copy!

## Features

### Configured packages

The following packages are in addition to what's already provided by Create React App.

* Base: `react-scripts` ([See the _CRA User Guide_ for more information on what's included.](<(https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)>))
* Dev: `prettier`, `lint-staged`, `redux-devtools-extension`
* Styling: `styled-components`, `react-icons`
* State: `redux`, `redux-thunk`
* Routing: `react-router-dom (v4)`, `react-router-redux`, `history`
* Testing: `enzyme`

### Additional features

* [Code Splitting](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)
* [Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)
* [Auto-format on commit](https://prettier.io/docs/en/precommit.html)
* CSS Grid

## Folder Hierarchy

### Components: **Atomic Design**

Components follow the [Atomic Design](http://atomicdesign.bradfrost.com/) philosophy; however, React-friendly terms are used in place of the standard Chemistry metaphor.

* Atoms => `common/`
* Molecules => `composition/`
* Organisms => `features/`
* Pages remain as `pages/`

### Files: **Single-API**

To better encourage a "black box" design approach, components are arranged to form a single point of entry.

* ComponentName/
  * index.jsx
  * Presentational1.jsx
  * Presentational2.jsx
  * ...

To reduce clutter, Presentational components can be nested within Container components.

* ComponentName/
  * index.js <<< contains redux's `connect()` hook
  * UI/
    * index.jsx <<< receives the smart props and handles lifecycle changes
    * Presentational1.jsx
    * Presentational2.jsx
    * ...

### Redux Tree: **Rails-style**

---

## Code of Conduct

Link to [Code of Conduct](docs/code-of-conduct.md)

## License

[MIT License](docs/LICENSE.txt)
