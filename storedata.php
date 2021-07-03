<?php
ob_start(); 
if(isset($_POST['enquiryFullName'])){
      $server = "localhost";
   $username = "kgkrebcm_kgkrealty";
   $password = "C,Ls}xU]HWx$";

   $con = mysqli_connect($server, $username, $password);

   if(!$con){
       die("connection failed");
   }
   echo "successfully connected";
$name = $_POST['enquiryFullName'];
$email = $_POST['enquiryEmail'];
$phone = $_POST['enquiryPhoneNumber'];
$sql = "INSERT INTO `kgkrebcm_kgkrealty`.`navnilayquiry` (`quiryname`, `quiryemail`, `quiryphone`) VALUES ('$name', '$email', '$phone')";


if($con->query($sql) == true){
 header("Location: https://kgkrealty.com/jaipurproperty/navnilaypro/thanku.php");
  exit();
}
else{
 echo "error: $sql <br> $con->error";
}
$con->close();
}
if(isset($_POST['visitFullName'])){
     $server = "localhost";
   $username = "kgkrebcm_kgkrealty";
   $password = "C,Ls}xU]HWx$";

   $con = mysqli_connect($server, $username, $password);

   if(!$con){
       die("connection failed");
   }
   echo "successfully connected";
$name = $_POST['visitFullName'];
$email = $_POST['visitEmail'];
$phone = $_POST['visitPhoneNumber'];
$sql = "INSERT INTO `kgkrebcm_kgkrealty`.`navnilayvisit` (`visitname`, `visitemail`, `visitphone`) VALUES ('$name', '$email', '$phone')";


if($con->query($sql) == true){
 header("Location: https://kgkrealty.com/jaipurproperty/navnilaypro/thanku.php");
  exit();
}
else{
 echo "error: $sql <br> $con->error";
}
$con->close();
}
ob_end_flush();
?> 