var p1=<p id="large">foo</p>;

var p2=<p id="small">bar</p>;

var myDiv= (
	<div>
    <h1>Hello world</h1>;
  </div>
);

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <span id="container"></span>
	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html>

var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));
