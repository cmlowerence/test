<?php
    $conn = new mysqli('localhost','root','','web_dev');
    if ($conn->connect_error){
        echo ("Connection failed: ". $conn->connect_error);
        exit();
    }

    // Checking Weather username already exists or not
    if (isset($_POST['username_check'])){
        $username = $_POST['username'];
        $query = "SELECT * FROM users WHERE Username = '$username'";
        $result = $conn->query($query);
        if ($result->num_rows>1){
            echo "User Already Exist";
        }else{
            echo "Username Available";
        }
        exit();
    }
    
    // Checking Email used Already Exist or not
    if (isset($_POST['email_check'])){
        $email = $_POST['email'];
        $query = "SELECT * FROM users WHERE Email = '$email'";
        $result = $conn->query($query);
        if ($result->num_rows>1){
            echo "Email Already Exist";
        }else{
            echo "Email Available";
        }
        exit();
    }

    if (isset($_POST['save'])){
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $query = "SELECT * FROM users WHERE Username = '$username'";
        $result = $conn->query($query);
        if ($result->num_rows>0){
            echo 'User exist';
            exit();
        }else{
            $password = md5($password);
            $query = "INSERT INTO users (Username, Email, Password) VALUES ('$username','$email','$password')";
            $result = $conn->query($query);
            echo "User added";
        }
    }
?>