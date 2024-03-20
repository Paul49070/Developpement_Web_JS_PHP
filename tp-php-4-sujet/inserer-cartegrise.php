<!DOCTYPE html >
<html>
<head>
<meta charset="UTF-8" />
<title>Saisissez les caractéristiques du modèle</title>
</head>
<body>
	<form action="<?php echo $_SERVER['PHP_SELF'];?>" name="form1"
		method="post" enctype="application/x-www-form-urlencoded">
		<fieldset>
			<legend>
				<b>Enregistrement d'un véhicule</b>
			</legend>
			<table>
				<tr>
					<td colspan="2"><b>Propriétaire</b></td>
				</tr>
<?php require_once ("select-proprietaire.php");?>
				<tr>
					<td colspan="2"><b>Voiture</b></td>
				</tr>
<?php require_once ("select-voiture.php");?>
				<tr>
					<td colspan="2"><b>Carte grise</b></td>
				</tr>
<?php require_once ("input-cartegrise.php");?>
				<tr>
					<td><input type="reset" value="Effacer" /></td>
					<td><input type="submit" name="enreg" value="ENREGISTRER"/></td>
				</tr>
			</table>
		</fieldset>
	</form>
<?php
	try {

		if(isset($_POST["proprietaire"]) && isset($_POST["voiture"]) && isset($_POST["datecarte"])){
			$id_pers = $_POST["proprietaire"];
			$immat = $_POST["voiture"];
			$datecarte = $_POST["datecarte"];

			$objdb = connexpdo("voitures");
			$qry = "INSERT INTO cartegrise (id_pers, immat, datecarte) VALUES(:id_pers, :immat, :datecarte)";
			$qryResult = $objdb->prepare($qry);
			$data=array(
				array(":id_pers" => $id_pers, ":immat" => $immat, ":datecarte" => $datecarte)
			);

			$qryResult->execute($data[0]);
		}
	} 
	
	catch (PDOException $e) {
		displayException($e);
	}
?>
 </body>
</html>