var url="http://localhost:8000/a/b?hah=shaba";
var query="name=zhenglei&age=10";
url=url+(/\?/.test(url)?'&':'?')+query;
console.log(url);