# Creating Seperate CSS file

## install plugin

```bash
# setup creating seperate CSS file
npm i -D extract-text-webpack-plugin@3
```

## require plugin

- webpack

  - module
    - rules
      - use: CSSExtract.extract
  - plugins: [CSSExtract]

- notes
  - [] plugins[...] is where you can setup all your plugins that should have access to change and work your existing webpack config.

## snippets

```js
const CSSExtract = require('extract=text-webpack-plugin')

module.exports = ()=>{
        module:{
                rules:[
                //...
                {itest: /\.s?css$/},
                use: CSSExtract.extract({
                        use: [...]
                    })
                ],
            },
            plugin:[CSSExtract]
    }

```

## webpack style extract

- 替换 extract-text-webpack-plugin | use -> mini-css-extract-plugin
- 干掉 style-loader，它会和 mini-css-extract-plugin 冲突，打包成功！
