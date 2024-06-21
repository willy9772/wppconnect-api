import tokenIsCached from "../../etc/tokenIsCached";
import Requests from "../../Requests";

type config = {
    session: string,
    token?: string,
}

export default async function (config: config) {
    try {

        return await Requests({
            method: 'GET',
            url: `/${config.session}/status-session`,
            headers: {
                Authorization: 'Bearer ' + tokenIsCached(config.session) || config.token,
            },
        }).catch((error) => {
            console.error(error);
            throw new Error('Error while starting session');
        }) as Promise<{
            status: 'CONNECTED' | 'CLOSED' | 'INITIALIZING'
            qrcode: string | null,
        }>;

    } catch (error) {
        console.error(error);
    }
}