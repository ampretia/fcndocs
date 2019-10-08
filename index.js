const handler = require('serve-handler');
const http = require('http');
const open = require('open'); 
const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/zeit/serve-handler#options
  return handler(request, response,{
    "public": "docs/master"
  });
})
 
server.listen(3000, async () => {
  console.log('Running at http://localhost:3000');
  // Opens the URL in the default browser
  await open('http://localhost:3000');
});
