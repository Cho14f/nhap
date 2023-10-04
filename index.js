var btnSignIn=document.getElementById("btn_signin")
var inputName=document.getElementById("inputName")
var inputPass=document.getElementById("inputPass")

var  Email=[];// mảng email

Email[0]='admin@gmail.com'
Email[1]='tester@gmail.com'


var  Pass=[];// mảng pass
Pass[0]='admin'
Pass[1]='tester'

var  Name=[];
Name[0]='Hoang Van Quynh'
Name[1]='toi ten la'


var  mssv=[];
mssv[0]='705105099'
mssv[1]='705105000'

var  lop=[];
lop[0]="12A";
lop[1]="12B"


let flag=1;

btnSignIn.onclick=function(){
    var email=inputName.value// lấy giá  trị input của email
    var pass=inputPass.value// ấy giá  trị input của pass
    for(var i=0; i<Email.length; i++){
        if(email==Email[i] && pass ==Pass[i]){
            flag=0;// tài khoản đã đúng
            //localStorage.setItem(key,value) 
            localStorage.setItem('name',Name[i]) 
            localStorage.setItem('ms',mssv[i]) 
            localStorage.setItem('lop',lop[i]) 
            window.location.href='./routes/main.html'
        }
    } 
    if(flag){
        console.log('sai')
    }    
        
}
