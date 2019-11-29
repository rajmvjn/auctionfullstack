const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('api running')); 

app.use('/api/auction', require('./routes/api/auction/auction'));
app.use('/api/auction/finalize-auction', require('./routes/api/auction/auction'));


const PORT = process.env.PORT || 4000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));