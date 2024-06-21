import { tokens } from "../../../index";
import generate_token from "./generate_token";

type params = {
    sessions: string[],
}

export default async function ({ sessions }: params) {

    for (const session of sessions) {

        const token = await generate_token({ session }).then((response) => response?.token);

        if (token) {
            tokens[session] = token;
        }

    }

    return tokens;

}