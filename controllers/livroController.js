const { Livro, Autor } = require('../models');

exports.listarLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll({ include: 'autor' });
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar livros' });
  }
};

exports.obterLivro = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id, { include: 'autor' });
    if (!livro) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter livro' });
  }
};

exports.criarLivro = async (req, res) => {
  try {
    const livro = await Livro.create(req.body);
    res.status(201).json({ message: 'Livro inserido com sucesso', livro });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar livro' });
  }
};

exports.atualizarLivro = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    await livro.update(req.body);
    res.json({ message: 'Livro atualizado com sucesso', livro });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
};

exports.excluirLivro = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    await livro.destroy();
    res.status(200).json({ message: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir livro' });
  }
};
