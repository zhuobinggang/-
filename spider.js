const axios = require('axios').default;
const fs = require('fs');


// axios.get('https://www.lightnovel.cn/forum.php?mod=viewthread&tid=937695&page=1&authorid=950920').then((res) => {
// 
//   // Or
//   fs.writeFileSync('dd.txt', res.data);
//   console.log('over')
// })
//
// axios.get('https://www.lightnovel.cn/forum.php?mod=viewthread&tid=937695&extra=&authorid=950920&page=2').then((res) => {
// 
//   // Or
//   fs.writeFileSync('dd2.txt', res.data);
//   console.log('over')
// })

// axios.get('https://www.lightnovel.cn/forum.php?mod=viewthread&tid=937695&extra=&authorid=950920&page=3').then((res) => {
// 
//   // Or
//   fs.writeFileSync('dd3.txt', res.data);
//   console.log('over')
// })
//

let filename = "dd.txt"
let content = fs.readFileSync(process.cwd() + "/" + filename).toString()
const cheerio = require('cheerio');
const $ = cheerio.load(content);
console.log($('#postmessage_17975561').text())

