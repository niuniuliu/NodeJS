//ÏÈ°²×°markdown : npm install markdown

var markdown = require( "markdown" ).markdown;
process.stdin.resume();
process.stdin.setEncoding('utf8');  

process.stdin.on('data', function (chunk) {  
  process.stdout.write(markdown.toHTML(chunk));  
});  
