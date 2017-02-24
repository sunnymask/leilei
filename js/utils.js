window.utils = {};
window.utils.captureMouse = function(element) {
	var mouse = {
		x: 0,
		y: 0
	};
	element.addEventListener('mousemove',function(event) {
		var x,y;
		if (event.pageX || event.pageY) {
			x = event.pageX;
			y = event.pageY;
		}else {
			x = event.clientX + document.body.scrollLeft + documentElement.scrollLeft;
			x = event.clientY + document.body.scrollTop + documentElement.scrollTop;
		};

		x -= element.offsetLeft;
		y -= element.offsetTop;
		mouse.x = x;
		mouse.y = y;
	},false);
	return mouse;
};

window.utils.captureTouch = function(element) {
	var touch = {
		x: null,
		y: null,
		isPressed: false,
		event: null
	};
	var body_scrollLeft = document.body.scrollLeft,
		element_scrollLeft = document.documentElement.scrollLeft,
		body_scrollTop = document.body.scrollTop,
		element_scrollTop = document.documentElement.scrollTop,
		offsetLeft = element.offsetLeft,
		offsetTop = element.offsetTop;

	element.addEventListener('touchstart',function(event) {
		touch.isPressed = true;
		touch.event = event;
	},false);

	element.addEventListener('touchend',function(event) {
		touch.isPressed = false;
		touch.x = null;
		touch.y = null;
		touch.event = event;
	},false);

	element.addEventListener('touchmove',function(event) {
		var x, y,
			touch_event = event.touches[0];
		if (touch_event.pageX || touch_event.pageY) {
			x = touch_event.pageX;
			y = touch_event.pageY;
		}else {
			x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
			y = touch_event.clientY + body_scrollTop + element_scrollTop;
		};
		x -= offsetLeft;
		y -+ offsetTop;
		touch.x = x;
		touch.y = y;
		touch.event = event;	
	},false);
	return touch;
};