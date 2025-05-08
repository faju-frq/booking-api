import "dotenv/config";


const dbConfig = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "mysql",
  MYSQL_URL: process.env.MYSQL_URL,
};

export default dbConfig;
