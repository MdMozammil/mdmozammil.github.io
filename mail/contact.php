<?php
//index.php

//$message = '';
// $header("Location:Thank-you.html");


function clean_text($string)
{
    $string = trim($string);
    $string = stripslashes($string);
    $string = htmlspecialchars($string);
    return $string;
}

if(isset($_POST["submit"]))
{
//    $open_positions = '';
//    foreach($_POST["$open_positions"] as $row)
//    {
//        $open_positions .= $row . ', ';
//    }
//    $open_positions = substr($open_positions, 0, -2);
//    $path = 'upload/' . $_FILES["resume"]["name"];
//    move_uploaded_file($_FILES["resume"]["tmp_name"], $path);
    $message = '
		<h3 align="center">Inquiry Details</h3>
		<table border="1" width="100%" cellpadding="5" cellspacing="5">
			<tr>
				<td width="30%">Name</td>
				<td width="70%">'.$_POST["name"].'</td>
			</tr>
			
			<tr>
				<td width="30%">Email Address</td>
				<td width="70%">'.$_POST["email"].'</td>
			</tr>
			
			
			<tr>
				<td width="30%">Phone</td>
				<td width="70%">'.$_POST["phone"].'</td>
			</tr>
		
		
			<tr>
				<td width="30%">Message</td>
				<td width="70%">'.$_POST["message"].'</td>
			</tr>
			
			
		</table>
	';

    require("class.phpmailer.php");

    $mail = new PHPMailer();

    $mail->IsSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;
    $mail->Username = "mozammil.babu@gmail.com";
    $mail->Password = "hakam@143";

    $mail->From = "mozammil.babu@gmail.com";
    $mail->FromName = "Inquiry Details";
    $mail->AddAddress("neeraj@thetreepie.com");
    $mail->AddAddress("nkneeraj99@gmail.com");
//$mail->AddReplyTo("mail@mail.com");

    $mail->IsHTML(true);							//Sets message type to HTML
    $mail->AddAttachment($path);					//Adds an attachment from a path on the filesystem
    $mail->Subject = $_POST["name"];				//Sets the Subject of the message
    $mail->Body = $message;							//An HTML or plain text message body
    if($mail->Send())								//Send an Email. Return true on success or false on error
    {
//		$message = '<div class="alert alert-success">Application Successfully Submitted</div>';
        header("Location:Thankyou.html");


    }
    else
    {
        $message = '<div class="alert alert-danger">There is an Error</div>';
    }
}

?>





