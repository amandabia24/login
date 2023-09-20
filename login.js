username == "Amanda bia"
password == "123456" ;
 
function confirmar(){
var lgn = document.getElementById ('login').value;
var pwd = document.getElementById ('passwd').value;

if(lgn== username & pwd== password){
    alert('certinho') 
}

else{
    alert('erradinho')

}
}