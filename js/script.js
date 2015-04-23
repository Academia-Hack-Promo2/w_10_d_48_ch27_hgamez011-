var list = [];
var ele1;

function add_to_list(message){
  list.push(message);
}

add_to_list("Mensaje 1");
add_to_list("Mensaje 2");
add_to_list("Mensaje 3");
add_to_list("Mensaje 4");

function create_page(){
  
  var doc = document.getElementById("timeline");
    var body = document.createElement("ul");
      var ele; list_elem(body, ele);

    var head = document.createElement("div");
      var text = document.createElement("input");
        text.type="text"; text.placeholder="Escriba su mensaje";
      
      var button = document.createElement("button");
        button_tx = document.createTextNode("Enviar");
        button.addEventListener("click", function(){
          var text_length = (text.value).length;
          console.log(text_length);
          if(text_length != 0 && text_length <= 140){
              add_to_list(text.value);
              text. value = '';
              add_elem(body, ele);
          }else if(text_length > 140){
              alert("Message too long, Limit: 140 characters");
              text. value = '';
          }else{
            alert("Message Empty");
          }
        });


  button.appendChild(button_tx);
  head.appendChild(text); head.appendChild(button);
  doc.appendChild(head); doc.appendChild(body);
}

function list_elem(body, ele){
  var i = list.length-1;
  while(i >= 0){  
    var ele = document.createElement("li");
    ele.name="elements"; ele.innerHTML=list[i];
    body.appendChild(ele);
    i--;
  }
}

function add_elem(body, ele){
  i = list.length-1;
  var ele = document.createElement("li");
  ele.name="elements"; ele.innerHTML=list[i];
  body.insertBefore(ele, body.childNodes[0]);
}