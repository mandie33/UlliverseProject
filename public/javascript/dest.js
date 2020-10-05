
function calculatePrice(qty,price) {
    return qty * price
 }// implement the function here }
document.addEventListener("DOMContentLoaded", function(event) { 
  // get values here like the `valueOfSelected`
  let nbUser="<%= user %>";
  let totalPrice = "<%= destination.price %>";

  let destPrice = calculatePrice(totalPrice * nbUser);
  let tag=document.createElement("p");
  let result = document.createTextElement("Prix total: " + destPrice);

  // Finally append to the form
  document.forms[0].tag.appendChild(result);

});