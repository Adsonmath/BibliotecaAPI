// controllers/usuarioController.js

const { Usuario } = require('../models');

module.exports = {
  listarUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar usuários' });
    }
  },

  obterUsuario: async (req, res) => {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Erro ao obter usuário' });
    }
  },

  criarUsuario: async (req, res) => {
    try {
      const usuario = await Usuario.create(req.body);
      res.status(201).json(usuario);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  },

  atualizarUsuario: async (req, res) => {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (usuario) {
        await usuario.update(req.body);
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  },

  excluirUsuario: async (req, res) => {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (usuario) {
        await usuario.destroy();
        res.json({ message: 'Usuário excluído com sucesso' });
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
  }
};
