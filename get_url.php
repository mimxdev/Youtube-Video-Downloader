<?php

require ('assets/vendor/autoload.php');

use YouTube\YouTubeDownloader;
use YouTube\Exception\YouTubeException;

$youtube = new YouTubeDownloader();
// $_POST['url'] = 'https://youtu.be/NoyTldBpqOU';
if(isset($_POST['url'])){
    $ytUrl = $_POST['url'];

    try {
        $downloadOptions = $youtube->getDownloadLinks($ytUrl);

        if ($downloadOptions->getAllFormats()) {
            // echo $downloadOptions->getFirstCombinedFormat()->url;
            $download_link = array_column($downloadOptions->getAllFormats(), 'url')[2];
            echo $download_link;
        } else {
            echo 0;
        }

    } catch (YouTubeException $e) {
        // echo 'Something went wrong: ' . $e->getMessage();
        echo 0;
    }
}
?>
