/*let counter = document.querySelector('.counter');

let count = 1;

setInterval(() =>{
	if(count < 75){

		count++;
	counter.innerText = count;

	} 
	
},100)
*/

 let counters = document.querySelectorAll('.counter');
 let time = 5000;

 counters.forEach(counter => {

let updateCount = () =>{
	let target = +counter.getAttribute('data_target');
 		let count = +counter.innerText;

 		let increment = target / time; 

 		if(count < target){
 			counter.innerText = Math.ceil(count + increment);
 			setTimeout(updateCount, 1);
 		} else {
 			counter.innerText = target;
 		}
 	};
 	updateCount();

 });


let healthCondition = document.querySelector('.health');

setTimeout(() => {
	healthCondition.innerText = 'YoU aRe GooD Developer!'
},2000);

console.log(counters);

 //video area

 var videoPlayer = document.getElementById("videoPlayer");
        	var myVideo = document.getElementById("myVideo"); 


        	 function stopVideo(){

        	 	videoPlayer.style.display = "none";

        	 }

                   
              function playVideo(file){

              	myVideo.src = file;
              	videoPlayer.style.display = "block"
              }
