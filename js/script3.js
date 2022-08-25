function logar(){
    var txtUserLogin = "admin";
    var txrUserPassword = "admin123";

    var txtUser = document.getElementById("textinputUser").value;
    var txtPassword = document.getElementById("textinputPassword").value;


    if(txtUserLogin == txtUser){
        console.log("Login correto");
    }else{
        console.log("Login incorreto!");
    }

    

}