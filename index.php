<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Youtube Video Downloader</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/sweetalert2.css">
    <link rel="stylesheet" href="assets/css/bootstrap-min.css">
    <script src="assets/js/jquery-3.6.0.min.js"></script>
</head>
<body>
   <div class="loader"></div>
   <div class="upload-wrapper">
      <header>
         <label for="inputTextFile">PLEASE INPUT TEXT FILE:</label>
         <input type="file" accept=".txt" class="form-control mt-3" id="inputTextFile">
      </header>
      <textarea rows="10" id="show-text" readonly hidden></textarea>
         <label for="urlTextArea">OR</label>
         <textarea rows="10" class="form-control mt-3" id="urlTextArea" placeholder="Example:&#10;https://www.youtube.com/watch?v=videoid&#10;https://www.youtube.com/watch?v=videoid&#10;https://www.youtube.com/watch?v=videoid&#10;..."></textarea>
         <button type="button" id="dlBtn" class="btn btn-primary mt-2">DOWNLOAD</button>
   </div>

   <div class="videos">
      <div class="video-wrapper">
            <h3 id="indicator"></h3>
         <div class="video-container">
         </div>
         <div class="video-info">
            <iframe src="" id="download-frame" frameborder="0"></iframe>
         </div>
      </div>
   </div>
   <script src="assets/js/sweetalert.min.js"></script>
   <script src="assets/js/script.js"></script>
</body>
</html>