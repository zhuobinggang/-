const axios = require('axios').default;
const fs = require('fs');


// axios.get('https://www.lightnovel.cn/forum.php?mod=viewthread&tid=937695&page=1&authorid=950920').then((res) => {
// 
//   // Or
//   fs.writeFileSync('dd.txt', res.data);
//   console.log('over')
// })

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

const cheerio = require('cheerio');
const files = ['dd.txt', 'dd2.txt', 'dd3.txt'];
let counter = 0;
files.map(filename => {
  const content = fs.readFileSync(process.cwd() + "/" + filename).toString()
  const $ = cheerio.load(content);
  const all = $('[id^=postmessage_]')
  console.log(all.length)
  for(let i =0;i<all.length;i++){
    fs.writeFileSync('doc/'+String(counter)+'.md', $(all[i]).text());
    counter ++;
  }
})


