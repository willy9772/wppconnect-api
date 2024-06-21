import { configure } from "../index";
import check_connection from "./Paths/Auth/check_connection";
import close_session from "./Paths/Auth/close_session";
import generate_token from "./Paths/Auth/generate_token";
import get_qr from "./Paths/Auth/get_qr";
import logout_session from "./Paths/Auth/logout_session";
import start_session from "./Paths/Auth/start_session";
import status_session from "./Paths/Auth/status_session";
import all_chats from "./Paths/Chat/all_chats";
import all_messages_in_chat from "./Paths/Chat/all_messages_in_chat";
import all_messages_unread from "./Paths/Chat/all_messages_unread";
import new_messages_in_chat from "./Paths/Chat/new_messages_in_chat";
import get_profile from "./Paths/Contact/get_profile";
import text from "./Paths/Send Message/text";

export default {
    auth: {
        check_connection,
        close_session,
        generate_token,
        get_qr,
        logout_session,
        start_session,
        status_session
    },
    chat: {
        all_chats,
        all_messages_in_chat,
        all_messages_unread,
        new_messages_in_chat
    },
    contact: {
        get_profile
    },
    send_message: {
        text
    },
    configure
}