<html>
    <p>
	<?php
	$array=array('a','b','c','d','e');
	array_push($array,'s');
	sort($array);
	$length=count($array)-1;
	$numnum=$array[rand(0,$length)];
	$numnum=strtoupper($numnum);
	print $numnum;
	?>
	</p>
</html>
