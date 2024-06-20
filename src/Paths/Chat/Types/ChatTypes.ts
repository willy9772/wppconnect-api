type Id = {
    server: string;
    user: string;
    _serialized: string;
};

type Participant = {
    id: Id;
    isAdmin: boolean;
    isSuperAdmin: boolean;
};

type PastParticipant = {
    id: Id;
    leaveTs: number;
    leaveReason: string;
};

type GroupMetadata = {
    id: Id;
    creation: number;
    subject: string;
    subjectTime: number;
    descTime: number;
    restrict: boolean;
    announce: boolean;
    noFrequentlyForwarded: boolean;
    ephemeralDuration: number;
    membershipApprovalMode: boolean;
    memberAddMode: string;
    reportToAdminMode: boolean;
    size: number;
    support: boolean;
    suspended: boolean;
    terminated: boolean;
    uniqueShortNameMap: Record<string, unknown>;
    isLidAddressingMode: boolean;
    isParentGroup: boolean;
    isParentGroupClosed: boolean;
    defaultSubgroup: boolean;
    generalSubgroup: boolean;
    generalChatAutoAddDisabled: boolean;
    allowNonAdminSubGroupCreation: boolean;
    lastActivityTimestamp: number;
    lastSeenActivityTimestamp: number;
    incognito: boolean;
    hasCapi: boolean;
    participants: Participant[];
    pendingParticipants: unknown[];
    pastParticipants: PastParticipant[];
    membershipApprovalRequests: unknown[];
    subgroupSuggestions: unknown[];
};

type Chatstate = {
    id: Id;
};

type Presence = {
    id: Id;
    chatstates: Chatstate[];
};

type Contact = {
    id: Id;
    name: string;
    type: string;
    textStatusLastUpdateTime: number;
    syncToAddressbook: boolean;
    formattedName: string;
    isMe: boolean;
    isMyContact: boolean;
    isPSA: boolean;
    isUser: boolean;
    isWAContact: boolean;
    profilePicThumbObj: Record<string, unknown>;
    msgs: unknown;
};

type LastReceivedKey = {
    fromMe: boolean;
    remote: Id;
    id: string;
    participant: Id;
    _serialized: string;
};

export type Chat = {
    id: Id;
    lastReceivedKey: LastReceivedKey;
    t: number;
    unreadCount: number;
    unreadDividerOffset: number;
    archive: boolean;
    isReadOnly: boolean;
    isAnnounceGrpRestrict: boolean;
    muteExpiration: number;
    isAutoMuted: boolean;
    name: string;
    notSpam: boolean;
    ephemeralDuration: number;
    ephemeralSettingTimestamp: number;
    disappearingModeInitiator: string;
    disappearingModeTrigger: string;
    unreadMentionCount: number;
    hasUnreadMention: boolean;
    archiveAtMentionViewedInDrawer: boolean;
    hasChatBeenOpened: boolean;
    tcToken: unknown;
    tcTokenTimestamp: unknown;
    endOfHistoryTransferType: number;
    pendingInitialLoading: boolean;
    celebrationAnimationLastPlayed: number;
    hasRequestedWelcomeMsg: boolean;
    msgs: unknown;
    kind: string;
    isBroadcast: boolean;
    isGroup: boolean;
    isUser: boolean;
    contact: Contact;
    groupMetadata: GroupMetadata;
    presence: Presence;
};

