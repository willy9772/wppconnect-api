import { Message } from "./MessageTypes";

type ChatId = {
    server: string;
    user: string;
    _serialized: string;
};

type LastReceivedKey = {
    fromMe: boolean;
    remote: ChatId;
    id: string;
    _serialized: string;
};

type ProfilePicThumbObj = {
    eurl: string;
    id: ChatId;
    img: string;
    imgFull: string;
    tag: string;
};

type Sender = {
    id: ChatId;
    pushname: string;
    type: string;
    verifiedName: string;
    isBusiness: boolean;
    isEnterprise: boolean;
    verifiedLevel: number;
    privacyMode: any;
    isContactSyncCompleted: number;
    textStatusLastUpdateTime: number;
    syncToAddressbook: boolean;
    formattedName: string;
    isMe: boolean;
    isMyContact: boolean;
    isPSA: boolean;
    isUser: boolean;
    isWAContact: boolean;
    profilePicThumbObj: ProfilePicThumbObj;
    msgs: any;
};

type Contact = Sender;

type Presence = {
    id: ChatId;
    chatstates: any[];
};

export type ChatAndMessage = {
    id: ChatId;
    lastReceivedKey: LastReceivedKey;
    t: number;
    unreadCount: number;
    unreadDividerOffset: number;
    archive: boolean;
    isReadOnly: boolean;
    muteExpiration: number;
    isAutoMuted: boolean;
    notSpam: boolean;
    ephemeralDuration: number;
    ephemeralSettingTimestamp: number;
    disappearingModeInitiator: string;
    disappearingModeTrigger: string;
    unreadMentionCount: number;
    hasUnreadMention: boolean;
    archiveAtMentionViewedInDrawer: boolean;
    hasChatBeenOpened: boolean;
    tcToken: Record<string, unknown>;
    tcTokenTimestamp: number;
    tcTokenSenderTimestamp: number;
    endOfHistoryTransferType: number;
    pendingInitialLoading: boolean;
    celebrationAnimationLastPlayed: number;
    hasRequestedWelcomeMsg: boolean;
    msgs: any;
    kind: string;
    isBroadcast: boolean;
    isGroup: boolean;
    isUser: boolean;
    contact: Contact;
    groupMetadata: any;
    presence: Presence;
    messages: Message[];
};