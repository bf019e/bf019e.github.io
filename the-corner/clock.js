function updateClock() {
         const now = new Date();
           
//#24h Format
/*let hours = now.getHours().toString().padStart(2, '0'); */

//#12h Format
	let hours = now.getHours();
		hours = hours % 12;
		hours = hours ? hours : 12;
		hours = hours.toString().padStart(2, '0');

        let minutes = now.getMinutes().toString().padStart(2, '0');
        let seconds = now.getSeconds().toString().padStart(2, '0');
	const ampm = now.getHours() >= 12 ? "PM" : "AM";

         document.getElementById('h1').src = "resources/clock/" + hours[0] + '.gif';
         document.getElementById('h2').src = "resources/clock/" + hours[1] + '.gif';
            
         document.getElementById('m1').src = "resources/clock/" + minutes[0] + '.gif';
         document.getElementById('m2').src = "resources/clock/" + minutes[1] + '.gif';
	/*         
         document.getElementById('s1').src = "resources/clock/" + seconds[0] + '.gif';
         document.getElementById('s2').src = "resources/clock/" + seconds[1] + '.gif';
	document.getElementById("ampm").textContent = ampm;
	*/
	}
	
	//Update Every Second (If Seconds Are Uncommented)
        updateClock();
        setInterval(updateClock, 1000);

	//Update Every Minute (if seconds are commented)
	/*
	updateClock();
	setInterval(updateClock, 60000);
	*/
