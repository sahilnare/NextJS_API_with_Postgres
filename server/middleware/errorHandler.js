
import { StatusCodes } from 'http-status-codes';
import CustomAPIError from '../errors/customErrors';

export function onNoMatch(req, res) {
	
	res.status(StatusCodes.NOT_FOUND).json({ msg: 'Page not found' });

}

export function onError(err, req, res) {

	if (err instanceof CustomAPIError) {

		return res.status(err.statusCode).json({ msg: err.message });

	}
	console.error(err);
  
	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong' });

}

