import Requests from "../../Requests";
import { Chat } from "../Chat/Types/ChatTypes";

type config = {
    session: string,
    token: string,
    phone: string,
}

export default function (config: config) {
    return Requests({
        method: 'GET',
        url: `/${config.session}/contact/${config.phone}`,
        headers: {
            Authorization: 'Bearer ' + config.token,
        }
    }).catch((error) => {
        console.error(error);
        throw new Error('Error while getting contact');
    }) as Promise<{
        status: boolean
        response: Array<Chat> | Array<never>
    }>;
}