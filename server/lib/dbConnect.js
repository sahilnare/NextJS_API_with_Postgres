
import { Pool } from 'pg';

let pool;

if (!process.env.PGHOST || !process.env.PGUSER || !process.env.PGDATABASE) {

	throw new Error(
		'Please define the Postgres environment variables .env.local'
	);

}

if (!pool) {

	pool = new Pool({
		user: process.env.PGUSER,
		host: process.env.PGHOST,
		database: process.env.PGDATABASE,
		password: process.env.PGPASSWORD,
		port: process.env.PGPORT,
		max: 10
	});

}


const query = (text, params) => pool.query(text, params);

export default query;




