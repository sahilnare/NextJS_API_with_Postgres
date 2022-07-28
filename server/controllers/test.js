
import argon2 from 'argon2';
import query from '../lib/dbConnect';


export const connect = async (req, res) => {

	try {

		// const { rows } = await query('SELECT NOW()');
		const { rows } = await query('SELECT * from techstack');


		if (await argon2.verify('$argon2id$v=19$m=4096,t=3,p=1$XHoIYEL6dXFL3290Mxnt4w$KclF7OZbNToD3E6AwAkEtiCahGhiPycqno5ZCiI/77g', 'secret69')) {

			console.log("verified");

		} else {

			console.log("not verified, fraud");

		}
		
		res.status(200).json({ response: rows });
		
	} catch (error) {
		
		console.log(error);
		res.status(500).json({ msg: 'Something went wrong' });

	}

};

export const addName = async (req, res) => {

	try {

		const { techstack } = req.body;

		// const { rows } = await query('INSERT INTO test.test_table (name, number) VALUES($1, $2) RETURNING *', [name, parseInt(number, 10)]);
		const { rows } = await query('INSERT INTO techstack (tech_stack) VALUES($1) RETURNING *', [techstack]);

		console.log(rows);
		
		res.status(200).json({ response: rows });
		
	} catch (error) {
		
		console.log(error);
		res.status(500).json({ msg: 'Something went wrong' });

	}

};
