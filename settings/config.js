module.exports.config = {
    settings: {
        token: 'OTM0NDAwMDE4NjUwMTM2NjI5.Yevh1A.diJ4j90_6Z59K3KivMKuDxQ4sl8',
        prefix: '.',
        mentionPrefix: true, //Whether the bot has a mention prefix
        botActivity: {
            status: 'online',
            activity: {
                name: 'Whatever you want',
                type: 'WATCHING',
            }
        },
        changingActivity: { //An activity that automatically updates
            enabled: true,
            activities: ['Trwają prace nad serwerem.'],
            types: ['PLAYING', 'WATCHING', 'LISTENING']
        },
        embedColor: 'RED',
        GuildID: '910599611117371492',
        BotOwnerDiscordID: '386138690478407680',
    },
    automod: {
        // - - - BANNED STUFF - - -
        Banned_Words: [`WORDHERE`, `WORDHERE`, `WORDHERE`, `WORDHERE`, `WORDHERE`, `WORDHERE`, `WORDHERE`],
        Banned_Links: ['discord.gg/'],
        Banned_Emojis: ['31231231312312312'],
        Banned_Attachments: ['31231312321321', '1231231231321312'],
        Banned_Words_Message: '{member}, Nie masz dostępu do wysyłania takiej wiadomości.',
        Banned_Links_Message: '{member}, Nie masz dostępu do wysyłania linków.',
        Banned_Emojis_Message: '{member}, Nie masz dostępu do używania tej emotki.',
        Banned_Attachments_Message: '{member}, Please dont post {attachment} attachments here.',

        // - - - BYPASS PERMISSIONS - - -
        Bypass_Links_Channels: ['CHANNELID'],
        Bypass_Attachments_Roles: ['ROLEID'],
        Bypass_Words_Roles: ['ROLEID'],
        Bypass_Emojis_Roles: ['ROLEID'],
        Bypass_Links_Roles: ['919886342320705586', '910604122296811540', '911318094780170250', '914170050909450291', '910975369048375316', '910909083102633994', '910909083102633994', '919885866548199434', '911727499531145277', '918931209642475630', '914892378924515358', '910920924876902500'],
        Bypass_Spam_Channels: ['CHANNELID'],
        Allowed_Domains: ['google', 'tenor'],
        Bypass_Spam_Roles: ['ROLEID'],

        // - - - SPAM PREVENTION - - - 
        Enable_Spam: true,
        Spam_Message: '{username}, you have been muted for spamming!',

        // - - - CAPS SPAM - - -
        Caps_Limit: '50%', //percentage of caps that users can type (leave blank to disable)
        Caps_Minimum_Characters: '20', //how many characters in a message are needed to check for caps limit
        Max_Caps_Message: '{member}, your message contained too many caps!',
        Bypass_Caps_Roles: [`ROLEID`], //has to be a role ik im dumb

        // - - - MENTION SPAM - - -
        Max_Role_Pings: 0, //max amount of times a user can ping a role in a single message
        Max_User_Pings: 0, //set to 0 to disable
        Max_Channel_Pings: 5, //any pings greater than this number will delete the message
        Max_Total_Pings: 10, //max amount of any ping in a message allowed
        Bypass_Pings: []
    },
    moderation: {
        Moderators: ['919886342320705586'], //roles that can use any moderation command
        serverLock: true, //whether or not to enable the server lock command
        Mute_Role: 'ROLEID'
    },
    automation: {
        Roles_On_Join: ['ROLEID'],
        Member_Count_Channel: 'CHANNELID',
        Member_Count_Message: 'Members: {count}',
        Channel_Count_Channel: 'CHANNELID',
        Channel_Count_Message: 'Channels: {count}',
        VC_Roles: [
            { roleID: 'ROLEID', channelID: 'ROLEID' },
            { roleID: '', channelID: '' },
            { roleID: '', channelID: '' }
        ],
        Invite_Link: 'https://discord.gg/VstQPFP',
        Booster_Channel: '911354228306477107',
        Booster_Title: '{member} just boosted the server!',
        Booster_Message: 'Thank you {member} for boosting the server! We now have {boosters} booster(s)!',
        Booster_Thumbnail: '{member}' //Select either a image url, or {member} for the booster avatar
    },
    counting: {
        Counting_Channel: 'CHANNELID', //leave blank for none
        Wrong_Number_Message: 'Wrong number {username}, The current number is {number}!',
        One_At_A_Time: false,
        One_At_A_Time_Message: 'Sorry {username}, but you can only say a number one at a time!',
        Restart_On_Incorrect_Number: false,
        Restart_Message: 'The countdown has been reset back to 1!',
        React_On_Message: true,
        Reaction: '✅'
    },
    verification: {
        enabled: true,
        verificationType: 'captcha', //select from these 2 options -> command or captcha!
        verifyChannel: '911362516746121307', //leave blank for use in any channel
        verifyRole: '910907971297509386',
        roleToRemove: 'ROLEID',
        Max_Attempts: 3, //how many times theyre allowed to verify for captcha
        kick_On_Max_Attempts: false, //Kick them if they entered to many wrong attempts
    },
    user_dms: {
        enabled: false,
        DMCategory: 'CATEGORYID',
        Dm_Channel_Name: 'new-dm-{username}',
        View_DmChannel_roles: ['ROLEID', 'ROLEID']
    },
    leveling: {
        enabled: true,
        remove_XP_on_Leave: false,
        level_Up_Message: '{user} has just reached level {level}!',
        level_Up_Title: 'Level Up!',
        level_Up_Channel: '', //channel id, or write current for the current channel their in, leave blank for none
        level_Up_Roles: [ //roles to award when members reach a certain level
            { level: 1, role: '' },
            { level: 10, role: '' },
            { level: 15, role: '' },
            { level: 30, role: '' }
        ],
        rankCardImage: 'https://cdn.trendhunterstatic.com/thumbs/cool-backgrounds.jpeg',
        rankCardColor: 'cyan'
    },
    music: {
        Enable_DJ: true, //set to false to allow everyone to use all music commands
        DJrole: 'ROLEID', //By default djs can use all music commands
        user_DJs: [], //Users that can use dj commands (USER IDS ONLY)
        Disabled_DJ_Commands: ['volume'], //Commands DJS cant use
        Allowed_User_Commands: ['play', 'queue', 'nowplaying', 'join', 'leave'] //Commands anyone is allowed use
    },
    tempvc: {
        enabled: true,
        Temp_VC_Category: 'CATEGORYID', //where temp VCs are added to
        Create_VCS_Under: '', //THe channel to create temp vcs under
        Allow_All_Roles: false, //if all roles can create temp vcs
        Allowed_Roles: ['ROLEID'], //roles that can create temp vc's
        Delete_VCS_After: '5s' //how long until empty temp vcs get automatically deleted. Leave blank to disable
    },
    logging: {
        Report_Channel: '919888322283839528',
        Ban_Channel_Logs: '919888322283839528',
        Unban_Channel_Logs: '919888322283839528',
        Kick_Channel_Logs: '919888322283839528',
        Warn_Channel_Logs: '919888322283839528',
        Mute_Channel_Logs: '919888322283839528',
        Lock_Channel_Logs: '919888322283839528',
        Ticket_Channel_Logs: '919888322283839528',
        Moderation_Channel_Logs: '919888322283839528',
        Suggestion_Channel_Logs: '919888322283839528',
        Report_Channel_Logs: '919888322283839528',
        Server_Updates: '919888322283839528',
        Voice_Updates: '919888322283839528',
        Role_Updates: '919888322283839528',
        Channel_Updates: '919888322283839528',
        Message_Updates: '919888322283839528',
    },
    starBoard: {
        Enabled: true,
        StarBoard_Channel: 'CHANNELID',
        Minimum_Reactions: '1', //how many star reactions required to send to star board channel
        StarBoard_Emoji: '⭐'
    },
    FiveM: {
        Time_Sheets_Channel: 'CHANNELID',
    },
    business: {
        Review_Products: [{
                name: 'ProductName',
                channel: 'CHANNELID'
            },
            {
                name: 'ProductName',
                channel: 'CHANNELID'
            },
            {
                name: 'ProductName',
                channel: 'CHANNELID'
            },
        ]
    },
    purchaseSystem: {