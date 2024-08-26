




//Create Function 
function order() {
    //make a variable to hold input value
    const holdInput = document.querySelector("#inputItems").value; 
    


    //create a list items
    const holdList = document.createElement("li"); 
    holdList.innerHTML = holdInput; 


    // //insert items to the list
    const insertItems = document.querySelector("#order_list"); 
    insertItems.appendChild(holdList); 
    
}