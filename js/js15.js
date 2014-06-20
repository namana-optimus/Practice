/**
 * Created by Admin on 6/20/2014.
 */
function change(){
    var x=document.getElementById("demo");
    x.style.fontSize = "50px";
    x.innerHTML="World Hello";
    console.log(x);
}
function changeImage(){
    var x=document.getElementById("twitter");
    if(x.src.match("twitter")){
        x.src="images/linkedin.jpg";
    }else{
        x.src="images/twitter.jpg";
    }
}
function validate(){
    var x=document.getElementById("num").value;
    var y=document.getElementById("demo");
    if(x.trim()==""|| isNaN(x)){
        y.innerHTML="Not a number";
    }else{
        y.innerHTML="It is a number.";
    }
}
function fullname(){
    var x=document.getElementById("fname").value;
    var y=document.getElementById("lname").value;
    var z={firstname:x,
            lastname:y,
            fulln:function(){return this.firstname+" "+ this.lastname}
    };
    document.getElementById("full").innerHTML= z.fulln();
}