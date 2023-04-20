function register(event){
    event.preventDefault();

    var s_name = document.getElementById("register_username").value;
    var s_number = document.getElementById("register_phoneNumber").value;
    var s_email = document.getElementById("register_email").value;
    var s_password = document.getElementById("register_password").value;
    var s_confirmPassword = document.getElementById("register_confirmPassword").value;

    if(s_name && s_number && s_email && s_password && s_confirmPassword){
        if(s_password.length >= 8 && s_confirmPassword >=8){
            if(s_password == s_confirmPassword){
                var swiggy_storage = JSON.parse(localStorage.getItem("swiggy_users")) || [];
                var flag=false;

                for(var i=0;i<swiggy_storage.length;i++){
                    if(swiggy_storage[i].userEmail == s_email){
                        flag=true;
                    }
                }

                if(!flag){
                    var swiggy_user_data = {userName: s_name, userNumber: s_number, userEmail: s_email,userPassword: s_password,userConfirmPassword: s_confirmPassword};
                    swiggy_storage.push(swiggy_user_data);
                    localStorage.setItem("swiggy_users", JSON.stringify(swiggy_storage));
                } else {
                    alert("Email is already registered. Proceed to login");
                    window.location.href = "./login.html";
                }
            } else {
                alert("Passwords do not match");
            }
        } else {
            alert("Enter 8 or more characters");
        }
    } else {
        alert("All fields are Mandatory");
    }
}


function login(event){
    event.preventDefault();

    var s_login_email = document.getElementById("login_email").value;
    var s_login_password = document.getElementById("login_password").value;

    if(s_login_email && s_login_password){
        var swiggy_storage = JSON.parse(localStorage.getItem("swiggy_users"));
        var flagForCheck = false;
        var swiggy_current_user = {};

        for(var i=0;i<swiggy_storage.length;i++){
            if(swiggy_storage[i].userEmail == s_login_email && swiggy_storage[i].userPassword == s_login_password){
                flagForCheck = true;
                swiggy_current_user = swiggy_storage[i];
            }
        }
        
        if(flagForCheck){
            localStorage.setItem("swiggy_current_user", JSON.stringify(swiggy_current_user));
            window.location.href = "./restaurant.html";
        } else {
            alert("Credentials don't match. Try again.")
        }
        
    } else {
        alert("All fields are mandatory");
    }
}