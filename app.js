const myHeading = document.getElementById('myHeading');
const paragraph = document.getElementById('paragraph');
const myButton = document.getElementById('myButton');
const myText = document.getElementById('myTextInput');








myButton.addEventListener('click', () => {
	
	let color = myText.value.toLowerCase();
	myHeading.style.color = color; 
	paragraph.style.backgroundColor = color; 
	if(paragraph.style.backgroundColor === 'white'){
		myHeading.style.color = 'black'; 
		paragraph.style.color = 'black'; 
	}
	else{
		paragraph.style.color = 'white';
	}
	
	/*if(!myHeading.value){
		myHeading.style.color = 'red';
		myHeading.value = true; 
	}
	else{
		myHeading.style.color = 'black';
		myHeading.value = false; 
	}*/
});






