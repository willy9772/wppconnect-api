import tokenIsCached from "../../etc/tokenIsCached";
import Requests from "../../Requests";
import { Message } from "./Types/MessageTypes";

type config = {
    session: string,
    token: string,
    phone: string,
    isGroup?: boolean,
    includeMe?: boolean,
    includeNotifications?: boolean,
}

export default async function (config: config) {
    try {

        return await Requests({
            method: 'GET',
            url: `/${config.session}/all-messages-in-chat/${config.phone}?isGroup=${!!config.isGroup}&includeMe=${!!config.includeMe}&includeNotifications=${!!config.includeNotifications}`,
            headers: {
                Authorization: 'Bearer ' + tokenIsCached(config.session) || config.token,
            },
        }).catch((error) => {
            console.error(error);
            throw new Error('Error while getting all messages in chat');
        }) as Promise<{
            status: boolean
            response: Array<Message>
        }>;

    } catch (error) {
        console.error(error);
    }
}