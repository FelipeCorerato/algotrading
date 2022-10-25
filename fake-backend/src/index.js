const { createServer } = require('the-fake-backend');

const server = createServer();

server.routes([
  {
    path: '/spreads',
    methods: [
      {
        type: 'get',
        file: 'data/spreads.json',
      },
      {
        type: 'post',
        data: 'OK',
      },
    ],
  },
]);

server.listen(8080);
