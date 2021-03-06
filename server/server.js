const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: "http://localhost:3000"
}))

// serve our public images folder
app.use(express.static(__dirname + '/public'))

require('./config/mongoose.config');

const gameRoutes = require('./routes/game.routes');
gameRoutes(app);

app.listen(8000, () => {
	console.log("The express app server is listening on port: " + 8000);
})