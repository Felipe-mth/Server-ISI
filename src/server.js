const porta = 3003;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const banco_dados= require('./bancodedados');

//todas as requisições passam por aqui e transforma urlencoded em objetono
app.use(bodyParser.urlencoded({extended: true}));

app.get('/produtos', (req,res, next)=>{
     res.send(banco_dados.getProdutos());
});

app.get('/produtos/:id', (req,res,next)=>{
    res.send(banco_dados.getProduto(req.params.id))
});
//pega o valor digitado no postman, salva e retorna
app.post('/produtos', (req,res,next)=>{
    
    const produto= banco_dados.salvarProduto({
        name: req.body.name,
        price: req.body.price
    });

    res.send(produto);
});

app.put('/produtos/:id', (req,res,next)=>{
    
    const produto= banco_dados.salvarProduto({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    });

    res.send(produto);
});

app.delete('/produtos/:id', (req,res,next)=>{
    
    const produto= banco_dados.deleteProduto(req.params.id);

    res.send(produto);
});


app.listen(porta, ()=>{
    console.log(`Servidor está sendo executado na porta: ${porta}.`);
});