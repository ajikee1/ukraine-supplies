const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.listen(port, () => console.log(`Listening on port ${port}`));


app.post('/api/addNeed/', (req, res) => {
    let needed_item_name = req.body.needed_item_name;
    let need_description = req.body.need_description;
    let collection_status = req.body.collection_status;
    let needed_quantity = req.body.needed_quantity;

});