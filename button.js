<html>
    <head>

    </head>
    <body>

        <button id="redbtn"> Red</button>
        <button id="bluebtn"> blue</button>

        <script>
            let redbtn=document.getElementById("redbtn");
            redbtn.addEentListener("click",function() {
                document.body.style.backgroundColor="red"
                
            });
        </script>
    </body>
</html>