// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelector(".like-glyph")
heart.addEventListener("click",event=>{
  mimicServerCall().then(()=>{
    console.log(event)
    if(FULL_HEART){
      event.target.innerHTML =FULL_HEART
    }else{
      EMPTY_HEART
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

