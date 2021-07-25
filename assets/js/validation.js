function nameValid(){
    var name = $("#name").val();
    var reference = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;

    if(name === "")
    {
        $("#nameSpan").html("This field cannot be empty.");
        return false;
    }
    else if(reference.test(name))
    {
        $("#nameSpan").html("");
        return true;
    }
    else{
        $("#nameSpan").html("Only Letters are allowed.");
        return false;
    }
}
function mobileValid() {
    var mobile = $("#mobile").val();
    var reference = /^\d+$/;

    if(mobile === "")
    {
        $("#mobileSpan").html("This field cannot be empty.");
        return false;
    }
    else if(reference.test(mobile))
    {
        if(mobile.length == 10)
        {
            $("#mobileSpan").html("");
            return true;
        }
        else if(mobile.length<10 || mobile.length>10)
        {
            $("#mobileSpan").html("Enter exact 10 numbers");
            return false;
        }
    }
    else{
        $("#mobileSpan").html("Only numbers are allowed.");
        return false;
    }
}


function emailValid() {
    var email = $("#email").val();
    var reference = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

    if(email === "")
    {
        $("#emailSpan").html("This field cannot be empty.");
        return false;
    }
    else if(reference.test(email))
    {
        $("#emailSpan").html("");
        return true;
    }
    else{
        $("#emailSpan").html("Enter email in correct format.");
        return false;
    }
}



function messageValid() {
    var name = $("#message").val();
    var reference = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;

    if(name === "")
    {
        $("#messageSpan").html("This field cannot be empty.");
        return false;
    }
    else if(name.length<10)
    {
        $("#messageSpan").html("Enter minimum 10 charecters");
        return false;

    }
    
    else{
        $("#messageSpan").html("");
        return true;
    }
}

$("#nameText").on('keyup',function (){
        nameValid();
})


$("#mobileText").on('keyup',function () {
    
    mobileValid();
})
$("#emailText").on('keyup',function () {
    emailValid();
})

$("#messageText").on('keyup',function () {
   messageValid();
})