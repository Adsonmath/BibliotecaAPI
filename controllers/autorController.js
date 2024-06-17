const { Autor } = require('../models');

exports.listarAutores = async (req, res) => {
  try {
    const autores = await Autor.findAll();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar autores' });
  }
};

exports.obterAutor = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id);
    if (!autor) {
      return res.status(404).json({ error: 'Autor não encontrado' });
    }
    res.json(autor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter autor' });
  }
};

exports.criarAutor = async (req, res) => {
  try {
    const autor = await Autor.create(req.body);
    res.status(201).json({ message: 'Autor inserido com sucesso', autor });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar autor' });
  }
};

exports.atualizarAutor = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id);
    if (!autor) {
      return res.status(404).json({ error: 'Autor não encontrado' });
    }
    await autor.update(req.body);
    res.json({ message: 'Autor atualizado com sucesso', autor });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar autor' });
  }
};

exports.excluirAutor = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id);
    if (!autor) {
      return res.status(404).json({ error: 'Autor não encontrado' });
    }
    await autor.destroy();
    res.status(200).json({ message: 'Autor excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir autor' });
  }
};
