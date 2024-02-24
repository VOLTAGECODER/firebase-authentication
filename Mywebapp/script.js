import{getAuth,onAuthStateChanged,signOut } from "./firebase.js"
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
     console.log("user",user)
     name.innerHTML=user.email.slice(0,user.email.indexOf("@"));
     email.innerHTML=user.email;
    } else {
    console.log("not login",)
    }
  });
  let logout=()=>{
    signOut(auth).then(() => {
       console.log("signout")
       window.location="index.html"
      }).catch((error) => {
       console.log("error")
      });
  }
let logoutbtn=document.getElementById("logout-btn");
 logoutbtn && logoutbtn.addEventListener('click',logout);