const mainId = document.getElementById("main");
mainId.remove();

//create the h1 element
const newHeader = document.createElement("h1");
//set the id attribute to be victory
newHeader.setAttribute("id", "victory");
//set the h1 content to be Alex is the champion
newHeader.textContent = "Alex is the champion";
//add the element together wth the properties to the DOM
document.body.append(newHeader);
console.log(newHeader.id);