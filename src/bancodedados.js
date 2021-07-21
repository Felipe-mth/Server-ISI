const sequence = {
    _id: 1,
    get id(){return this._id++} //para sempre retornar o próximo valor de id.
}

//vai ter como coleção dos id de produtos
const produtos = {}

//verifica se tem id, adiciona id, salva e retorna o produto.
function salvarProduto(produto){
    if(!produto.id){
        produto.id = sequence.id;
       
    }
    produtos[produto.id] = produto;
    return produto;
    
}
//pega um produto pelo seu id 
function getProduto(id){
    return produtos[id] || [];
}
//lista todos os produtos
function getProdutos(){
    return Object.values(produtos);
}

function deleteProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, deleteProduto}