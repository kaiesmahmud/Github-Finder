let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
// UI class is from ui.js and ui.js is must be top of this script js
let ui = new UI();

searchBtn.addEventListener('click',(e)=>{
    // console.log("you clicked")
    let userText = searchUser.value;
    // console.log(userText)
    if(userText != ''){
        // Fetch API 
        fetch(`https://api.github.com/users/${userText}`)
        .then( result => result.json())
        .then(data => {
            console.log(data)
            if(data.message == "Not Found"){
                //Show Alert and clear previous profile
                alert("User Not Found")
                ui.clearProfile();
              
            }
            else{
                //Show Profile
                ui.showProfile(data);
            }
        })
    }else{
        //Clear Profile
        ui.clearProfile();
    }
})