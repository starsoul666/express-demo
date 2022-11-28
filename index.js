const express = require("express");
const cors = require("cors");
const api = require('./api')

const app = express();

app.use(cors());
app.use('/api', api)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
