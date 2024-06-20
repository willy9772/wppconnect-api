import Requests from "../../Requests";

type config = {
    session: string,
    body?: {
        webhook?: string,
        waitQrCode?: boolean,
    },
    token: string,
}

export default async function (config: config) {
    try {

        return await Requests({
            url: `/${config.session}/start-session`,
            data: config.body || {},
            headers: {
                Authorization: 'Bearer ' + config.token,
            },
            method: 'POST',
        }).catch((error) => {
            console.error(error);
            throw new Error('Error while starting session');
        }) as Promise<{
            status: 'ACTIVE' | 'SUCESS' | 'ERROR' | 'EXPIRED' | 'NOTFOUND' | 'INVALIDTOKEN' | 'INVALIDSESSION'
            session: string,
            qrcode: string | null,
        }>;

    } catch (error) {
        console.error(error);
    }
}