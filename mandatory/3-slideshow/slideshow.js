// Write your code here
let images = [
    "https://images.unsplash.com/photo-1534803359379-964dadf6c290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1568307970720-a8c50b644a7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1573148164257-8a2b173be464?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1513451713350-dee890297c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1561389881-a5d8d5549588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1547955922-26be0c1600c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
];



document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("img").src = images[0];
    let counter = 0;
    let myTimer;
    let timeInterval = 5000;
    let direction = "off";

    function assignImage() {
        counter = counter < 0 ? images.length - 1 : counter % images.length;
        document.querySelector("img").src = images[counter];
    }

    	let autoBack = document.querySelector("#autoBack")
	autoBack.addEventListener("click", () => {
		clearInterval(myTimer);
		direction = "back";
		myTimer = setInterval(() => {
			counter--;
			assignImage();
		}, timeInterval);
	});

    let back = document.querySelector("#back")
	back.addEventListener("click", () => {
		clearInterval(myTimer);
		counter--;
		assignImage();
	});

    	let stop = document.querySelector("#stop")
	stop.addEventListener("click", () => {
		clearInterval(myTimer);	
	});

	let forward = document.querySelector("#forward")
	forward.addEventListener("click", () => {
		clearInterval(myTimer);
		counter++;
		assignImage();
	});

	let autoForward = document.querySelector("#autoForward")
	autoForward.addEventListener("click", () => {
		clearInterval(myTimer);
		direction = "forward";
		myTimer = setInterval(() => {
			counter++;
			assignImage();
		}, timeInterval);
	});

	let changeTime = document.querySelector("#uiButton")
	changeTime.addEventListener("click", () => {
		timeInterval = document.querySelector("#ui").value * 1000;
		clearInterval(myTimer);
		if (direction === "back") {
			myTimer = setInterval(() => {
				counter--;
				assignImage();
			}, timeInterval);
		} else if (direction === "forward") {
			myTimer = setInterval(() => {
				counter++;
				assignImage();
			}, timeInterval);
		}
	});
});