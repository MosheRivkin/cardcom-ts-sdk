import createClient, { type Client } from "openapi-fetch";
import type { paths } from "./schema";

interface CardcomConfig {
	apiName: string;
	apiPassword?: string;
	terminalNumber: string | number;
}
export function createCardcomClient(config: CardcomConfig): Client<paths, `${string}/${string}`> {
	const client = createClient<paths>({
		baseUrl: "https://secure.cardcom.solutions/api/v11",
		bodySerializer(body: any) {
			if (body === undefined || body === null) {
				return undefined;
			}
			return JSON.stringify({
				ApiName: config.apiName,
				TerminalNumber: Number(config.terminalNumber),
				ApiPassword: config.apiPassword,
				...body,
			})
		},
	});
	return client;
}