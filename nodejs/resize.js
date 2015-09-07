// var webdriver = require('/usr/local/node-v0.10.33-darwin-x64/lib/node_modules/selenium-webdriver');

// driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// // var http = require("http");
var im = require("imagemagick");

// // var server = http.createServer(function(req, res) {
var strControl='', strWorking='', strProductName


function ComparePicture() { 
    var exec = require('child_process').exec,
        child;
    var str1 = strWorking.split('\\');
    var workingFileName = str1[str1.length-1].replace(/.png/g,'') ;

    var str2 = strControl.split('\\');
    var controlFileName = str2[str2.length - 1].replace(/.png/g, '');

    var strCmdLine = 'perceptualdiff.exe ' + process.cwd() + '\\' + strControl + ' ' + process.cwd() + '\\' + strWorking + ' -verbose -threshold 10'
        + ' -output ' + process.cwd() + '\\' + strProductName + '\\ScreenShot\\' + controlFileName + '_' + workingFileName + '.png'

    console.log(strCmdLine);
    child = exec(strCmdLine,
        function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
            if (stderr !== null) {
                console.log('exec stderr: ' + stderr);
            }

            if (stdout !== null) {
                console.log('exec stdout: ' + stdout);
                if (stdout.indexOf('PASS: Images are binary identical') >= 0) {
                    console.log('Test passed!');
                } else {
                    console.log('Test failed!');
                }
            }
        }
    );
};

ComparePicture()

// var options = {
// 	width: 120,
// 	height: 80,
// 	srcPath: "/Users/TimLiu/Desktop/Screen Shot 2014-12-11 at 11.00.08 PM.png",
// 	dstPath: "/Users/TimLiu/Desktop/Screenpng"
// };

// im.resize(options, function(err) {
// 	if (err) {
// 		throw err;
// 	}
// 	res.end("Image resize complete");
// });

// // }).listen(8080);


//  function takeScreenshot (strName) {

//     driver.takeScreenshot().then(function(data){
//         var base64Data = data.replace(/^data:image\/png;base64,/,"");
// //        fs.writeFile( 'D:\\metropolis\\screenshot\\' + strScreenshotName + '.png', base64Data, 'base64', function(err) {
//         fs.writeFile(strName + '.png', base64Data, 'base64', function(err) {
//             if(err) console.log(err);
//         });
//     });
// }