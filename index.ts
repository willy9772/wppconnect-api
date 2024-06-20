import close_session from "./src/Paths/Auth/close_session";
import GenerateToken from "./src/Paths/Auth/generate_token";
import QrSessionStream from "./src/Paths/Auth/get_qr";
import StartSession from "./src/Paths/Auth/start_session";
import StatusSession from "./src/Paths/Auth/status_session";
import All from "./src/Paths/Chat/all_chats";

type constructorParams = {
    secretKey: string,
    host?: string,
}

export let secretKey: string = process.env.WPPSECRETKEY || '';
export let host: string = process.env.host || 'http://localhost:21465/api'

export default function constructor(params: constructorParams) {
    secretKey = params.secretKey;
    if (params.host) { host = params.host; }
}

(async () => {

    const session = 'william'

    const token = await GenerateToken({ session }).then((response) => response?.token);

    if (!token) { throw new Error('Token not found'); }




})()
