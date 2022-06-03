import dotenv from 'dotenv';

dotenv.config();

if (!process.env.PORT) {
  console.log('ERROR: getting ports');
  process.exit(1);
}

const PORT = parseInt(process.env.PORT as string, 10);
const DATABASE_URL = process.env.DATABASE_URI;

export { PORT, DATABASE_URL };