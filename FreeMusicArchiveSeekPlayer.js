function getWaveSurfer(callback) {
  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.4.0/wavesurfer.min.js', function() {
    var $div = $('<div />', {
      id: 'waveform',
      css: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '297px',
        height: '50px'
      }
    }).appendTo('body');

    var wavesurfer = WaveSurfer.create({
      container: '#waveform'
    })

    callback(wavesurfer)
  })
}



getWaveSurfer(function(wavesurfer) {
  var playbtn = $('.playbtn')
  playbtn.unbind('click')
  playbtn.bind("click", function(e) {
    e.preventDefault();
    var track = $(this).parents(".play-item")
    var tid = null
    if (track.data("tid") === undefined) {
      var matches = track.get(0).className.match(/\btid-(\S+)\b/);
      if (matches !== null) {
        track.data("tid", matches[1])
      }
      tid = track.data("tid")
    } else {
      tid = track.data("tid")
    }
    $('#wavesurfer').append('Loading!')
    $.ajax({
      url: 'http://freemusicarchive.org/services/track/single/' + tid + '.xml',
      dataType: 'xml',
      success: function(data) {
        jsdata = $.xml2json(data)
        wavesurfer.load(jsdata.download)
        wavesurfer.on('ready', wavesurfer.play.bind(wavesurfer))
      }
    })
  })
})