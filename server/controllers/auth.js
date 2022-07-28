
import argon2 from 'argon2';
import { StatusCodes } from 'http-status-codes';
import UnAuthenticatedError from '../errors/unAuthenticated';
import BadRequestError from '../errors/badRequest';
import query from '../lib/dbConnect';


export const login = async (req, res) => {

	const { username, password } = req.body;
	console.log(username, password);

	if (!username || !password) {

		throw new BadRequestError('Please provide email and password');

	}

	if (await argon2.verify(password, password)) {

		res.status(StatusCodes.CREATED).json({ data: { username } });

	} else {

		throw new UnAuthenticatedError('Username or password is incorrect');

	}

};


export const register = async (req, res) => {


	const { username, email, password } = req.body;

	const hashedPassword = await argon2.hash(password);
	console.log(hashedPassword);

	const { rows } = await query('INSERT INTO users (user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *', [username, email, hashedPassword]);

	// const token = user.createJWT();
	res.status(StatusCodes.CREATED).json({ user: rows });

};


