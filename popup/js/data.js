const button = document.getElementById("header-button");
const popup = document.getElementById("popup");
const opc = document.getElementById("opc");

function opcOppen(){
    opc.classList.add("opc-open");
}




function formPopup(){
    const form = document.createElement("div");
    form.classList.add("popup-area");

    const title = document.createElement("h3");
    title.innerHTML="Üye Olun";
    title.classList.add("popup-title");
    

    const inputForm =document.createElement("form");
    

    const name = document.createElement("input");
    name.setAttribute("type", "text");
    name.classList.add("input-class");
    name.placeholder="İsim girin...";

    const surname = document.createElement("input");
    surname.setAttribute("type", "text");
    surname.classList.add("input-class");
    surname.placeholder="Soyisim girin...";

    const password = document.createElement("input");
    password.setAttribute("type", "password");
    password.classList.add("input-class");
    password.placeholder="Şifre oluşturun";
    
    const passwordX = document.createElement("input");
    passwordX.setAttribute("type", "password");
    passwordX.classList.add("input-class");
    passwordX.placeholder="Şifrenizi doğrulayın";

    const phone = document.createElement("input");
    phone.setAttribute("type", "number");
    phone.classList.add("input-class");
    phone.placeholder="Telefon numranızı giriniz";

    const popupButton = document.createElement("button")
    popupButton.classList.add("popup-button");
    popupButton.innerText ="Gönder";






    
    inputForm.appendChild(name);
    inputForm.appendChild(surname);
    inputForm.appendChild(password);
    inputForm.appendChild(passwordX);
    inputForm.appendChild(phone);
    form.appendChild(popupButton);
    form.appendChild(title);
    form.appendChild(inputForm);    
    popup.appendChild(form);

   const popupArea =document.getElementsByClassName
}


function Close(){
    opc.classList.remove("opc-open");
    popup.style.display = "none";

}
function block(){
    popup.style.display= "block";
}


opc.addEventListener("click", Close);
button.addEventListener("click", opcOppen);
button.addEventListener("click", formPopup);
button.addEventListener("click", block);
