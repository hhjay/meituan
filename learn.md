### learn some
> * cp -R banma* ../project/
> * this.style.display = "none";alert(this);

> * https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF
> * git checkout -b huanghuijie #新建分支
> * git add . add所有改动的代码 ||  git add test1.html test2.html add具体的文件
> * git commit -m"some ..."
> * git push origin huanghuijie ＃提交到huanghuijie分支
> * git branch -a 查看分支信息
> * git checkout huanghuijie #切换到已经存在的分支
> * git status (主要是文件名那些)查看本地分支与远端分支代码的区别 
> * git diff (主要是文件)具体的代码区别

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
> * 百度的webapp学习：http://clouda.baidu.com/sample


