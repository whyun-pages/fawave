import { urlParams } from '../utils';
import { Slogger } from 'node-slogger';

const logger = new Slogger();
export const onRequest: PagesFunction = async (context) => {
	const params = urlParams(context.request.url);
	logger.info(params);
 	return new Response(params.code);
};