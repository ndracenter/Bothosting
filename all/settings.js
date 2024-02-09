const fs = require('fs')
const chalk = require('chalk')

global.owner = "6285708391463"
global.ownernumber = "6285708391463"
global.ownernomer = "6285708391463"
global.botname = "NdraCloudBot"
global.namabot = "NdraCloudBot"
global.ownername = "NdraCloudHost"
global.namaCreator = "NdraCloudHost"
global.autoJoin = false
global.antilink = false
global.versisc = '1.0'
global.namasc = 'Bot Whm'
global.wagc = "https://chat.whatsapp.com/It4wawspJqD4J8W25LGUhx"
global.codeInvite = "GKEiQYTXHdp58uSJLFaCoj"
global.merchant = 'M220510ACSX4641HS'
global.apitokendo = '-'
global.apilinode = '-'
global.secret = '-'
global.domain = '' // Isi Domain Lu
global.apikeyy = '' // Isi Apikeyy Plta Lu
global.capikeyy = '' // Isi Apikeyy Pltc Lu
global.signature = '-'
global.hostwhm = 'bigshadowhost.ndrahosting.com' //Host server whm contoh : login.ditzzsenpai.wtf
global.usrwhm = 'root' //username whm
global.passwhm = '##08SafiraDwiYuwanitaIndri' //Password whm
global.tokenwhm = 'I6M0NG90A700V7FTKZVL4NLK1822Z0Z9' // caranya => https://www.eukhost.com/kb/how-to-generate-an-api-token-using-whm/
global.ipsrv = '165.232.173.3' //ip server whm
//MAU PEDIA
global.api_key = "-"//@zallDev
global.api_id = "-"//@zallDev
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By NdraCloudHost"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})