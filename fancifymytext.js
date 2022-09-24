function myFunction(){
	txt = document.getElementById('text');
	style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
	currentSize = parseFloat(style);
	txt.style.fontSize = (currentSize + 24) + 'pt';
}

var textarea = document.getElementById("text");
document.getElementsByName("fancyshmancy")[0].addEventListener("change",function(){
	textarea.style.fontWeight="bold";
	textarea.style.color="blue";
	textarea.style.textDecoration="underline";
	alert("Change style of the text area");
})

document.getElementsByName("fancyshmancy")[1].addEventListener("change",function(){
	textarea.style.fontWeight="normal";
	textarea.style.color="black";
	textarea.style.textDecoration="none";
	alert("Remove style of the text area");
})

function makeMoo(){
    textarea.style.textTransform="uppercase"
    let str=textarea.value.split(".");
    let str2=str.join("-Moo ");
    textarea.value=str2;
}