const express = require('express');
const app = express();
const port = 4000;
var path = require('path');

// Setting up the public directory
app.use(express.static(__dirname + 'public'));
app.use('/logo.png',express.static(path.join(__dirname, 'logo.png')));
app.use('/styles.css',express.static(path.join(__dirname, 'styles.css')));
app.get('/', function(req,res) {
console.log(__dirname)
 res.sendFile(path.join(__dirname+'/index.html')); 
});

app.listen(port, () => console.log(`listening on port ${port}!`));