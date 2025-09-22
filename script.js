//your JS code here. If required.
const square = document.querySelectorAll('.square');
const lavender = "#E6E6FA";
const coffee = "#6F4E37";

square.forEach((box)=>{
box.add.EventListener('mouseover',
()=>{
	box.forEach((otherBox)=>,()=>{
		if(otherBox !==box){
otherBox.style.backgroundColor=cofee;
		}
	});
});
box.addEventListener('mouseout',()=>{
	square.forEach((s)=>{
		s.style.backgroundColor=lavender;
	});
});
});