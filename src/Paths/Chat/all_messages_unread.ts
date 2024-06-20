import Requests from "../../Requests";
import { Message } from "./Types/MessageTypes";

type config = {
    session: string,
    token: string,
}

export default async function (config: config) {
    try {

        return await Requests({
            method: 'GET',
            url: `/${config.session}/all-unread-messages`,
            headers: {
                Authorization: 'Bearer ' + config.token,
            },
        }).catch((error) => {
            console.error(error);
            throw new Error('Error while getting all unread messages');
        }) as Promise<{
            status: boolean
            response: Array<Message>
        }>;

    } catch (error) {
        console.error(error);
    }
}