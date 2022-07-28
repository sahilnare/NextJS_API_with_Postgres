
import argon2 from 'argon2';
import { StatusCodes } from 'http-status-codes';
import UnAuthenticatedError from '../errors/unAuthenticated';
import query from '../lib/dbConnect';


const login = async (req, res) => {

	try {

		const { username, email, password } = req.body;
		console.log(username, email, password);

		res.status(StatusCodes.CREATED).json({ success: true });
		
	} catch (error) {

		console.log(error);
		throw new UnAuthenticatedError('Invalid credentials');
		
	}

};


const register = async (req, res) => {

	try {

		const { username, email, password } = req.body;

		const hashedPassword = await argon2.hash(password);
		console.log(hashedPassword);

		const { rows } = await query('INSERT INTO users (user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *', [username, email, hashedPassword]);

		// const token = user.createJWT();
		res.status(StatusCodes.CREATED).json({ user: rows });
		
	} catch (error) {

		console.log(error);
		throw new UnAuthenticatedError('Invalid credentials');
		
	}

};


export default register;
