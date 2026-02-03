<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Happy 3rd Monthsary ❤️</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

<!-- Background Music (plays on open) -->
<audio id="bg-music" loop>
  <source src="music.mp3" type="audio/mpeg">
</audio>

<div class="container">
  <!-- Envelope (CLICK TO OPEN) -->
  <div class="envelope" id="envelope">

    <!-- Back of envelope -->
    <div class="envelope-back"></div>

    <!-- Card inside -->
    <div class="card-wrapper">
      <div class="card">
        <h1>3rd<br><span>Monthsary</span></h1>

        <!-- TYPEWRITER TARGET -->
        <div
          class="card-body"
          id="typed-text"
          data-text="
Three months may not seem like a long time, but to me, it already feels like we’ve built something really special.

In just a short time, you’ve become someone I look forward to every day someone who makes my ordinary moments feel brighter and my heavy days feel lighter.

Thank you for being patient with me, for understanding me, and for choosing me even when things aren’t perfect. I love how you care so deeply, and how you make me feel safe just by being you.

Being with you has taught me what it means to love gently, honestly, and wholeheartedly.

These past three months have given me so many memories I’ll always treasure, and they’ve made me excited for everything that’s still ahead of us.

If this is just the beginning, then I can’t wait to see how much more we’ll grow together, I choose you now and forever.❤️
"
        ></div>
      </div>
    </div>

    <!-- Front of envelope -->
    <div class="envelope-front"></div>

    <!-- Flap -->
    <div class="envelope-flap"></div>

    <!-- Heart seal -->
    <div class="heart-seal"></div>

  </div>
</div>

<!-- Floating hearts -->
<div id="hearts"></div>

<script src="script.js"></script>
</body>
</html>
