const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: "http://localhost:3000"
}))
app.use(fileUpload());

require('./config/mongoose.config');

const gameRoutes = require('./routes/game.routes');
gameRoutes(app);

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(8000, () => {
	console.log("The express app server is listening on port: " + 8000);
})