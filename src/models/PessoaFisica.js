const { Model, DataTypes } = require('sequelize');

class PessoaFisica extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: { type: DataTypes.STRING, primaryKey: true },
        name: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        birthday: DataTypes.DATE,
      },
      { sequelize, tableName: 'PessoaFisica' }
    );
  }
}

module.exports = PessoaFisica;
