import tokenIsCached from "../../etc/tokenIsCached";
import Requests from "../../Requests";
import { ChatAndMessage } from "./Types/ChatAndMessageTypes";

type config = {
    session: string,
    token: string,
    phone: string,
}

export default async function (config: config) {
    try {

        return await Requests({
            method: 'GET',
            url: `/${config.session}/all-new-messages`,
            headers: {
                Authorization: 'Bearer ' + tokenIsCached(config.session) || config.token,
            },
        }).catch((error) => {
            console.error(error);
            throw new Error('Error while getting all new messages in chat');
        }) as Promise<{
            status: boolean
            response: Array<ChatAndMessage>
        }>;

    } catch (error) {
        console.error(error);
    }
}