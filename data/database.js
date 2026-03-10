// =========================
// ARRAY DE CATEGORIAS
// =========================
let categorias = [
    { id: 1, nome: "Massas" },
    { id: 2, nome: "Risotos" },
    { id: 3, nome: "Bebidas" },
    { id: 4, nome: "Sobremesas" }
];

// =========================
// ARRAY DE PRODUTOS
// =========================
let produtos = [

    // ================= MASSAS =================
    { id: 1, categoriaId: 1, nome: "Spaghetti alla Carbonara", preco: 49.00, descricao: "Pancetta italiana, parmesão e gema cremosa.", imagem: "https://i.pinimg.com/1200x/f2/9f/f7/f29ff752fe9b098e8a3c9e73d5de2dec.jpg" },
    { id: 2, categoriaId: 1, nome: "Fettuccine Alfredo", preco: 52.00, descricao: "Molho cremoso especial com toque de noz-moscada.", imagem: "https://i.pinimg.com/1200x/04/f4/9e/04f49ee67da37e9632d74daf3aa8b0e8.jpg" },
    { id: 3, categoriaId: 1, nome: "Tagliatelle alla Bolognese", preco: 55.00, descricao: "Ragu tradicional cozido lentamente.", imagem: "https://i.pinimg.com/1200x/46/ce/c2/46cec29837abe9a5bf8c3680cf6c5d09.jpg" },
    { id: 4, categoriaId: 1, nome: "Penne al Pesto Genovese", preco: 48.00, descricao: "Manjericão fresco, pinoli e azeite extra virgem.", imagem: "https://i.pinimg.com/1200x/6a/4b/2c/6a4b2c43779e367e805186fad692963f.jpg" },
    { id: 5, categoriaId: 1, nome: "Lasanha alla Casa", preco: 58.00, descricao: "Camadas de massa fresca, carne e queijo gratinado.", imagem: "https://i.pinimg.com/1200x/1f/0b/54/1f0b548556ef6f805c85d4a382d3b65c.jpg" },
    { id: 6, categoriaId: 1, nome: "Spaghetti ai Frutti di Mare", preco: 69.00, descricao: "Camarões, mexilhões e lula ao molho branco.", imagem: "https://i.pinimg.com/1200x/5d/b6/b5/5db6b55b77f4b097436377a29e7be716.jpg" },
    { id: 7, categoriaId: 1, nome: "Ravioli di Ricotta e Spinaci", preco: 56.00, descricao: "Recheado com ricota e espinafre ao molho pomodoro.", imagem: "https://i.pinimg.com/1200x/d0/89/3a/d0893a27b9d0eb8e32d9a653ccde7cef.jpg" },
    { id: 8, categoriaId: 1, nome: "Gnocchi al Pomodoro", preco: 47.00, descricao: "Nhoque artesanal ao molho de tomate italiano.", imagem: "https://i.pinimg.com/1200x/51/15/6d/51156dcd186cec1ceb14c2e94dff8a59.jpg" },

    // ================= RISOTOS =================
    { id: 9, categoriaId: 2, nome: "Risoto de Camarão", preco: 59.00, descricao: "Arroz arbóreo cremoso com camarões frescos.", imagem: "https://i.pinimg.com/1200x/7c/eb/e2/7cebe2e57288e190e401ed424388065a.jpg" },
    { id: 10, categoriaId: 2, nome: "Risoto al Funghi", preco: 54.00, descricao: "Cogumelos frescos e toque de vinho branco.", imagem: "https://i.pinimg.com/736x/6a/ab/1e/6aab1eb4643c76de07d82dfc6f8b6fe7.jpg" },
    { id: 11, categoriaId: 2, nome: "Risoto Parma", preco: 62.00, descricao: "Presunto de Parma com parmesão envelhecido.", imagem: "https://i.pinimg.com/1200x/0a/5a/c7/0a5ac7a1ca1e4a45af335d3c44c6057f.jpg" },

    // ================= BEBIDAS =================
    { id: 12, categoriaId: 3, nome: "Vinho Tinto Italiano", preco: 89.00, descricao: "Garrafa 750ml.", imagem: "https://i.pinimg.com/1200x/a7/6e/c6/a76ec648c000b2bc38b61e888801ce48.jpg" },
    { id: 13, categoriaId: 3, nome: "Vinho Branco Seco", preco: 84.00, descricao: "Leve e refrescante.", imagem: "https://i.pinimg.com/1200x/51/44/9e/51449e00a62478bd7de2fdbae2cb95ab.jpg" },
    { id: 14, categoriaId: 3, nome: "Aperol Spritz", preco: 32.00, descricao: "Clássico drink italiano.", imagem: "https://i.pinimg.com/736x/76/c8/b1/76c8b11eb9b2523ac3421d7d0791725b.jpg" },

    // ================= SOBREMESAS =================
    { id: 15, categoriaId: 4, nome: "Tiramisù", preco: 29.00, descricao: "Mascarpone, café e cacau.", imagem: "https://i.pinimg.com/1200x/24/1f/40/241f40cdb81ee38b3d1e87a593c5ace7.jpg" },
    { id: 16, categoriaId: 4, nome: "Panna Cotta", preco: 26.00, descricao: "Com calda de frutas vermelhas.", imagem: "https://i.pinimg.com/736x/10/bf/a5/10bfa5d42190821a156268ab547eccbb.jpg" },
    { id: 17, categoriaId: 4, nome: "Cannoli Siciliano", preco: 28.00, descricao: "Massa crocante recheada com ricota doce.", imagem: "https://i.pinimg.com/1200x/2b/c6/74/2bc67479b6dd68278e928f9d09973d16.jpg" }
];

module.exports = { categorias, produtos };