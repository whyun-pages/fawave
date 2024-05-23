import { KVNamespace, PagesFunction } from "@cloudflare/workers-types/2023-07-01";
import { urlParams } from "../utils";
interface Env {
	KV: KVNamespace;
}
export const onRequest: PagesFunction<Env> = async (context) => {
	const params = urlParams(context.request.url);
 	return new Response(params.code);
}