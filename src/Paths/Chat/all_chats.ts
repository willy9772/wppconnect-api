import tokenIsCached from "../../etc/tokenIsCached";
import Requests from "../../Requests";
import { Chat } from "./Types/ChatTypes";

type config = {
    session: string,
    token: string,
}

export default async function (config: config) {
    try {

        return await Requests({
            method: 'GET',
            url: `/${config.session}/all-chats`,
            headers: {
                uthorization: 'Bearer ' + tokenIsCached(config.session) || config.token,
            },
        }).catch((error) => {
            console.error(error);
            throw new Error('Error while getting all chats');
        }) as Promise<{
            status: boolean
            response: Array<Chat>
        }>;

    } catch (error) {
        console.error(error);
    }
}