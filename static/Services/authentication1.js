const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerBtn = document.getElementById("register-btn");
const username = document.getElementById("username");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("login-btn");

const signUpNow = document.getElementById("sign-up-now");
const signInNow = document.getElementById("sign-in-now");

try{
    signInNow.onclick = () => {
        window.location = 'login.html'
    }
}catch{
    console.log("...")
}

try{
    signUpNow.onclick = () => {
        window.location = 'register.html'
    }
}catch{
    console.log("...")
}

try{
    registerBtn.onclick = () => {
        auth
        .createUserWithEmailAndPassword(registerEmail.value, registerPassword.value)
        .then((data) => {
            db.collection("profile").doc(data.user.uid).set({
                name: username.value,
                avartar: "https://www.epicentrofestival.com/wp-content/uploads/2019/12/Person-Clipart-Person-Clip-Art-Image-Clip-Art-Library-Hypertext-Transfer-Protocol-720x962.jpg",
                friends: [],
                followers: []
            })
            .then(() => {
                window.location = "index.html"
            })
            .catch(() => {
                console.log("Error")
            })
            alert("You have successfully signed up!!!")
        })

        .catch(function (error) {
            console.log(error.message);
        });
    };
}catch{
    console.log('...')
}

try{
    loginBtn.onclick = () => {
        auth.signInWithEmailAndPassword(loginEmail.value, loginPassword.value).then(() => {
            window.location = "index.html"
        })
    };
}catch{
    console.log("...")
}