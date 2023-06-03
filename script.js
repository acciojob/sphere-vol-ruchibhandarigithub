function volume_sphere(event) {
            event.preventDefault(); // Prevent form submission

    //Write your code here
	let radiusInput = document.getElementById('radius');
	let volumeInput = document.getElementById('volume');
	let radius = parseFloat(radiusInput.value);
	let volume = (4/3)*Math.PI*Math.pow(radius,3);
	volumeInput.value = volume.toFixed(2);
	
  
  } 

  window.onload = function() {
  const myForm = document.getElementById('MyForm');
  myForm.onsubmit = volume_sphere;
  }