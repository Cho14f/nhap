



var btnSubmitAnswer=document.getElementById("btnSubmitAnswer")
var name1=document.getElementById("name1")
var mssv=document.getElementById("mssv")
var lop=document.getElementById("lop")


name1.textContent=localStorage.getItem("name")
mssv.textContent=localStorage.getItem("mssv")
lop.textContent=localStorage.getItem("lop")

btnSubmitAnswer.onclick=function(){
    showPage()
    setTimeout(hidePage,1000)
}
//lenh delay setTimeout, SetInterval
function showPage() {
    document.getElementById("main").style.display = "none";//show div none ra
}
function hidePage() {
    document.getElementById("main").style.display = "none";
    document.getElementById("displayRes").style.display = "flex"; // show div thong bao
    
}