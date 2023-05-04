function swiggy_restData(event){
    event.preventDefault();
    

    var s_restName = document.getElementById("swiggy_restName").value;
    var s_restPrice = document.getElementById("swiggy_restPrice").value;
    var s_restType = document.getElementById("swiggy_restType").value;
    var s_restImg = document.getElementById("swiggy_restImg").value;

    if(s_restName && s_restPrice && s_restType && s_restImg){
        var new_data = {s_restName, s_restPrice, s_restType, s_restImg};
        var swiggy_storage = JSON.parse(localStorage.getItem("swiggy_restData")) || [];
        swiggy_storage.push(new_data);
        localStorage.setItem("swiggy_restData", JSON.stringify(swiggy_storage));
        alert("restaurant added successfully");
        document.getElementById("swiggy_restName").value = "";
        document.getElementById("swiggy_restPrice").value = "";
        document.getElementById("swiggy_restType").value = "";
        document.getElementById("swiggy_restImg").value = "";
    } else {
        alert("All fields are mandatory");
    }
}