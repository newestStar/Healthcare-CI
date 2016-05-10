<?php
require_once '../../core/init.php';
chdir(dirname(__FILE__));
?>



<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<title>Patient Health</title>
	<?php
		include '../includes/html/head.html';
	?>
	<link rel="stylesheet" type="text/css" href="../../css/blue-buttons-list.css">
</head>
<body>
	<div id="container">
		<?php
			include '../includes/php/header.php';
		?>


		<?php
        if(Session::exists('home')) {
            echo '<p>' . Session::flash('home'). '</p>';
        }
        $user = new User(); //Current
        if($user->isLoggedIn()) {
        ?>


		<div class="row">
	        <h1>Body Measurements</h1>
	        <p>

			</p>
			<ul id="buttons">
				<li>
					<button type="button" class="services" onclick="">
						Body Fat Percentage
					</button>
				</li>
				<li>
					<button type="button" class="services" onclick="">
						Body Mass Index
					</button>
				</li>
				<li>
					<button type="button" class="services" onclick="">
						Height
					</button>
				</li>
				<li>
					<button type="button" class="services" onclick="">
						Lean Body Mass
					</button>
				</li>
				<li>
					<button type="button" class="services" onclick="">
						Weight
					</button>
				</li>

			</ul>
      	</div>


      	<?php
        } else {
        ?>
        <div class="row">
        	<h1>
	        	Error
	        </h1>
        	<p>
        		You are currently not Signed In!<br>
        		Please <a href='../../sign.php'>Sign In</a> or <a href='../../register.php'>Register</a>
        	</p>
        </div>
        <?php
        }
        ?>

	</div>

	<script src="../../js/foundation.min.js"></script>
    <script>
    	$(document).foundation();
    </script>
</body>
</html>
