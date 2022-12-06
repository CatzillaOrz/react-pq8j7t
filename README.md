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

# setup creating seperate CSS file
npm i -D extract-text-webpack-plugin@3

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

## jest

-[x] solution

- "jest": "^23.6.0",
- rm package-lock.json
- rm -rf node_modules
- npm i

- npm run test -- --watch

---

-[x] babel-jest version conflict in react + node application

- There might be a problem with the project dependency tree. It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

"babel-jest": "^24.9.0"

Don't try to install it manually: your package manager does it automatically. However, a different version of babel-jest was detected higher up in the tree:

/builds/ielts-cmds/IELTS-CMDS-ui-grp/cmds-ui-operations/node_modules/babel-jest (version: 26.6.1)

Manually installing incompatible versions is known to cause hard-to-debug issues.

If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project. That will permanently disable this message but you might encounter other issues.

- To fix the dependency tree, try following the steps below in the exact order:

1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
2. Delete node_modules in your project folder.
3. Remove "babel-jest" from dependencies and/or devDependencies in the package.json file in your project folder.
4. Run npm install or yarn, depending on the package manager you use.

- In most cases, this should be enough to fix the problem. If this has not helped, there are a few other things you can try:

1. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead. This may help because npm has known issues with package hoisting which may get resolved in future versions.
2. Check if /builds/ielts-cmds/IELTS-CMDS-ui-grp/cmds-ui-operations/node_modules/babel-jest is outside your project directory. For example, you might have accidentally installed something in your home folder.
3. Try running npm ls babel-jest in your project folder. This will tell you which other package (apart from the expected react-scripts) installed babel-jest.

- If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project. That would permanently disable this preflight check in case you want to proceed anyway.

## enzyme install | dependencies

- `react-test-render` is depercated because it can't do search the rendered output for a specific element and grab it's text, so it's going to be using enzyme library released by Airbnb which is a randerer for react but more featured renderer test.
- `enzyme@3` adapter is for `react@16` lower version such as `react@15` may try to use `enzyme@2`, haven't use react lower version so don't be sure about this...(or you can check https://airbnb.io/enzyme to check the update)
- polyfill for a browser feature know as request animation frame `RAF` short for request animation frame. `ram@3.3.2`
- `setupTests.js` is for set up `enzyme`. Folder link: `./test/setupTests.js`
- setup jest config(https://facebook.github.io/jest => Docs => Configuring Jest)
- setup `package.josn` to specify the argument config `"test": "jest --config=jest.config.json`

```bash
npm i -D enzyme@3.0.0 enzyme-adapter-react-16@1.0.0 raf@3.3.2
```
