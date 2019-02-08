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

```javascript
Warning: render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.
```

Use .hydrate() rather than render() both server and client render same initial
component when using hydrate() DOM will initially do nothing.

SSR hydrate content in event

if using other server node, lose SSR, only html

not only SEO but performance <https://jscomplete.com/learn>

disable js in client no React and JS so should be browsable without js never
happen js disable, need CPU to parsing JS react in client side will be slow. Not
only node to perform SSR. Recomended SSR~~.

api.github.com
