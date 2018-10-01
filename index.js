let counter = 0;

function buttonClicked() {
	let btn = document.getElementById('click-me-btn');
	btn.innerText = 'You clicked me ' + (++counter).toString() + 'times!';
}