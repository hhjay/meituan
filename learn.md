### learn some
> * cp -R banma* ../project/

> * https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF
> * git checkout -b huanghuijie #新建分支
> * git add . add所有改动的代码 ||  git add test1.html test2.html add具体的文件
> * git commit -m"some ..."
> * git push origin huanghuijie ＃提交到huanghuijie分支
> * git branch -a 查看分支信息
> * git checkout huanghuijie #切换到已经存在的分支
> * git status (主要是文件名那些)查看本地分支与远端分支代码的区别 
> * git diff (主要是文件)具体的代码区别
> * (develop) $ git merge webreport1.1 (主要是合并代码)

> * @media screen and (max-width)

> * 命名规则：class用中线，id用驼峰 ＝》 class="date-input" id="dateInput"
### require
> * http://blog.fens.me/nodejs-requirejs/
> * RequireJS的模块化加载需要web server的支持，通过本地文件的方式是不行的

### DB Learn
> * select 10,10也会扫描全表
> * 文件的io和查不是一个方面？
> * 7万条数据排序找用12s，不排序用0.2s
> * 磁盘和固态硬盘
> * order by区分度 快速查询的效果
> * 索引类型(varchar....int....boolen)匹配
> * 不加索引扫全表

### framemaker
``` javascript

<script> var orgList = new Array();</script>
<#list orgViewList as orgView>
	<script> 
		orgList.push( ${orgView.baseData.id} );
	</script>
</#list>

```
### FE插件
> * 左右滑动选择具体数值 http://egorkhmelev.github.io/jslider/   (横着的啊)
> * 上下滑动选择具体数值 https://jqueryui.com/resources/demos/slider/range-vertical.html  (总是有人喜欢竖的)
> * 感觉还不错的js学习网站 http://caibaojian.com/javascript-stoppropagation-preventdefault.html
> * 好用的日期组件 http://www.daterangepicker.com/

### 判断是否在点击的范围之内
> * method 1  http://segmentfault.com/q/1010000000452465
``` javascript
<script>
	$(document).on('mouseup', function(event) {
		var e = event ?  event : window.event;
		var node = e.target ? e.target : e.srcElement;
		if ( root.find('.RP-date-input').length!==0 ) {//本来就已经显示过的才可以
			var _con = $(".RP-date-input");
			if ( !_con.is(node) && _con.has(node).length === 0 ) {
				test.hide(e);
			}
		}
			
	});
</script>
```
> * method 2
``` javascript
<div id="codediv" onmouseover ="isOut=false" onmouseoout ="isOut=true"/>
<script>
	document.onmousedown = function(){
	   	var codediv=document.getElementById("codediv");
	   	if(codediv.style.display!="none" && isOut){
	      	codediv.style.display!="none";
	   	}
	}	
</script>
```

### js Learn
> * 很赞的js学习网站：http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html
> * js: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions#Functions_as_event_handlers
> * webapp工具：http://clouda.baidu.com/sample
> * ajax不能return 的解决方法 http://stackoverflow.com/questions/5316697/jquery-return-data-after-ajax-call-success
> * 好吧，我现在才知道(1)->function fnA(){ TODO };和(2)->var fnA = function(){ TODO }的区别，(1)主要是在整个文件中注册了一个全局变量可以在上下文调用，但(2)只能在下文用到
> * 数的格式化 http://bbs.csdn.net/topics/360197979 http://stackoverflow.com/questions/1068284/format-numbers-in-javascript
> * hightcharts的tooltip的提示框的位置 http://stackoverflow.com/questions/11966286/highcharts-tooltip-always-on-right-side-of-cursor
	http://ahumbleopinion.com/customizing-highcharts-tooltip-positioning/
> * aMap Api 解决刚开始加载不能出现图标的问题.amap-layers img { max-width: none; }
> * aMap Api 解决中心点的问题，其实就是我自己没有好好看api amap.setFitView()  移除路线poyeline.setMap(null);

### less/sass

### p2p借书 
> * ->共享你的图书：扫描你的条形码，分享 ->在看条形码api
	https://www.juhe.cn/docs/api/id/52  huanghuijie 密码名
	http://union.csdl.ac.cn/Reader/union_result.jsp?kind=simple&title=2&match=qx&word=9787115299222&and_or=and&ziliao=&c1=%BC%EC+%CB%F7
	http://developers.douban.com/wiki/?title=book_v2#get_book   要哭惨了 豆瓣有api。。。我竟然找了一下午
> * ->摄像头获取你的条形码
	http://www.dcloud.io/docs/api/zh_cn/barcode.shtml
	http://blog.csdn.net/theforever/article/details/8251671
	http://www.tuicool.com/articles/auQJzq
	http://m.oschina.net/blog/299168
> * ->手机调用电话号码

### 查看你担心公司的备案状态 http://webservice.36wu.com/ICPServic.asmx
### 很多api  http://www.cnblogs.com/clarence/p/3151617.html




