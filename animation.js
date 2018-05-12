var i = 0; 
var txt = `
A recent graduate from the University of Michigan Ann Arbor with a degree 
in Computer Science. Skilled in developing software ranging from mobile 
applications (Android) to web applications.
`;

var speed = 50; 

function typeWriter(){
	if(i < txt.length){
		document.getElementById("description").innerHTML += txt.charAt(i);
		++i;
		setTimeout(typeWriter,speed);
	}
}

