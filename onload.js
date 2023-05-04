window.onload = () =>{
    var swiggy_currentUser = JSON.parse(localStorage.getItem("swiggy_current_user"));
    // console.log(swiggy_currentUser);

    var ls = JSON.parse(localStorage.getItem("swiggy_restData"));
    var finalData = "";
    var insertRestIntoDiv = document.getElementById("rest_insert");

    for(var i=0;i<ls.length;i++){
        finalData += `<div class="rest-box"><div class="rest-info"> <div><img src="${ls[i].s_restImg}" alt="" /></div> <div><h4>${ls[i].s_restName}</h4></div> <div><p>${ls[i].s_restType}</p></div> <div><button><i class="fa-solid fa-star"></i> 4.4 </button> <p>23 mins</p> <p>₹${ls[i].s_restPrice} for two</p></div> </div><div class="quick-view"><p>QUICK VIEW</p></div></div>`;
        insertRestIntoDiv.innerHTML = finalData;
    }

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
        console.log("Current User is absent");
    }
}

function swiggy_logout(){
    localStorage.removeItem("swiggy_current_user");
    window.location.reload();
}