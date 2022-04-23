$('.loader').hide();
// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  function showFile() {
    var preview = document.getElementById('show-text');
    var file = document.querySelector('input[type=file]').files[0];

    var reader = new FileReader();

    var textFile = /text.*/;

    if (file.type.match(textFile)) {
      reader.onload = function (event) {
        preview.innerHTML = event.target.result;
      };
    }
    reader.readAsText(file);
  }
} else {
  Swal.fire({
    title: 'Not Supported!',
    icon: 'error',
    confirmButtonColor: '#4a69bd',
    confirmButtonText: 'OK',
  });
}

$(document).ready(function () {
  $('#inputTextFile').on('change', function () {
    if (isText(this.files[0])) {
      $('.loader').show();
      showFile();

      setTimeout(function () {
        checkTextarea(true);
      }, 2000);
    } else {
      Swal.fire({
        title: 'Invalid File Type!',
        text: 'Please select a text file only',
        icon: 'error',
        confirmButtonColor: '#4a69bd',
        confirmButtonText: 'OK',
      });
      $('#inputTextFile').val(null);
    }
  });

  $('#dlBtn').on('click', function () {
    if ($('#urlTextArea').val() == '') {
      Swal.fire({
        title: 'ERROR',
        text: 'URL field is empty',
        icon: 'error',
        confirmButtonColor: '#4a69bd',
        confirmButtonText: 'OK',
      });
    } else {
      $('.loader').show();

      setTimeout(function () {
        checkTextarea(false);
      }, 2000);
    }
  });
});

function checkTextarea(file) {
  let text = '';
  if (file) {
    text = $('#show-text').val();
  } else {
    text = $('#urlTextArea').val();
  }
  let url = text.split('\n');
  let n = 0;
  let count = 1;
  while (n < url.length) {
    let videoId = youtube_parser(url[n]);

    let directLink = getDownloadLink(url[n]) + '&title=' + getTitle(videoId);
    $('#download-frame').attr('src', directLink);
    console.log(count + '/' + url.length);

    if (count == url.length) {
      $('#inputTextFile').val(null);
      $('#urlTextArea').val(null);
      $('.loader').fadeOut(300);
    }

    n++;
    count++;
  }
}

function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

function getTitle(videoId) {
  let title = null;
  $.ajax({
    async: false,
    url:
      'https://noembed.com/embed?url=https://www.youtube.com/watch?v=' +
      videoId,
    dataType: 'json',
    success: function (data) {
      title = data.title;
    },
  });
  return title;
}

function getDownloadLink(url) {
  let downloadLInk = null;
  $.ajax({
    async: false,
    url: 'marlon_getUrl.php',
    data: { url: url },
    method: 'POST',
    success: function (data) {
      downloadLInk = data;
    },
  });
  return downloadLInk;
}

function isText(file) {
  return file['type'].split('/')[0] == 'text';
}
