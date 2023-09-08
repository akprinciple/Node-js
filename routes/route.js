app.post("/store", async function (req, res) {
    const {name, category, description, price} = req.body
    try{
        const result = await product.create({name, category, description, price})
        res.json(result)
    }
    catch(error){
        console.log(error);
    }
    
})
app.post("/blog", async function (req, res) {
    console.log(req.body);
    const { title, description, date} = req.body;
    try {
      const response = await blog.create({ title, description, date });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  app.get('/users', function (req, res) {
    res.send('<h1>Hello World</h1>')
})

app.post('/users', function (req, res) {
    res.send('Hello World of post')
})
app.post('/contact', function (req, res) {
    res.json(req.body.email)
    // console.log(req.body);
})

app.post('/post', function (req, res) {
    res.json(req.body)
    console.log(req.body);
})
let products = [
    {name : 'Cloth', price : '5000'},
    {name : 'Shoe', price : '100'},
    {name : 'Watch', price : '25000'},
    {name : 'Soth', price : '5000'},
]
app.get('/products', (rep, res)=>{
    // res.json(products)
    fs.readFile('index.html', function (err, data) {
        res.end(data)
    })
})