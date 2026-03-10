const express = require('express');
const app = express();

app.use(express.json());


// =======================================
// MIDDLEWARE GLOBAL (LOG)
// =======================================
app.use((req, res, next) => {
    const data = new Date().toISOString();
    console.log(`[${data}] ${req.method} ${req.url}`);
    next();
});


// =======================================
// FUNÇÃO GERAR ID
// =======================================
function gerarNovoId(lista) {
    if (lista.length === 0) return 1;
    return Math.max(...lista.map(item => item.id)) + 1;
}


// =======================================
// ARRAY DE PRODUTOS
// =======================================
let produtos = [];


// =======================================
// MIDDLEWARE DE VALIDAÇÃO
// =======================================
function validarProduto(req, res, next) {

    const { nome, preco } = req.body;

    if (!nome || preco == null) {
        const erro = new Error("Nome e preço são obrigatórios");
        erro.status = 400;
        return next(erro);
    }

    next();
}


// =======================================
// ROTAS
// =======================================

// GET - listar produtos
app.get('/produtos', (req, res) => {

    res.status(200).json({
        sucesso: true,
        total: produtos.length,
        dados: produtos
    });

});


// POST - criar produto
app.post('/produtos', validarProduto, (req, res, next) => {

    try {

        const { nome, preco, descricao } = req.body;

        const novoProduto = {
            id: gerarNovoId(produtos),
            nome,
            preco,
            descricao: descricao ?? null
        };

        produtos.push(novoProduto);

        res.status(201).json({
            sucesso: true,
            mensagem: "Produto criado com sucesso",
            produto: novoProduto
        });

    } catch (erro) {
        next(erro);
    }

});


// =======================================
// ERROR HANDLER GLOBAL
// =======================================
app.use((err, req, res, next) => {

    console.error("Erro:", err.message);

    res.status(err.status || 500).json({
        sucesso: false,
        erro: err.message || "Erro interno do servidor"
    });

});

module.exports = app;