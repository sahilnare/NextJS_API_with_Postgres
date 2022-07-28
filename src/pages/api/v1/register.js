
import { createRouter } from 'next-connect';
import { onError, onNoMatch } from '../../../../server/middleware/errorHandler';
import register from '../../../../server/controllers/auth';

const router = createRouter();


router
	.post(register);


export default router.handler({
	onError,
	onNoMatch
});
