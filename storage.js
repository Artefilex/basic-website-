class Storage{

    static getMessageFromUsers(){
        let users;
        if(localStorage.getItem("messages") === null){
            users = []
            // if messsage is null create an empty array 
        }else{
            users =  JSON.parse((localStorage.getItem("messages")))
            // else users message get localstorage
        }
      
        return users
    }
    static addMessageFromUsersToStorage(newMessage){
     let users = this.getMessageFromUsers()
     users.push(newMessage)

      localStorage.setItem("messages",JSON.stringify(users))
    }
    static clearAllMessage(){
        localStorage.removeItem("messages")
    }

    


}