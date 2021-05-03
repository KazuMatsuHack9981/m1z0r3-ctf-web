<html>
	<body>
		<h1>English or Japanese page</h1>
    <div>
      <ul>
        <li><a href="?lang=en.php">English page</a></li>
        <li><a href="?lang=ja.php">Japanese page</a></li>
      </ul>
		</div>
		<div>
		  <?php
      $lang = ['en.php', 'ja.php'];
				include('pages/' . (isset($_GET['lang']) ? str_replace('../', '', $_GET['lang']) : $lang[array_rand($lang)]));
			?>
		</div>
	</body>
</html>
