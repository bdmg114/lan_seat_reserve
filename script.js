var buttons = document.querySelectorAll("td button");
[].forEach.call(buttons,function(col){ 
	col.addEventListener("click",function(){
        alert(col.innerHTML);
    }); 
}); 