const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // --- BOT CORE SETTINGS ---
    SESSION_ID: process.env.SESSION_ID || "POPKID;;;LcsSTCoJ#ut3TRPLsctN56X21KClCzTO7GmOJSBfIamNO8WU9VZY",
    PREFIX: process.env.PREFIX || "¶",
    BOT_NAME: process.env.BOT_NAME || "POPKID-MD",
    DESCRIPTION: process.env.DESCRIPTION || "®✞Ⓞℙ $ᏕĦⓄ✞∃ℝ☠︎︎",
    MODE: process.env.MODE || "PRIVATE", // Options: public, private, inbox, group
    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    
    // --- OWNER/DEV SETTINGS ---
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254758443111",
    OWNER_NAME: process.env.OWNER_NAME || "Ꭿ𝕷𝕷𝕰𝕹",
    DEV: process.env.DEV || "254758443111", // Developer number

    // --- MESSAGING & VISIBILITY ---
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Auto read private messages
    READ_CMD: process.env.READ_CMD || "false", // Mark commands as read
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true", // Always show online status
    AUTO_TYPING: process.env.AUTO_TYPING || "true", // Auto show typing status
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false", // Auto show recording status
    
    // --- REPLIES & MEDIA ---
    AUTO_REPLY: process.env.AUTO_REPLY || "false", // Automatic text reply
    MENTION_REPLY: process.env.MENTION_REPLY || "true", // Auto voice reply on mention
    AUTO_VOICE: process.env.AUTO_VOICE || "true", // Automatic voices
    AUTO_STICKER: process.env.AUTO_STICKER || "false", // Automatic stickers
    STICKER_NAME: process.env.STICKER_NAME || "®✞Ⓞℙ $ᏕĦⓄ✞∃ℝ☠︎︎", // Sticker pack name
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ibb.co/Z6ctM06q", // Menu image
    ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/Z6ctM06q", // Alive image
    LIVE_MSG: process.env.LIVE_MSG || "® ŔƐΛĿĿY ΛĿĪ√Ɛ ΛИD ŔƐΛDY ŦᎾ F**Ҡ YᎾƱŔ SĪSŦƐŔ㋛︎☠︎︎", // Alive message

    // --- REACTION SETTINGS ---
    AUTO_REACT: process.env.AUTO_REACT || "false", // Auto react on all messages
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false", // Enable custom emoji react
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍", // Custom react emojis
    
    // --- STATUS SETTINGS ---
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false", // Auto view statuses
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // Auto react on statuses
    AUTO_STATUS_REACT_EMOJI: process.env.AUTO_STATUS_REACT_EMOJI || "❎", // Custom status reaction emoji (New)
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false", // Auto reply on status (Enabled)
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || ".𝗦𝗘𝗘𝗡 𝗬𝗢𝗨𝗥 𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗬 ®✞Ⓞℙ $ᏕĦⓄ✞∃ℝ☠︎︎🔄", // Status reply message
    
    // --- GROUP & SECURITY ---
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    DELETE_LINKS: process.env.DELETE_LINKS || "true", // Automatic delete links without kick
    ANTI_BAD: process.env.ANTI_BAD || "true",
    ANTI_VV: process.env.ANTI_VV || "true", // Anti view once
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // Anti delete path
    AUTO_BIO: process.env.AUTO_BIO || "false", // Auto update bio
};
