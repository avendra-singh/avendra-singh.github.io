var button1 = document.getElementsByClassName("button")[0];
var input = document.getElementsByClassName("text")[0];
var ul=document.getElementsByClassName("list")[0];

button1.addEventListener("click",function() 
{
    if(input.value !== ""){
        append_element();
    }
})
input.addEventListener("keypress",function(event) 
{
    if(input.value !== "" && event.which===13){
        append_element();
    }
})
function append_element(){
    var li=document.createElement("li")
    li.setAttribute("class","list_item")
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value=""
}
ul.addEventListener("click",function(event) {
    var p=event.path[0]
    p.setAttribute("class","toggle")
})
