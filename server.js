// Import the built-in HTTP module
const http = require('http');

// Define the port number
const PORT = process.env.PORT || 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response
  res.end('Hello, this is a simple Node.js server!');
});

// Start listening on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
