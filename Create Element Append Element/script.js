





function addItems () {
    // First picking the input value
    const inputValue = document.getElementById("listInput").value; 
    
    
    //Creating the list items 
     const createList = document.createElement("li"); 
     createList.innerHTML = inputValue; 
          

    // Then insert the value in the ul tag 
    const insertList = document.getElementById("listItems"); 
    insertList.appendChild(createList); 
}




