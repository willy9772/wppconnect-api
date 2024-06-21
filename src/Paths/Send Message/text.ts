import tokenIsCached from "../../etc/tokenIsCached";
import Requests from "../../Requests";
import { Message } from "../Chat/Types/MessageTypes";

type config = {
    session: string,
    token: string,
    phone: string,
    message: string,
    isGroup?: boolean,
}

export default function (config: config) {
    return Requests({
        method: 'POST',
        url: `/${config.session}/send-message`,
        headers: {
                            Authorization: 'Bearer ' + tokenIsCached(config.session) || config.token,
        },
        data: {
            phone: config.phone,
            message: config.message,
            isGroup: !!config.isGroup
        }
    }).catch((error) => {
        console.error(error);
        throw new Error('Error while sending message');
    }) as Promise<{
        status: boolean
        response: Array<Message>
    }>;
}