# web_interface

Giao tiếp giữa Webserver và ROS Kinetic.

Hình ảnh giao diện điều khiển:

<img src="demo.jpg" width="40%">

## Cài đặt:
Cài đặt ROS Bridge server:
> `sudo apt-get install ros-kinetic-rosbridge-server`

Clone repository này vào thư mục `catkin_ws/src`sau đó xây dựng catkin workspace.

## Chạy gói:

Mở ROS core nếu bạn chưa mở:
> `$ roscore`

Thực hiện giao tiếp giữa giao diện và ROS:
> `$ roslaunch web_interface web_interface.launch`

Tạo http server:

> `$ roscd web_interface`

> `$ cd gui`

> `$ python -m http.server`