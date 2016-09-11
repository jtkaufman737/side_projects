<html>
    <p>
	<?php
	$array = array(3,4,4,4,3,2,5,6,7,8);
	sort($array);
	print join(",",$array);

	?>
	</p>
	<p>
	<?php
	rsort($array);
	print join(",",$array);
	?>
	</p>
</html>
