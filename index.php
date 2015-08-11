<?php 
	$opc = (int)(@$_GET['opc']);
	//$opc = 1;

	switch ($opc) {
		default : // pagina principal
			$page = "inicio.php";
				
		break;
		case 1 : // pagina principal
			$page = "inicio.php";

		break;
		
		case 2 : // pagina 2 
			$page = "pagina2.php";
		break;
	}
	
	//require_once 'fn/fn_load.php';	
	require_once "header.php";
	include_once $page;
	require_once "footer.php"
?>