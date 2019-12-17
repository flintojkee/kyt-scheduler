//Install express server
const express = require('express');
const path = require('path');
const app = express();
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/kyt-scheduler-user'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/kyt-scheduler-user/index.html'));
});

// app.get('/*', function(req, res) {
//   res.send('Hello world From Server 2');
// });
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log('Admin listening on port 8080');
});
