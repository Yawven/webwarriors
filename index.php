<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>LOGIN</title>
	<link rel="stylesheet" href="logincss.css">
	<script src="login.js"></script>
</head>

<body>

   <div class="login-page">
        <div class="form">
            <form class="login-form ">
                <h2>LOG IN TO YOUR ACCOUNT</h2>
                <input type="text" required placeholder="Username" id="user" autocomplete="off" />
                <input oninput="return formvalid()" type="password" required placeholder="Password" id="pass" autocomplete="off" />
                <img src="https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"
                    onclick="show()" id="showimg">
                <span id="vaild-pass"></span>
                <button type="submit" onclick="validation()">SIGN IN</button>
            </form>
        </div>
    </div>
</body>
</html>


