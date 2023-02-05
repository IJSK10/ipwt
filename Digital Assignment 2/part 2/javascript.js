function validate()
{
    var fn=document.getElementById("fn").value;
    if (fn.length>25)
    {
        alert("Full name should not exceed 25 characters");
    }
    var user = document.getElementById("em").value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(user))
    {
    }
    else 
    {
        alert("Refill this Email Id");
    }
    var no = document.getElementById("no").value;
    var pn= /^([+]{1}[0-9]{1,3}[-])?[0-9]{10}$/;
    if (pn.test(no))
    {

    }
    else
    {
        alert("Phone no is invalid");
    }
    var pw=document.getElementById("pw").value;
    var cpw=document.getElementById("cpw").value;
    var pass=/^[A-Z]{1}[a-zA-Z0-9@$&*]{7,14}$/;
    if (pass.test(pw))
    {

    }
    else
    {
        alert("Password is not valid");
    }
    if (pw!=cpw)
    {
        alert("Password and COnfirm password are not same");
    }
}