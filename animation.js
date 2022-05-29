var i = 0; 
var txt = `
A software engineer that has experience working in the automotive and 
financial mortgage industry building web applications. Have experience using
frameworks such as Angular for the front-end and C# .NET or Java Spring
for back-end. Small experience in developing CI/CD pipeline using CircleCI.
`;

var speed = 50; 

function typeWriter(){
	if(i < txt.length){
		document.getElementById("description").innerHTML += txt.charAt(i);
		++i;
		setTimeout(typeWriter,speed);
	}
}

