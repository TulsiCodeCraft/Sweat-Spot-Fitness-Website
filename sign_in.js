let signupb = document.getElementById("signupb");
        let loginb = document.getElementById("loginb");
        let namef = document.getElementById("namef");
        let callf = document.getElementById("callf");
        let title =document.getElementById("title");

        loginb.onclick=function(){
            namef.style.maxHeight="0";
            callf.style.maxHeight="0";
            title.innerHTML="Login";
            signupb.classList.add("disable");
            loginb.classList.remove("disable");
        }
        
        signupb.onclick=function(){
            namef.style.maxHeight="60px";
            callf.style.maxHeight="60px";
            title.innerHTML="Sign Up";
            signupb.classList.remove("disable");
            loginb.classList.add("disable");
        }