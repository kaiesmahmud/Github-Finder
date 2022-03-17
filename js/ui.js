class UI {
    constructor(){
        this.profile = document.querySelector('#profile');

    }
    showProfile(user){
        this.profile.innerHTML = 
        ` <div class="card card-body m-3 mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge ">Public Repos: ${user.public_repos}</span>
                <span class="badge ">Public Gists: ${user.public_gists}</span>
                <span class="badge ">Followers: ${user.followers}</span>
                <span class="badge ">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Name: ${user.name} </li>
                    <li class="list-group-item">Company: ${user.company} </li>
                    <li class="list-group-item">Bio: ${user.bio} </li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>`;
    }
    clearProfile(){
        this.profile.innerHTML = '';
    }
    // showAlert(msg , clsname){
    //     let div = document.createElement('div');
    //     div.className = clsname ;
    //      div.innerText = msg ;
    //      console.log(div)
    //     div.appendChild(document.createTextNode(msg));
    //     let container = document.querySelector('.searchContainer');
    //     let search = document.querySelector('.search');
    //     container.insertBefore(div,search);
    // }
}