
import { createRouter } from 'next-connect';
import { onError, onNoMatch } from '../../../../server/middleware/errorHandler';
import { connect, addName } from '../../../../server/controllers/test';

const router = createRouter();


router
	.get(connect)
	.post(addName);


export default router.handler({
	onError,
	onNoMatch
});
