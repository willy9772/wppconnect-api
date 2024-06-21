import dotenv from 'dotenv'
dotenv.config()
import WPPConnect from "./src/Wrapper";

export let secretKey: string = process.env.SECRET_KEY || '';
export let host: string = process.env.host || 'http://localhost:21465/api'

export function configure(config: { secretKey: string, host?: string }) {
    secretKey = config.secretKey
    if (config.host) { host = config.host }
}

export default WPPConnect;