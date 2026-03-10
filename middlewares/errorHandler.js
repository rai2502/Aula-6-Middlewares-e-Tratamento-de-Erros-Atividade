const errorHandler = (err, req, res, next) => {
    console.error(`Erro detectado: ${err.message}`);
    res.status(500).json({
        sucesso: false,
        mensagem: "Ocorreu um erro interno no servidor.",
        detalhe:err.message
    });
};
module.exports = errorHandlerMiddleware;

// 💡Códigos de Status HTTP mais comuns:
// 200 OK (tudo certo)
// 201 Created (recurso criado com sucesso)
// 400 Bad Request (cliente enviou dados errados)
// 404 Not Found (recurso não encontrado)
// 500 → Internal Server Error (erro no servidor)