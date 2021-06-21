module.exports = {
  dialect: 'mariadb',
  host: 'db4free.net',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  define: { timestamps: true, underscored: true },
};
