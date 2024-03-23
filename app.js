let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset")
let newGame = document.querySelector("#newGame")
let showWinner = document.querySelector("#show-winner")
let msg = document.querySelector(".msg")


let print_Winner = function(team)
{
     showWinner.classList.remove("hide")
     showWinner.style.display = "flex";
      msg.innerHTML=`Congrats ! Winner is ${team}`;

    
}
 


let stopGame = function()
{
    boxes.forEach(box=>{
        box.disabled = true;
        
    })
     
}

let reset_Game = function()
{
     
    boxes.forEach(box=>{
        box.innerHTML = "";
        box.disabled = false;
        showWinner.classList.add("hide")
    })

    showWinner.style.display = "none";
}

 

 
let turnO = true;
let counter=0;

let winnerSet = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

]
let val1;
let val2;
let val3;

let winner = function()
{ 
    
    counter++;

    for(set of winnerSet)
    {
         val1 = boxes[set[0]].textContent;
         val2 = boxes[set[1]].textContent;
         val3 = boxes[set[2]].textContent;
       

         if( val1 != "" && val2 != "" &&  val3 != "")
         {
             if(val1 == val2 && val2 == val3 && val3 == val1)
             {
                console.log("winner")
                print_Winner(val1)
                stopGame();
             }
             
              
         }
    }
 
}

// winner()


boxes.forEach(box =>{
    box.addEventListener("click" , (e)=>{
         if(turnO)
         {
            box.innerHTML="O";
            turnO = false;
             
            winner()
         }
         else{
            box.innerHTML="X";
            turnO = true;
            winner()

             
         }

         box.disabled = true; 
    })
})
 

reset.addEventListener("click", reset_Game)
newGame.addEventListener("click", reset_Game)