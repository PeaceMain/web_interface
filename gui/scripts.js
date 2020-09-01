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

function display1() {
	var txt = new ROSLIB.Message({
		data: "Bàn 1 đang gọi"
	});
	test_listener.publish(txt);
}

function display2() {
	var txt = new ROSLIB.Message({
		data: "Bàn 2 đang gọi"
	});
	test_listener.publish(txt);
}

function display3() {
	var txt = new ROSLIB.Message({
		data: "Bàn 3 đang gọi"
	});
	test_listener.publish(txt);
}

function display4() {
	var txt = new ROSLIB.Message({
		data: "Bàn 4 đang gọi"
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

