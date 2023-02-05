function validate()
{
    var fn=document.getElementById("fn").value;
    if (fn.length>13)
    {
        alert("First name should not exceed 25 characters");
    }
    var ln=document.getElementById("ln").value;
    if (ln.length>13)
    {
        alert("Last name should not exceed 25 characters");
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
    var pn = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (pn.test(no))
    {

    }
    else
    {
        alert("Phone no is invalid");
    }
    if((document.getElementById('p2').checked == true)||(document.getElementById('p3').checked == true))
    {   
        var cq = document.getElementById("dd").value;
        if (cq.length!=6)
        {
            alert("Cheque no is invalid");
        }
    }
}