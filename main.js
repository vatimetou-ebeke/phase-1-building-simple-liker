// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelector(".like-glyph")
heart.addEventListener("click",event=>{
  mimicServerCall().then(()=>{
    console.log(event)
  
   if(heart.innerText===EMPTY_HEART){
      event.target.innerHTML =FULL_HEART
      event.target.className += " activated-heart"
    
   }else{
     event.target.innerHTML = EMPTY_HEART
     event.target.className = " "

   }
   
  
    
  }).catch((error) => {
   modal= document.getElementById("modal")
   if(modal.innerText===error){
     event.target.innerHTML =error
     event.target.className+= "hidden"
   }else{
     event.target.innerHTML = !error
     event.target.className= " "
   }

})
  
  event.preventDefault();
})






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

