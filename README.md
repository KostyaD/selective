Selective: a styleable replacement for select
==============
Usage
--------------
Add link to JS file:

	<script src="js/jquery.selective.js"></script>
Add link to CSS file:

	<link rel="stylesheet" href="css/jquery.selective.css">
To initialize:

	//default settings
	$('select').selective();
	
	//custom settings
	$('select').selective({
		'speed': 1000
	});
Settings
--------------
key | default | description
----|------|----
speed | 100  | speed of animation
width | auto | width of element
