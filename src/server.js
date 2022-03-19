const http = require('http');
const app = require("./app");



const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

//server.listen(PORT, console.log(`Server is running on port ${PORT}`));

// app.listen(process.env.PORT || 5000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
//   });

  app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });