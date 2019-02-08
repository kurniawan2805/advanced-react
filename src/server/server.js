import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import App from '../app/components/App';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const initialMarkup = 'Loading'; // ReactDOMServer.renderToString(<App />);

  res.send(`
  <html>
    <head>
      <title>Sample React App</title>
    </head>
    <body>
      <div id="mountNode">${initialMarkup}</div>
      <script src="/main.js"></script>
    </body>
  </html>
  `);
});

server.listen(4242, () => console.log('Server is running ...'));
