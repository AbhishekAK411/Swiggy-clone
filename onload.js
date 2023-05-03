window.onload = () =>{
    var swiggy_currentUser = JSON.parse(localStorage.getItem("swiggy_current_user"));
    // console.log(swiggy_currentUser);

    if(swiggy_currentUser){
        var swiggy_div = document.getElementById("swiggy_current_user");
        var removeTag = document.getElementById("swiggy_remove_tag");
        removeTag.remove();

        var p = document.createElement("p");
        p.innerText = swiggy_currentUser.userName;
        swiggy_div.append(p);

        var logout_div = document.getElementById("logout");
        var replace = `<button class="logout_style" onclick="swiggy_logout()"><i class="fa-solid fa-arrow-right-from-bracket"></i> <p>Logout</p><button>`;
        logout_div.innerHTML = replace;

    } else {
        alert("Current User is absent");
    }
}

function swiggy_logout(){
    localStorage.removeItem("swiggy_current_user");
    window.location.reload();
}