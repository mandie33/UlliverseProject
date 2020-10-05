window.addEventListener('load', function(){
document.forms[0].addEventListener("submit",checkFields);
function checkFields(e){
    // const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    if (name=="") { 
        // document.getElementById("txt3").innerText="merci de compléter ce champs:)";
         
       console.log("veuillez entrer votre nom");
            e.preventDefault();
        return false
    } else {
        
        return true;
    }
    
}

const checkedGender=()=>{
    const radioButtons= document.getElementsByName("gender");
        for(var i = 0; i < radioButtons.length; i++)
         {
         return(radioButtons[i].checked==true?  true : false);
        }
       
}
checkedGender;

// const checkSubject=()=>{
//     const radioButtons= document.getElementsByName("sujet");
//         for(var i = 0; i < radioButtons.length; i++)
//         {
//             if(radioButtons[i].checked == true)
//             {
                    
//                     return true;
                
                    
//             }else{
//                 return false;
//             }
//         }

// }

// checkSubject;
const checkSubject=()=>{
    const radioButtons= document.getElementsByName("sujet");
        for(var i = 0; i < radioButtons.length; i++)
        {
            return(radioButtons[i].checked?  true : false);
        
        }
        

}

checkSubject;
})

// document.forms[0].addEventListener("submit",checkFields);
// function checkFields(e){
//     // const email = document.getElementById("email").value;
//     const name = document.getElementById("name").value;
//     if (name=="") { 
//         // document.getElementById("txt3").innerText="merci de compléter ce champs:)";
         
//         console.log("veuillez entrer votre nom");
//             e.preventDefault();
//         return false
//     } else {
        
//         return true;
//     }
    
// }
// document.forms[0].addEventListener("submit",checkFields);



