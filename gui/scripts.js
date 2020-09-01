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
var test_listener = new ROSLIB.Topic({
	ros : ros,
	name : "/chatter",
	messageType : 'std_msgs/String'
});

function display() {
	var txt = new ROSLIB.Message({
		data: "My name is Doan!"
	});
	test_listener.publish(txt);
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

function add4and5() {
	var request = new ROSLIB.ServiceRequest({
		a : 4,
		b : 5
	});

addTwoIntsClient.callService(request, function(result) {
	document.getElementById("msg").innerHTML = result.sum;
});
}

function add2and3() {
	var request = new ROSLIB.ServiceRequest({
		a : 2,
		b : 3
	});

addTwoIntsClient.callService(request, function(result) {
	document.getElementById("msg").innerHTML = result.sum;
});
}

function add3and4() {
	var request = new ROSLIB.ServiceRequest({
		a : 3,
		b : 4
	});

addTwoIntsClient.callService(request, function(result) {
	document.getElementById("msg").innerHTML = result.sum;
});
}
