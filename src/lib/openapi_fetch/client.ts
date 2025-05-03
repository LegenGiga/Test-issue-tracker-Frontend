import createClient, { Middleware } from 'openapi-fetch';
import { paths } from '@/lib/openapi/schema';
import config from '@/config';

export const issueTrackerClient = createClient<paths>({ baseUrl: config.API_URL });

let currentApiKey: string | undefined;
const apiKeyMidddleware: Middleware = {
    async onRequest({ request }) {
        if (currentApiKey) request.headers.set('Authorization', currentApiKey);

        return request;
    },
    async onResponse({ response }) {
        return response;
    },
    async onError() {
        return new Error('Oops, fetch failed');
    },
};

issueTrackerClient.use(apiKeyMidddleware);

export const setClientApiKey = function (rawApiKey: string) {
    currentApiKey = config.apiKeyStart.concat(rawApiKey);
    return currentApiKey;
};

export default { issueTrackerClient, setClientApiKey };
