window.addEventListener('load', function(){
document.forms[0].addEventListener("submit",checkingPwd);

function checkingPwd(e) {
  let passwordValue=document.getElementById("password").value;
  let passwordTwoValue = document.getElementById('passwordTwo').value;
      if(passwordTwoValue !== passwordValue){
            document.getElementById("txt").innerText="Ce mot de passe n'est pas identique au premier"
            e.preventDefault();
            return false
        }
      else{
            return true
          }
}
})
// const cgv=()=>{
//   if(!document.getElementById("cgv").checked)
// 			{
// 				document.getElementById("txt2").innerText="Vous devez accepter les CGV avant de soumettre le formulaire."
// 				return false;
// 			}
// 			else
// 			{
// 				return true;
// 			}
// }
// cgv

// const radioButtons= document.getElementsByName("gender");
//         for(var i = 0; i < radioButtons.length; i++)
//          {
//          return(radioButtons[i].checked==true?  true : false);
//         }