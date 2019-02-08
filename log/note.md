# Advanced React

Command

source:
<https://jscomplete.com/learn/create-javascript-development-environment-node-react>

```javascript
mkdir advcanced-react
cd advanced-react
npm init

npm i express //for basic server
```

```js
npm i
babel-loader // for client side
@babel/node //wrapper node command for server side
@babel/preset-env // for setting, for target browser compatibility
@babel/preset-react //convert jsx to React.createElement
-D nodemon
// eslint !important
npm i -D eslint babel-eslint eslint-plugin-react-hooks //brand new
```

create file `eslintrc.js`

```js
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commons: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // You can do your customizations here...
    // For example, if you don't want to use the prop-types package,
    // you can turn off that recommended rule with: 'react/prop-types': ['off']
    'react/prop-types': ['off'],
  },
};
```

for testing purpose `npm i -D jest babel-jest react-test-renderer`
