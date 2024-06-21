import { tokens } from "../../index";

export default function tokenIsCached(session: string): string | false {
    return tokens[session] || false;
}