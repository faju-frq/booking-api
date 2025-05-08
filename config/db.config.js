import "dotenv/config";


const dbConfig = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "mysql",
};
console.log(process.env.DB_HOST);
console.log("DB Config:", dbConfig);
export default dbConfig;
