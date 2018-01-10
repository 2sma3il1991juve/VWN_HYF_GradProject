const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
<<<<<<< HEAD
app.use(require('./routes/search'));
app.use(require('./routes/add'));
app.use(require('./routes/admin'));
=======
app.use(require('./routes/Home'));
app.use(require('./routes/Add'));
// app.use(require('./routes/admin'));
>>>>>>> master

const server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});