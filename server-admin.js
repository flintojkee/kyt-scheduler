//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/kyt-scheduler-admin'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/kyt-scheduler-admin/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 1000, () => {
  console.log('Admin listening on port 1000');
});
