import { secretKey } from "../../..";
import Requests from "../../Requests";

type params = {
    session: string,
}

export default async function (params: params) {
    try {

        return await Requests({
            url: `/${params.session}/${secretKey}/generate-token`,
            method: 'POST',
        }).catch((error) => {
            console.error(error);
            throw new Error('Error while generating token');
        }) as Promise<{
            token: string,
            status: 'success' | 'error',
            session: string,
            full: 'string'
        }>;

    } catch (error) {
        console.error(error);
    }
}