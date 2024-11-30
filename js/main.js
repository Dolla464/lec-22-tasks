// task 1
function workCount() {
    var works = document.querySelector("#works").value;
    var result = document.querySelector("#result");

    if(works==""){
        alert("Please Enter Valid Work");
        return false;
    }
    else{
        var myLi = document.createElement("li");
        myLi.innerHTML = works;
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click" , function() {
            result.removeChild(myLi);
        })
        myLi.appendChild(deleteButton);
        result.append(myLi);
        document.querySelector("#works").value = "";
        return false;
    }
}

 

//  task  2
    document.querySelector("#clickMe").onclick = function(){
    var newElement = document.createElement("h4");
    var myText = document.createTextNode("Hello World");
    newElement.append(myText);
    newElement.id = "pen";
    newElement.className = "watch";
    var parentElement = document.createElement("div");
    parentElement.className = "col-md-6";
    parentElement.append(newElement);
    var elementAdd = document.querySelector(".test");
    elementAdd.insertBefore(parentElement , elementAdd.children[0]);
}


// task 3
document.querySelector("#red").onclick = function(){
    document.querySelector("#colorSelect").style.color = "red";
}
document.querySelector("#blue").onclick = function(){
    document.querySelector("#colorSelect").style.color = "blue";
}
document.querySelector("#green").onclick = function(){
    document.querySelector("#colorSelect").style.color = "green";
}


// task 3
// document.querySelectorAll("button").forEach( function (element){
//     element.onclick = function(){
//         document.querySelector("#selectColor").style.color = element.dataset.colorrr;
//     }
// })