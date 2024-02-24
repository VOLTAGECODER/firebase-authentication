import{getAuth,signInWithEmailAndPassword} from "./firebase.js"

const login = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    console.log(email.value, password.value);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {

    const user = userCredential.user;
    window.location="profile.html";
   console.log("user",user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(" errorMessage",  error.code,errorMessage)
  });

}
  let loginBtn = document.getElementById("login-btn");
  loginBtn.addEventListener("click", login);