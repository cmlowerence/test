const password = document.querySelector("#password");
const pswdEye = document.querySelector("ion-icon.showPassword");
password.addEventListener('focus', () => {
    pswdEye.setAttribute('name', 'eye-outline');
})
password.addEventListener('blur', () => {
    pswdEye.setAttribute('name', 'none')
})
pswdEye.addEventListener('click', () => {
    if (password.getAttribute("type") === "password") {
        pswdEye.setAttribute("name", "eye-off-outline");
        password.setAttribute("type", "text");
    } else {
        pswdEye.setAttribute("name", "eye-outline");
        password.setAttribute("type", "password");
    }
})

function removeExtraSpaces(string) {
    return string.trim().split(/[ ]+/).join(" ");
}

const username = document.getElementById('username');
const email = document.getElementById('email');
const usernameRes = document.getElementById('user_check');
const emailRes = document.getElementById('email_check');
const register = document.getElementById('register');

document.ready(() => {
    let username_state = false;
    let email_state = false;

    username.addEventListener('blur', () => {
        let u_username = removeExtraSpaces(username.value);
        if (u_username === "" || u_username === " ") {
            username_state = false;
            return;
        }
        $.ajax({
            url: "index.php",
            type: "post",
            data: {
                'username_check': 1,
                "username": u_username
            },
            success: (response) => {
                if (response === "Username Already Exist") {
                    username_state = false;
                    username.style.outlineColor="rgba(228, 56, 56, 0.938)";
                    usernameRes.innerHTML = `<p class = 'text-danger'>${response}<p>`;
                }else if (response === "Username Available"){
                    username_state=true;
                    username.style.outlineColor = "rgba(25, 114, 25, 0.824)";
                    usernameRes.innerHTML = `<ion-icon name="checkmark-circle" class="text-success"><ion-icon>`;
                }
            }
        });
    });
    email.addEventListener('blur',()=>{
        let u_email = removeExtraSpaces(email.value);
        if (u_email==="" || u_email===" "){
            email_state = false;
            return;
        }
        $.ajax({
            url: "index.php",
            type: "post",
            data: {
                email_check : 1,
                "email":u_email
            },
            success: (response)=>{
                if (response==="Email Already Exist"){
                    email_state = false;
                    email.style.outlineColor = "rgba(228, 56, 56, 0.938)";
                    emailRes.innerHTML = `<p class = 'text-danger'>${response}<p>`;
                }else if(response ==="Email Available"){
                    email_state=true;
                    email.style.outlineColor = "rgba(25, 114, 25, 0.824)";
                    emailRes.innerHTML = `<ion-icon name="checkmark-circle" class="text-success"><ion-icon>`;
                }
            }
        })
    })

    register.addEventListener('click',()=>{
        let username = document.getElementById('username');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        if (username_state==false||email_state==false){
            console.log('Some problem in condition username_state and email_state');
            return;
        }else{
            $.ajax({
                url : "index.php",
                type: 'post',
                data:{
                    "save":1,
                    "username":username,
                    "email":email,
                    "password":password
                },
                success: (response)=>{
                    console.log('User added successfully');
                }
            })
        }
    })
})