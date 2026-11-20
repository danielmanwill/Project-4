const express = require('express');
const app = express();

//Send index.html and style.css to any requesters looking for them
const web_files = express.static("Folder");
app.use(web_files);

app.listen(process.env.port || 3000);
