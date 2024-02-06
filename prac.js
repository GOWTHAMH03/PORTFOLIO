<html>
<head>
    <title>my first JavaScript</title>
    <script>
    function text()
    {
         document.getElementById("script").innerHTML= "This text has been written inside the JavaScript."
    }
    </script>
</head>
<body>
    <p id="script">this is the old text</p>
    <button type="button" onclick=" text() ">click this button to use JavaScript.</button>
</body>
</html>