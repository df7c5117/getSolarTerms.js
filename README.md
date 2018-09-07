# getSolarTerms.js

小而不美的节气计算工具 

 ©2018 df7c5117 @ OUC

 [Try Demo](https://df7c5117.github.io/getSolarTerms.js)

### 为什么不美

简单粗暴的 24 个 else if 解决计算操作，以及 10 个 if 对部分不按基本法的日期进行校正，毫无代码美学。

### 注意事项

* 系统计算系数仅限 21 世纪可用

### 参数说明

* @param  `Term`  Type = `String`  节气名，格式为首字母大写的节气拼音

* @param  `Year`  Type = `Number`  年份（可选），默认为当前

* return  Type = `String`  返回值，格式为英文月份 + 日期


### 使用方法

`getSolarTerms(Term,Year)`

#### eg 1 查询本年度的小满

`getSolarTerms("Xiaoman")`

将返回

`"May 21"`


#### eg 2 查询 2020 年的夏至

`getSolarTerms("Xiazhi",2020)`

将返回

`"Jun 22"`