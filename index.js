const server = require("./api/server");
const PORT = process.env.PORT || 8081;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = server;
