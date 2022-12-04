class UI{
    // UI  classını formu manipüle etmek için oluşturduk 

    // gerekli form elemanlarını seçtik
   
    constructor(){
        // UI class to manipulate this form
         //   form elements and last section are selected
        this.userName = document.getElementById("input-text");
        this.userMail = document.getElementById("input-mail");
        this.userNumber = document.getElementById("input-number")
        this.textArea =  document.getElementById("textarea")
        this.section = document.getElementById("contanier-message")
    }



    clearInputs(){

        // form submit olduğunda seçilen inputları temizledik
        // When the form submits, the selected inputs are deleted
     this.userName.value= ""
     this.userMail.value=""
     this.userNumber.value=""
     this.textArea.value=""


    }  
        //    massageInside are storage data 
    loadAllMessage(messageInside){
       this.section = document.getElementById("contanier-message")

        messageInside.forEach((messages) => {
            this.section.innerHTML +=`
            <div class="box" style=" width:28rem; min-height: 20rem;  padding-bottom: 1rem;
            text-align: center; box-shadow: 0 .3rem .5rem rgba(0,0,0,.3); background:#fff; margin:4rem 2rem;">


                <img src="https://st2.depositphotos.com/50337402/47100/v/450/depositphotos_471000168-stock-illustration-black-male-user-symbol-gold.jpg" alt="talk about" height="100rem"  width="100rem" style="  height:8.5rem; width:8.5rem;object-fit: cover; border-radius: 50%; margin-top: -4rem; border:.6rem solid var(--pink); border-left:.6rem solid var(--violet); border-bottom:.6rem solid var(--violet);" >
                <div class="message-from-user">
                    <h2 style="   font-size: 2rem; color:var(--pink);padding:0 .5rem;" >${messages._userName}</h2> 

                    <p style="font-size: 1.4rem; color:#999; padding:0 1.3rem;"> ${messages._userMessage}</p>

                </div>
                
                <div class="stars">
                    <i style=" font-size: 1.6rem;color:var(--violet);padding:1.3rem .1rem;" class="fas fa-star"></i>
                    <i style=" font-size: 1.6rem;color:var(--violet);padding:1.3rem .1rem;" class="fas fa-star"></i>
                    <i style=" font-size: 1.6rem;color:var(--violet);padding:1.3rem .1rem;" class="fas fa-star"></i>
                    <i style=" font-size: 1.6rem;color:var(--violet);padding:1.3rem .1rem;" class="fas fa-star"></i>
                    <i style=" font-size: 1.6rem;color:var(--violet);padding:1.3rem .1rem;" class="fas fa-star"></i>
                </div>
                <div class="more-info">
                    <h2 class="blur-mail">${messages._userMail}</h2>                             
                    <h2>${messages._userNumber}</h2>
               </div>
        </div>

               `
            
        });
    }


    


}







     




 