	<script>
        	$(function () {
				$('ul#menu_principal li a:eq(<?= $op; ?>)').addClass('active');	
			});
        </script>
	<div class="container">
		<nav>
			<ul id="menu_principal" class="centrado-flex">
				<li><a href="index.php">Opcion 1</a></li>
				<li><a href="#">Opcion 2</a></li>
				<li><a href="#">Opcion 3</a></li>
				<li><a href="#">Opcion 4</a></li>
				<li><a href="#">Opcion 5</a></li>
			</ul>
		</nav>
