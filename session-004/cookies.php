<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>

  <script type="text/javascript">
  //---------------------------------------------------------------
  // Let's Use Javascript to Check Our Cookeis on the Front End
  //---------------------------------------------------------------
  console.log(document.cookie);
</script>

<script type="text/javascript">
    //---------------------------------------------------------------
    // Sample Helper Methods to Retrieve Cookies Using Javascript
    //---------------------------------------------------------------
    // function setCookie(cname, cvalue, exdays) {
    //   var d = new Date();
    //   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //   var expires = "expires="+d.toUTCString();
    //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // }

    // function getCookie(cname) {
    //   var name = cname + "=";
    //   var ca = document.cookie.split(';');
    //   for(var i = 0; i < ca.length; i++) {
    //     var c = ca[i];
    //     while (c.charAt(0) == ' ') {
    //       c = c.substring(1);
    //     }
    //     if (c.indexOf(name) == 0) {
    //       return c.substring(name.length, c.length);
    //     }
    //   }
    //   return "";
    // }

    // function checkCookie() {
    //   var user = getCookie("username");
    //   if (user != "") {
    //     alert("Welcome again " + user);
    //   } else {
    //     user = prompt("Please enter your name:", "");
    //     if (user != "" && user != null) {
    //       setCookie("username", user, 365);
    //     }
    //   }
    // }
  </script>
</body>
</html>
