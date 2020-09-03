var ros = new ROSLIB.Ros({
	url : 'ws://localhost:9090'
});

ros.on('connection', function() {
	document.getElementById("status").innerHTML = "Connected";
});

ros.on('error', function(error) {

	document.getElementById("status").innerHTML = "Error";
});

ros.on('close', function() {
	document.getElementById("status").innerHTML = "Closed";
});

// Publishing a Topic

var test_button = new ROSLIB.Topic({
	ros : ros,
	name : "/button",
	messageType : 'std_msgs/Byte'
});

function display1() {
	var txt = new ROSLIB.Message({
		data: 1
	});
	test_button.publish(txt);
}

function display2() {
	var txt = new ROSLIB.Message({
		data: 2
	});
	test_button.publish(txt);
}

function display3() {
	var txt = new ROSLIB.Message({
		data: 3
	});
	test_button.publish(txt);
}

function display4() {
	var txt = new ROSLIB.Message({
		data: 4
	});
	test_button.publish(txt);
}

// Calling a service
var addTwoIntsClient = new ROSLIB.Service({
	ros : ros,
	name : '/add_two_ints',
	serviceType : 'beginner_tutorials/AddTwoInts'
});


function add1and2() {
	var request = new ROSLIB.ServiceRequest({
		a : 1,
		b : 2
	});

	addTwoIntsClient.callService(request, function(result) {
		document.getElementById("msg").innerHTML = result.sum;
	});
}

