const userForm = document.getElementById("user-form")
const Uname = document.getElementById("user-name");
const surname= document.getElementById("user-surname");
const password = document.getElementById("password");
const mail = document.getElementById("user-email");
const number = document.getElementById("user-number");
const date = document.getElementById("user-month");
const color = document.getElementById("user-color");
const msj = document.getElementById("user-msj");
const textCont = document.getElementById("text-cont")
const formBtn = document.getElementById("form-button")




function formControl(){

    //name
    textCont.style.display ="block"
    if(Uname.value == ""){
       message="kullanıcı adı alanını doldurunuz";
       textCont.innerHTML= message;
        return;
    }
    if(Uname.value != ""){
       if(Uname.value.length<3 || Uname.value.length>25 ){
            message="Kullanıcı adı en az 3, en fazla 25 karakter olmalıdır ";
            textCont.innerHTML= message;
            return;  
       }else if(Uname.value.search(/[0-9]/)> -1 ){
         message="Kullanıcı adı alanına sayı girmeyin";
            textCont.innerHTML= message;
            return;
       }
    }
    //surname
    if(surname.value == ""){
        message="Soyadı alanını doldurunuz";
        textCont.innerHTML= message;
        return;
    }
   if(surname.value != ""){
    if(surname.value.length<2 || surname.value.length>25 ){
        message="Soyadı an az 2 en fazla 25 karakter olmalıdır ";
        textCont.innerHTML= message;
        return;
    }else if(surname.value.search(/[0-9]/)> -1 ){
        message="Soyadı alanına sayı girmeyin";
        textCont.innerHTML= message;
        return;
    }
    }

    //password
    if(password.value == ""){
        message="şifre kısmını boş bırakmayınız";
        textCont.innerHTML= message;
        return;
    }
    if(password.value != ""){
        if(password.value.length<6 ||password.value.search(/[A-Z]/)< 0 ||password.value.search(/[0-9]/)<0) {
            message="şifre en az 6 karakterli bir 'Büyük harf' ve 'Sayı' içermelidir";
            textCont.innerHTML= message;
            return;
        }
    }

    //maillll
    if(mail.value == ""){
        message="Mail kısmını boş bırakmayınız";
        textCont.innerHTML= message;
        return;
    }
    if(mail.value != ""){
       if(mail.value.indexOf("@", 0)==-1 || mail.value.indexOf(".", 0)==-1){
        message="Mail alanında '@' ve '.' işaretlerini kullanmanız zorunludur";
        textCont.innerHTML= message;
        return;
       }
    }
    //numberrr
  
            const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
    
        
   
        if(number.value == ""){
            message="telefon numarası kısmını boş bırakmayınız"
            textCont.innerHTML= message;
            return;
           }
           if(number.value != ""){
             if(number.value.length<10){
                message="numranızı 'xxx xxx-xxxx' şekinde ve 0 kullanmadan giriniz";
                textCont.innerHTML=message;
                return;

             }else if(number.value.search(/[a-z]/) > -1){
                message="Numaralar kısmında harf kullanmayın";
                textCont.innerHTML=message;
                return;
             }else if(!number.value.match(regex)){
                message="numranızı 'xxx xxx-xxxx' şekinde ve 0 kullanmadan giriniz";
                 textCont.innerHTML=message;   
                return;
                }
           }


           //month
           if(date.value ==""){
            message="lütfen bir ay giriniz";
            textCont.innerHTML=message;
            return
           }
           if(msj.value==""){
            message="Mesaj alanını boş bırakmayınız";
            textCont.innerHTML=message;
            return;
           }
           if(msj.value!=""){
                if(msj.value.length<25){
                    message="Mesaj kısmı en az 25 karakterden oluşmalıdır";
                    textCont.innerHTML=message;
                    return;
                }
           }
    userForm.submit();
}


