// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//
//document.addEventListener("deviceready", onDeviceReady, false);


//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}


// onSuccess Geolocation
function onSuccess(position) {
	document.getElementById('mapmarker').innerHTML = "<iframe src=\"https:\/\/maps.google.com\/maps?q="+position.coords.latitude+","+position.coords.longitude+"&hl=es;z=14&amp;output=embed\"frameborder=\"0\" style=\"height:100%; width:100%\"><\/iframe>";
}

// hides and clears the map
function hideMe(){
	document.getElementById('mapmarker').innerHTML = "";
}

// onError Callback receives a PositionError object
function onError(error) {
	alert('code: '    + error.code    + '\n' +
		'message: ' + error.message + '\n');
}

