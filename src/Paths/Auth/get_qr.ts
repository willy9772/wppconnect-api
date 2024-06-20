import Requests from "../../Requests";

type config = {
    session: string,
    token: string,
}

export default async function (config: config) {
    try {

        return await Requests({
            method: 'GET',
            url: `/${config.session}/qrcode-session`,
            headers: {
                Authorization: 'Bearer ' + config.token,
            },
        }).catch((error) => {
            console.error(error);
            throw new Error('Error while get qr');
        }) as Promise<{
            status: boolean
            message: string
        }>;

    } catch (error) {
        console.error(error);
    }
}