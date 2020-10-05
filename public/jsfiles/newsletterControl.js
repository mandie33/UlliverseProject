document.forms[0].addEventListener("submit",(e)=>{
  const mail=document.getElementById("email").value;
  const name=document.getElementById("fname").value;
        if(mail =="" &&  name==""){
document.getElementById("txt").innerText="Veuillez compléter ces 2 champs";
  e.preventDefault(); }
        })

