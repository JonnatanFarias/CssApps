function logar(){
    var txtUserLogin = "admin";
    var txrUserPassword = "admin123";

    var txtUser = document.getElementById("textinputUser").value;
    var txtPassword = document.getElementById("textinputPassword").value;
    
    if(txtUser==0){
        alert("Campo do usuário precisa ser preenchido.");
    }else if(txtPassword==0){
        alert("Campo do senha precisa ser preenchido.");
    }else if(txtUser!=txtUserLogin){
        alert("Usuario incorreto, por favor tente novamente.");
    }else if (txtPassword!=txrUserPassword){
        alert("Senha incorreta, por favor tente novamente.");
    }else{
       window.location.replace("https://www.google.com.br"); 
    }
    

}