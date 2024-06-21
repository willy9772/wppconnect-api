import tokenIsCached from "../../etc/tokenIsCached";
import Requests from "../../Requests";

type config = {
    session: string,
    token: string,
}

export default async function (config: config) {
    try {

        return await Requests({
            method: 'GET',
            url: `/${config.session}/check-connection-session`,
            headers: {
                Authorization: 'Bearer ' + tokenIsCached(config.session) || config.token,
            },
        }).catch((error) => {
            console.error(error);
            throw new Error('Error while checking session status');
        }) as Promise<{
            status: boolean
            message: string
        }>;

    } catch (error) {
        console.error(error);
    }
}