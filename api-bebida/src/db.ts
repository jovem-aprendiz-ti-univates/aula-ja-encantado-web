import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'apits',
  password: 'postgres', // nunca versionar
  port: 5432,
});

pool.on('connect', () => {
  console.log('Conectado no PostgreSQL..');
});

export default pool;