<?php
	$SITE_TITLE = 'Vesta';
	$SITE_DESCR = '';

	if ( isset($_POST) ) {
		$name = htmlspecialchars(trim($_POST['name']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$number = htmlspecialchars(trim($_POST['number']));
		$time = htmlspecialchars(trim($_POST['time']));
		$subject = $_POST['subject'] ? htmlspecialchars(trim($_POST['subject'])) : '';
		$comment = isset($_POST['comment']) ? htmlspecialchars(trim($_POST['comment'])) : '';
		$question = isset($_POST['question']) ? htmlspecialchars(trim($_POST['question'])) : '';
		$to = 'tav222.vesta@yandex.ru';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1>";
		$data .= 'Имя: '.$name."<br>";
		$data .= 'Телефон: '.$phone."<br>";


		if ( $number != '' ) {
			$data .= 'Общая площадь: ' . $number ."<br>";
		}

		if ( $time != '' ) {
			$data .= 'Время дзвонка: ' . $time ."<br>";
		}


		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();
?>