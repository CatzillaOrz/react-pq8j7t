# react-pq8j7t

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-pq8j7t)

## babel

```bash
babel src/index.js --out-file=public/script/app.js --presets=env,react --watch
```

```bash
# babel plugin for webpack
mpm i -D babel-core@6 babel-loader@7

# set up webpack | module.rules:[{loader: 'babel-loader' ...}] | babelrc 'presets'
# setup webpack dev-server | devtool: eval-cheap-module-source-map
npm i -D webpack-dev-server

# setup webpack | devServer {static: ..., historyApiFallback//React-Router}
# setup webpack babel ES6 => ES5 | babelrc plugin[...]
npm i -D babel-plugin-transform-class-properties@6

# setup webpack babel plugin spread object | babelrc plugin[...]
npm i -D npm install --save-dev babel-plugin-transform-object-rest-spread

```

## npm yarn

```bash

npm config get
npm config set proxy http://127.0.0.1:8889
npm config set https-proxy http://127.0.0.1:8889

yarn config set proxy http://127.0.0.1:8889
yarn config set https-proxy http://127.0.0.1:8889
```

## npm -D

```bash
# use date 3rd party lib
npm i -D moment react-date@12 react-addons-shallow-compare@15
# react-date maybe rely on addons...

```
