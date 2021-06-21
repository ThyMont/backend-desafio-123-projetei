const PessoaFisica = require('../models/PessoaFisica');

module.exports = {
  async index(req, res) {
    try {
      const PessoasFisicas = await PessoaFisica.findAll();
      return res.json(PessoasFisicas);
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
  async findById(req, res) {
    try {
      const { cpf } = req.params;
      const pf = await PessoaFisica.findByPk(cpf);
      return res.json(pf);
    } catch (error) {
      return res.json({ message: error.message });
    }
  },

  async store(req, res) {
    try {
      const { cpf, name, phoneNumber, birthday } = req.body;
      const pessoaFisica = await PessoaFisica.create({
        cpf,
        name,
        phoneNumber,
        birthday,
      });
      return res.json(pessoaFisica);
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
  async delete(req, res) {
    try {
      const { cpf } = req.params;
      const r = await PessoaFisica.destroy({
        where: {
          cpf: cpf,
        },
      });
      return res.json({ message: 'Operação concluída com sucesso' });
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
  async edit(req, res) {
    try {
      const { cpf } = req.params;
      const { name, phoneNumber, birthday } = req.body;
      const updatedPessoaFisica = await PessoaFisica.update(
        { name, phoneNumber, birthday },
        {
          where: {
            cpf: cpf,
          },
        }
      );
      return res.json(updatedPessoaFisica);
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};
