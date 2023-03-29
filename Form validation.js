function validate(){
    var name = document.getElementById('_name').value;
    var pass = document.getElementById('_pass').value;
    var phone = document.getElementById('_phone').value;
    var email = document.getElementById('_email').value;
    
    if(name == "")
    {
        document.getElementById('_name-error').innerHTML = "*Name is required*"

        return false;
    } 

    if(pass == "")
    {
        document.getElementById('_pass-error').innerHTML = "*Password is required*"

        return false;
    }

    else if(pass.length < 8 || pass.length > 15)
    {
        document.getElementById('_pass-error').innerHTML = "*Password must between 8 - 15*"

        return false;
    }

    if(phone == "")
    {
        document.getElementById('_phone-error').innerHTML = "*Phone no. is required*"

        return false;
    }

    if(email == "")
    {
        document.getElementById('_email-error').innerHTML = "*E-mail is required*"

        return false;
    }
    else if(email.indexOf('@') <= 0)
    {
        document.getElementById('_email-error').innerHTML = "*E-mail is not Valid*"
        
        return false;
    }
    else if(email.charAt(email.length-2) != "." || email.charAt(email.length-3) != ".")
    {
        alert(hghjgf)
        return false;
    }
        
    return false;
}