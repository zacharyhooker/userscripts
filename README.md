# userscripts

### FreeMusicArchiveSeekPlayer
The Free Music Archive is one of my favorite music streaming sites -- I constantly find intriguing tracks. They support the HTML5 audio object as well as Flash (swf).

FMA sends a `Range` header when streaming from their site -- Chrome's implementation of the Audio element does not allow seeking when this header is passed. This script loads wavesurfer.js and hooks into the site's playlist and allows users to seek (as well as view a waveform).
#### TODO: 
* Add pause and incremental seek (15 seconds).
* Equalizer
