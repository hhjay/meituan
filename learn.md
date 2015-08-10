### learn some
> * cp -R banma* ../project/
> * this.style.display = "none";alert(this);

> * https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF
> * git checkout -b huanghuijie #新建分支
> * git add .
> * git commit -m"some ..."
> * git push origin huanghuijie ＃提交到huanghuijie分支
> * git branch -a 查看分支信息
> * git checkout huanghuijie #切换到已经存在的分支

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
