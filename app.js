const express = require('express')
let bodyParser = require("body-parser")
const transactions = require('./src/transaction')
const view = require('./src/view.js')
const fs = require('fs')
const app = express()
const port = 4000
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./'));

/* app.get('/', (req, res) => {
//fs.readFile( __dirname  + '/index.html', { encoding: 'utf8' })

fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}) */

app.get('/get-transactions', (req, res) => {
    res.json(transactions.get_transactions())
})

app.get('/get-transaction/:id', (req, res) => {
    res.json(transactions.get_transaction(Number(req.params.id)))
})

app.get('/html/all-transactions', (req, res) => {
   
    res.send(view.displayAllTransactions(transactions.get_transactions()))
    // test
})

app.get('/html/transaction/:id', (req, res) => {
   // res.send(transactions.get_transaction(Number(req.params.id)))
    res.send(view.displayTransaction(transactions.get_transaction(Number(req.params.id))))
})

app.post('/new-transaction', (req, res) => {
    
    transactions.new_transction(req.body.name,req.body.amount,req.body.emetteur,req.body.destinataire,req.body.date_execution)
    res.json({"message" : "ok"});
   
   })  

app.listen(port, () => {
    console.log(`serveur de transaction opérationnel au port ${port}`)
})
app.get('/add.html', function(req, res) {
    // exécuté lorsqu'est appelé page.html
    res.sendFile( __dirname  + '/add.html');
  });

  app.post('/post', function(req, res) {
    // exécuté lorsqu'est appelé post.html
    

    transactions.new_transction(req.body.name,req.body.amount,req.body.emetteur,req.body.destinataire,req.body.date_execution)

    res.send("<p>transaction ajoutée avec succès</>")
  });