<?php
    include "./server.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1 class="heading">Registration</h1>
        <form id="registration_form" class="form">
            <div class="input_filed">
                <label for="username">Username:</label>
                <span class="input_area">
                    <input type="text" name="username" id="username" required placeholder="Username">
                    <span id="user_check"></span>
                </span>
            </div>
            <div class="input_filed">
                <label for="email">Email:</label>
                <span class="input_area">
                    <input type="email" name="email" id="email" required placeholder="Email">
                    <span id="email_check"></span>
                </span>
            </div>
            <div class="input_filed">
                <label for="username">Password:</label>
                <span class="input_area">
                    <div class="password_wrapper">
                        <input type="password" name="password" id="password" required placeholder="Password">
                        <span class="show_Password"><ion-icon name="" class="showPassword"></ion-icon></span>
                    </div>
                </span>
            </div>
            <div class="input_field">
                <button type="submit" id="register">Register</button>
            </div>
        </form>
    </div>
    <script src="script.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>

</html>