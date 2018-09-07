/**
getSolarTerms.js 
by df7c5117@OUC ©2018 

!!!系统计算系数仅限21世纪可用!!!
@param 	Term 	Type=String 节气名，格式为首字母大写的节气拼音
@param  Year    Type=Number 年份（可选），默认为当前

**/

function getSolarTerms(Term,Year){
if (Year != null){
	var currentYear = Year + "";
}else{
	var date = new Date(); 
	var currentYear = date.getFullYear() + "";
}
//=====获取日期=====
var preYear = currentYear.substr(2) * 0.2422;
var LeapYear = parseInt((currentYear.substr(2) -1) / 4);

//=====节气计算=====
if (Term == "Lichun")//立春
{
	var k = 3.87;
	var month = "Feb ";	 
}else if (Term == "Yushui")//雨水
{
	var k = 18.74;
	var month = "Feb ";
}else if (Term == "Jingzhe")//惊蛰
{
	var k = 5.63;
	var month = "Mar ";
}else if (Term == "Chunfen")//春分
{
	var k = 20.646;
	var month = "Mar ";
}else if (Term == "Qingming")//清明
{
	var k = 4.81;
	var month = "Apr ";
}else if (Term == "Guyu")//谷雨
{
	var k = 20.1;
	var month = "Apr ";
}else if (Term == "Lixia")//立夏
{
	var k = 5.52;
	var month = "May ";
}else if (Term == "Xiaoman")//小满
{
	var k = 21.04;
	var month = "May ";
}else if (Term == "Mangzhong")//芒种
{
	var k = 5.678;
	var month = "Jun ";
}else if (Term == "Xiazhi")//夏至
{
	var k = 21.37;
	var month = "Jun ";
}else if (Term == "Xiaoshu")//小暑
{
	var k = 7.108;
	var month = "Jul ";
}else if (Term == "Dashu")//大暑
{
	var k = 22.83;
	var month = "Jul ";
}else if (Term == "Liqiu")//立秋
{
	var k = 7.5;
	var month = "Aug ";
}else if (Term == "Chushu")//处暑
{
	var k = 23.13;
	var month = "Aug ";
}else if (Term == "Bailu")//白露
{
	var k = 7.646;
	var month = "Sep ";
}else if (Term == "Qiufen")//秋分
{
	var k = 23.042;
	var month = "Sep ";
}else if (Term == "Hanlu")//寒露
{
	var k = 8.318;
	var month = "Oct ";
}else if (Term == "Shuangjiang")//霜降
{
	var k = 23.438;
	var month = "Oct ";
}else if (Term == "Lidong")//立冬
{
	var k = 7.438;
	var month = "Nov ";
}else if (Term == "Xiaoxue")//小雪
{
	var k = 22.36;
	var month = "Nov ";
}else if (Term == "Daxue")//大雪
{
	var k = 7.18;
	var month = "Dec ";
}else if (Term == "Dongzhi")//冬至
{
	var k = 21.94;
	var month = "Dec ";
}else if (Term == "Xiaohan")//小寒
{
	var k = 5.4055;
	var month = "Jan ";
}else if (Term == "Dahan")//大寒
{
	var k = 20.12;
	var month = "Jan ";
}

var dayTerm = parseInt(preYear + k) - LeapYear;

//校正
if (currentYear == "2026" & Term == "Yushui"){
	var dayTerm = 18;
}
if (currentYear == "2084" & Term == "Chunfen"){
	var dayTerm = 19;
}
if (currentYear == "2008" & Term == "Xiaoman"){
	var dayTerm = 21;
}
if (currentYear == "2016" & Term == "Xiaoshu"){
	var dayTerm = 7;
}
if (currentYear == "2002" & Term == "Liqiu"){
	var dayTerm = 8;
}
if (currentYear == "2012" & Term == "Hanlu"){
	var dayTerm = 8;
}
if (currentYear == "2089" & Term == "Shuangjiang"){
	var dayTerm = 23;
}
if (currentYear == "2089" & Term == "Lidong"){
	var dayTerm = 7;
}
if (currentYear == "2021" & Term == "Dongzhi"){
	var dayTerm = 21;
}
if (currentYear == "2082" & Term == "Dahan"){
	var dayTerm = 20;
}
var proDate = month + dayTerm.toString();
return proDate;
}
