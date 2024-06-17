const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');
const autorController = require('../controllers/autorController');
const usuarioController = require('../controllers/usuarioController');

//rotas dos livros

router.get('/livros', livroController.listarLivros);
router.get('/livros/:id', livroController.obterLivro);
router.post('/livros', livroController.criarLivro);
router.put('/livros/:id', livroController.atualizarLivro);
router.delete('/livros/:id', livroController.excluirLivro);


// rotas dos autores


router.get('/autores', autorController.listarAutores);
router.get('/autores/:id', autorController.obterAutor);
router.post('/autores', autorController.criarAutor);
router.put('/autores/:id', autorController.atualizarAutor);
router.delete('/autores/:id', autorController.excluirAutor);

//rotas de usuarios



router.get('/usuarios', usuarioController.listarUsuarios);
router.get('/usuarios/:id', usuarioController.obterUsuario);
router.post('/usuarios', usuarioController.criarUsuario);
router.put('/usuarios/:id', usuarioController.atualizarUsuario);
router.delete('/usuarios/:id', usuarioController.excluirUsuario);




module.exports = router;
