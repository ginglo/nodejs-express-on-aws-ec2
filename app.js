const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, resp)=>{
    resp.send("<h2>Express demo</h2><h4>Success </h4>");
});

app.get('/products', (req, resp)=> {
    resp.send([
        {
            productId: '101',
            price: 100
        },
        {
            productId:'102',
            price:200
        }
    ]);
});
app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
})