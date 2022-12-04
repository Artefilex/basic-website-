
// header document
const humber = document.querySelector(".fas")
const nav = document.querySelector("nav")
const header = document.getElementById("header")
const ul = document.querySelectorAll("#ul li a")
const tagChange = document.querySelectorAll(".tag")

// only use show massage
const section = document.getElementById("contanier-message")
const messagesLocal=  document.getElementById("local-message")

// this document to be used in the UI class
const userName= document.getElementById("input-text");
const userMessage = document.getElementById("form-input")
const userNumber = document.getElementById("input-number")
const userMail = document.getElementById("input-mail")
const textArea = document.getElementById("textarea")

// create a new UI class for using app.js
const ui = new UI()


eventListener()
function eventListener(){
     
  humber.addEventListener("click",function(e){
    // I use event bubbling and index because weneed target second classname for changing
    if(e.target.classList[1] === "fa-bars" ){
      humber.classList.add("fa-times")
      humber.classList.remove("fa-bars")
      nav.classList.add("nav-toggle")
      

    }else{
      humber.classList.add("fa-bars")
      humber.classList.remove("fa-times")
      nav.classList.remove("nav-toggle")

    }

   })

    for(let i = 0 ; i < ul.length; i++){
      // we checked for a tag 
      // then  selected tag has changed color to var(--violet) then unseleceted tag color became var(--pink)
        ul[i].addEventListener("click",function(e){
          for(let i = 0 ; i < ul.length; i++){
              let values = e.target.textContent
              let targetElement = e.target.classList.add("active");
                  
               ul[i].classList.remove("active")
              
              if ( values === "home" && e.target.classList !== "active") {
                targetElement
              } 
                else if ( values  === "about"  && e.target.classList !== "active") {
                targetElement
  
              }
              else if (values  === "teacher" && e.target.classList !== "active") {
               targetElement
  
              }
              else if ( values  === "course" && e.target.classList !== "active") {
               targetElement

              } 
              else if (values  === "review" && e.target.classList !== "active") {
               targetElement

              } 
              else if (values  === "contact" && e.target.classList !== "active") {
               targetElement
      
              }
    
       }  })
        
    }
    
    // submit form 
    userMessage.addEventListener("submit",getData)
    messagesLocal.addEventListener("click",function(e){
      //  we change this button textcontent then manipulate this section.display 

      if(e.target.textContent ==="Hide Messages"){
        section.style.display="flex"
        e.target.textContent = "User Messages"
      }
      else{
        e.target.textContent = "Hide Messages"
        section.style.display="none"

      }
    })

    
// if DOMcontentLoad run these functions 
// then storage data push inside ui 
 
document.addEventListener("DOMContentLoaded",function(){
  let messageInsideUI = Storage.getMessageFromUsers();
  ui.loadAllMessage(messageInsideUI);
})
   
  }

function changenav(){
  //  this function used by body 
  // if mouse moves 30px on the y-axis for the function to work

  let y_axsis = window.scrollY
   
  if(Math.floor(y_axsis)> 30){
  header.classList.add("header-active")
  }else{
    header.classList.remove("header-active")
  }

}
function getData(e){
  let _userName = userName.value
  let _userMail = userMail.value
  let _userNumber= userNumber.value
  let _userMessage = textArea.value

  if( _userName ==="" || _userMail==="" || _userNumber ===""||_userMessage=== "" ){

    alert("Please fill in all fields")
  }else{ 
    const messagesSentByUsers = new Message(_userName,_userMail,_userMessage,_userNumber)
    //  update storage 
    Storage.addMessageFromUsersToStorage(messagesSentByUsers) 
  }
 
  ui.clearInputs()
  e.preventDefault()

}

 function learnMore(){

  let dots = document.getElementById("dot");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("btnMore");

  if(dots.style.display === "none"){
    dots.style.display = "inline"
    btnText.innerHTML ="Read More"
    moreText.style.display ="none" 
 
  }else{
    dots.style.display = "none"
    btnText.innerHTML = "Read Less"
    moreText.style.display ="inline" 
    
  }
 }    





