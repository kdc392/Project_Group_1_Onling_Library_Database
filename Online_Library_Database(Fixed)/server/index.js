const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

app.get('/', (req, res) => {
  res.send('Hello from Server');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
