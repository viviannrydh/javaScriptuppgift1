let userInput=document.getElementById('user-input');
let addButton=document.getElementById('add');




add.addEventListener('click',()=>{
   
    let box=document.createElement('div');
    box.className='input-group input-row';
    

    let input=document.createElement('input');
    input.type='text';
    input.id="to-do-input";
    input.value=userInput.value;
    input.disabled=true;
  
    
    let buttonsBox=document.createElement('div');
    buttonsBox.className="to-do-buttons";
    

    let changeButton=document.createElement("BUTTON")
     changeButton.innerHTML = "Ändra";  
     changeButton.className="change";               
     
     
     let doneButton=document.createElement("BUTTON")
     doneButton.innerHTML = "Färdig"; 
     doneButton.className="done";                
     
    
     let deleteButton=document.createElement("BUTTON")
     deleteButton.innerHTML = "Radera";  
     deleteButton.className="delete";    
     
     
     buttonsBox.appendChild(changeButton);
     buttonsBox.appendChild(doneButton);
     buttonsBox.appendChild(deleteButton);
     box.appendChild(input);
     box.appendChild(buttonsBox);
     document.getElementById('to-do-container').appendChild(box);
     userInput.value='';
     
     changeButton.addEventListener('click',()=>{
         input.disabled=false;
         if(input.value.length!=0){
            if(changeButton.innerText=='Ändra'){
                changeButton.innerText='Spara';
            } else {
                changeButton.innerText='Ändra';
            }
        } else {
            alert('Empty information can not be changed or saved!')
        }
     })


     doneButton.addEventListener('click', ()=>{
        if(input.value.length!=0){
            let finishedContainer=document.getElementById('finished-container');
            buttonsBox.removeChild(doneButton);
            finishedContainer.appendChild(box);
            this.parentNode.parentNode.remove();
        } else {
            alert('The input information can not be empty');
        }
})  

    deleteButton.addEventListener('click',()=>{
        deleteButton.parentNode.parentNode.remove();
    })

});
