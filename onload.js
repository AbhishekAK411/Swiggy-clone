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

    } else {
        alert("Current User is absent");
    }
}