module.exports = {
  // dialect: 'mariadb',
  // host: 'db4free.net',
  dialect: 'mysql',
  host: 'sql10.freemysqlhosting.net',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  define: { timestamps: true, underscored: true },
};
