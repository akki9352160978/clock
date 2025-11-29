<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #202020;
            color: #00ffea;
            font-family: 'Courier New', monospace;
        }

        #clock {
            font-size: 80px;
            letter-spacing: 4px;
        }
    </style>
</head>
<body>

    <div id="clock">00:00:00</div>

    <script>
        function updateClock() {
            const now = new Date();

            let hours = String(now.getHours()).padStart(2, "0");
            let minutes = String(now.getMinutes()).padStart(2, "0");
            let seconds = String(now.getSeconds()).padStart(2, "0");

            document.getElementById("clock").textContent =
                `${hours}:${minutes}:${seconds}`;
        }

        // Run once immediately, then every second
        updateClock();
        setInterval(updateClock, 1000);
    </script>

</body>
</html>

