var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
var myList=(
    <ul>
    	<li>Thing</li>
      <li>Thing2</li>
      <li>Thing3</li>
      <li>Thing4</li>
    </ul>
);

ReactDOM.render(
  myList,
  document.GetElementById('app')
);
