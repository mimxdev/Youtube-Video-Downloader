$('.loader').hide();

$(document).ready(function () {
  $('#urlTextArea').on('paste', function () {
    setTimeout(function () {
      $('#urlTextArea').prop('readonly', true);
      $('#urlTextArea').blur();
      $('.loader').show();
      checkTextarea();
    }, 2000);
  });
});

function checkTextarea() {
  let text = $('#urlTextArea').val();
  let url = text.split('\n');
  let n = 0;
  let count = 1;

  while (n < url.length) {
    let videoId = youtube_parser(url[n]);
    let directLink = getDownloadLink(url[n]) + '&title=' + getTitle(videoId);

    // $('#download-frame').attr('src', directLink);
    if (url[n] != '') {
      setTimeout(function () {
        $('.video-container').append(
          '<iframe src="' +
            directLink +
            '" frameborder="0" scrolling="no" hidden></iframe>'
        );
      }, 2000);
    }

    if (count == url.length) {
      $('#urlTextArea').val(null);
      $('#urlTextArea').prop('readonly', false);
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
  let downloadLink = null;
  $.ajax({
    async: false,
    url: 'marlon_getUrl.php',
    data: { url: url },
    method: 'POST',
    success: function (data) {
      downloadLink = data;
    },
  });
  return downloadLink;
}
