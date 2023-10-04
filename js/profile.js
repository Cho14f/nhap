var name1=document.getElementById("name1")
var mssv=document.getElementById("mssv")
var lop=document.getElementById("lop")




name1.textContent=localStorage.getItem("name")
mssv.textContent=`Mã số sinh viên: ${localStorage.getItem("mssv")}`
lop.textContent=`Lớp ${localStorage.getItem("lop")}`