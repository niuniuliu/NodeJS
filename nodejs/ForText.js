var webdriver = require('/usr/local/node-v0.10.33-darwin-x64/lib/node_modules/selenium-webdriver')
driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// driver.get('http://learnrubythehardway.org/book/index.html')

// driver.sendKeys(webdriver.Key.chord(webdriver.Key.COMMAND, "s"))
// return that.driver.findElement(that.webdriver.By.className('user'));
// driver.findElements(webdriver.By.xpath(".//*[@id='table-of-contents']/ul/li//a"))
// 	.then(function(y) {
// 		y[1].click()
// 		driver.findElement(webdriver.By.xpath("/html"))
// 			.then(function(x) {
// 				x.getAttribute('outerHTML')
// 					.then(function(str) {
// 						console.log(str);
// 					})
// 			})


// 		// self.GetEmailTextBox().sendKeys(self.webdriver.Key.CONTROL + 'a');
// 		// self.GetEmailTextBox().sendKeys(self.webdriver.Key.DELETE);

// 		//         System.out.println(webElement.getAttribute("outerHTML"));

// 	})


// var func1 = function(req, res, callback) {
// 	setTimeout(function() {
// 		console.log('in func1');
// 		callback(req, res, 1);
// 	}, 13000);
// }

// var func2 = function(req, res, callback) {
// 	setTimeout(function() {
// 		console.log('in func2');
// 		callback(req, res, 2);
// 	}, 5000);
// }

// var func3 = function(req, res, callback) {
// 	setTimeout(function() {
// 		console.log('in func3');
// 		callback(req, res, 3);
// 	}, 1000);
// }


// function executeFunc(funcs, count, sum, req, res) {
// 	if (count == sum) {
// 		return;
// 	} else 
// 	{
// 		funcs[count](req, req, function() {
// 			count++;
// 			executeFunc(funcs, count, sum, req, res);
// 		});
// 	}
// }

// //同步调用
// var req = null;
// var res = null;
// var funcs = [func1, func2, func3];
// var len = funcs.length;
// executeFunc(funcs, 0, len, req, res);
// //先将多个函数组成一个数组。 再可以利用递归函数的特性， 使程序按照一定的顺序执行。

// //解决办法一： callback 
// //深层嵌套

// // var req = null;
// // var res = null;
// // func1(req, res, function() {
// // 	func2(req, res, function() {
// // 		func3(req, res, function() {
// // 			process.exit(0);
// // 		})
// // 	});
// // });
// // 这种方法虽然能快速的解决， 但暴露的问题也很明显， 一是代码维护不方面， 二是代码的深层嵌套看起来很不舒服。 这种方法并不可取。


// // 可以看出在
// // func1， func2和 func3中都是用了 setTimeout函数， 执行的时间分别为 13秒， 5秒和 1秒。 由于 nodejs异步的特性， 如果使用普通的函数调用方法：

// // var req = null;
// // var res = null;
// // var callback = function() {};
// // func1(req, res, callback);
// // func2(req, res, callback);
// // func3(req, res, callback);
// // 输出内容： in func3in func2in func1

// // 原因是因为 nodejs是异步的， func2不会等 func1执行完毕后再执行， 而是立即执行（ func3也是如此）。 由于 func3的运行时间最短而率先结束， func2次之， func1最后。 但这明显不是我们想要的结果。 怎么办？



// 解决方法三： 调用类库随着
// nodejs的发展， 响应的类库也越来越多。 Step和 async就是其中不错的。

// 1.Step的调用相对比较清爽：

// Step(function thefunc1() {
// 	func1(this);
// }, function thefunc2(finishFlag) {
// 	console.log(finishFlag);
// 	func2(this);
// }, function thefunc3(finishFlag) {
// 	console.log(finishFlag);
// });

// 2.async的 series方法， 就本例而言， 它的调用方法：

// var req = null;
// var res = null;
// var callback = function() {};
// async.series([

// 	function(callback) {
// 		func1(req, res, callback);
// 	},
// 	function(callback) {
// 		func2(req, res, callback);
// 	},
// 	function(callback) {
// 		func3(req, res, callback);
// 	}
// ]);



// /*var webdriver = require('selenium-webdriver');

// var driver = new webdriver.Builder().
//    withCapabilities(webdriver.Capabilities.chrome()).
//    build();

// driver.get('http://www.baidu.com');
// driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
// driver.findElement(webdriver.By.name('btnG')).click();
// driver.wait(function() {
//  return driver.getTitle().then(function(title) {
//    return title === 'webdriver_百度搜索';
//  });
// }, 1000);

// driver.quit();
// */
// /*
// var webdriver = require('selenium-webdriver');

// var driver = new webdriver.Builder().
//    withCapabilities(webdriver.Capabilities.chrome()).
//    build();

// driver.get('http://www.baidu.com');
// driver.sleep(2000);
// driver.findElement(webdriver.By.id('kw1')).sendKeys('webdriver');
// driver.sleep(1000);
// driver.findElement(webdriver.By.id('su1')).click();
// driver.wait(function() {
//  return driver.getTitle().then(function(title) {
//    return title === 'webdriver_百度搜索';
//  });
// }, 1000);*/

// //driver.quit();