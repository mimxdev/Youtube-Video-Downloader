<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Youtube Downloader</title>
    <link rel="stylesheet" href="assets/css/marlon_styles.css">
    <link rel="stylesheet" href="assets/css/sweetalert2.css">
    <link rel="stylesheet" href="assets/css/bootstrap-min.css">
    <script src="assets/js/jquery-3.6.0.min.js"></script>
</head>
<body>
   <div class="loader"></div>
   <header>
      <h3>YOUTUBE DOWNLOADER</h3>
   </header>
   <div class="upload-wrapper">
      <label for="urlTextArea"><h5>YT URL</h5></label>
      <textarea rows="5" class="form-control mt-3" id="urlTextArea" placeholder="PASTE HERE"></textarea>
   </div>

   <div class="videos">
      <div class="video-wrapper">
         <div class="video-container">
         </div>
      </div>
   </div>
   <script src="assets/js/sweetalert.min.js"></script>
   <script src="assets/js/marlon_download.js"></script>
</body>
</html>
