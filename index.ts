import dotenv from 'dotenv'
dotenv.config()
import WPConnect from "./src/Wrapper";

type constructorParams = {
    secretKey: string,
    host?: string,
}

export let secretKey: string = process.env.SECRET_KEY || '';
export let host: string = process.env.host || 'http://localhost:21465/api'

export function configure(params: constructorParams) {
    secretKey = params.secretKey;
    if (params.host) { host = params.host; }
}

export default WPConnect;