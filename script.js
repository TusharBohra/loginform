
function myfun(){
    var a = document.getElementById("passwords").value;
    if(a.length < 8){
        document.getElementById("messages").innerHTML="Password should be more than 8 characters";
        return false;
    }
    else{
        document.getElementById("messages").innerHTML="";
    }
}

function myfun1(){
    var b = document.getElementById("emails").value;
    if(b.length < 4){
        document.getElementById("messages1").innerHTML="Make sure the email has more than 3 charaters";
        return false;
    }
    if(b.search("@") == -1){
        document.getElementById("messages1").innerHTML="Invalid email as @ is not used";
        return false;   
    }
    if((b.charAt(b.length-4) != ".") && (b.charAt(b.length-3) != ".")){
        document.getElementById("messages1").innerHTML="Invalid email as . is not used";
        return false;   
    }
    else{
        document.getElementById("messages1").innerHTML="";   
    }
}





