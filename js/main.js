

const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');  // todos that contains items
// const search = document.querySelector('.search input')



// function that add the new element to my list 
const adding =  toadd =>
{
  const item = `
    <li class="list-group-item my-2 d-flex justify-content-between align-items-center">
        <span> ${toadd} </span>
        <i class="fas fa-trash delete"> </i>
    </li>
    `;
   todos.innerHTML += item; // to add the element bottom to todos list 
}

addForm.addEventListener('submit',e =>
{
    e.preventDefault();
    const toadd = addForm.add.value.trim(); // trim used to get rid of spaces before and after word 

    if(toadd.length)
    {
        adding(toadd); 
    }
    addForm.reset();
     // calling the function to add a new element

});

 // remove an item in the list
todos.addEventListener('click',(e)=>
{
    if(e.target.classList.contains('delete'))
    {
       e.target.parentElement.remove();
    }
})

const search = document.querySelector('.search input');
// function of seraching 
const searching = (term) =>
{
  Array.from(todos.children)
  .filter(item  => !item.textContent.includes(term))
  .forEach(item => item.classList.add('hide'));

  Array.from(todos.children)
  .filter(item  => item.textContent.includes(term))
  .forEach(item => item.classList.remove('hide'));

}

search.addEventListener('keyup',()=>
{
   const term = search.value.trim();
   searching(term)
})


//search the list 

// function Filtering list
/* 
const filterList = (term)=>
{
   // console.log((todos.children));
    // console.log(Array.from((todos.children)));
    /* Array.from((todos.children))
      to get all (li) of the todos (ul)
      then convert it to an array using Array.from
      to can use arrayMethod on it  
      // very important
         .filter((Ele) =>
             {
                //console.log(Ele.textContent)
                console.log(Ele.textContent.includes(term));
                 return !Ele.textContent.includes(term);
             })
    *//*
     Array.from((todos.children))
             .filter((Ele) => !Ele.textContent.includes(term))
             .forEach((Ele) =>
             {
               Ele.classList.add('hide');
             })

     Array.from((todos.children))
             .filter((Ele) =>  Ele.textContent.includes(term))
             .forEach((Ele) =>
             {
               Ele.classList.remove('hide');
             })

}

search.addEventListener('keyup',()=>
{
    const term =search.value.trim();
    filterList(term)
})
*/


/*


const add = document.querySelector('.add');
const todos =document.querySelector('.todos');
// making item 
const generateItem = item =>
{
  const Name = ` <li class="list-group-item my-2 d-flex justify-content-between align-items-center">
    <span> ${item} </span>
    <i class="fas fa-trash delete"></i>
    </li> `;
  todos.innerHTML += Name;
}


add.addEventListener('submit', e =>
{
    e.preventDefault();
    const itemAdding = add.add.value.trim();
    add.reset()
    if(itemAdding.length)
    {
        generateItem(itemAdding);
    }

});
*/
/*
todos.addEventListener('click', e =>
{  
    /*
        console.log(e.target);
        console.log(e.target.classList)
        console.log(e.target.classList.contains('delete'))
    */
   //if(e.target.classList.contains('delete'))
  // {
    //  e.target.parentElement.remove();
   //}
//})
//*/
