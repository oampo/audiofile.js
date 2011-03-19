window.onload = function() {
    function printInfo(decoded) {
        console.log(decoded.channels.length, 'channels');
        console.log(decoded.length, 'samples');
        console.log('Sample rate:', decoded.sampleRate);
        console.log('Bit depth:', decoded.bitDepth);
        console.log('Ten random samples:');
        for (var i = 0; i < 10; i++) {
            var channel = Math.floor(Math.random() * decoded.channels.length);
            var index = Math.floor(Math.random() * decoded.length);
            console.log(decoded.channels[channel][index]);
        }
    }

    // Load AIFF Synchronously
    console.log('Loading AIFF');
    var request = new AudioFileRequest('audio/WilhelmScream.aiff', false);
    request.onSuccess = printInfo;
    request.send();

    // Load WAV Asynchronously
    console.log('Loading WAV');
    var request = new AudioFileRequest('audio/WilhelmScream.wav');
    request.onSuccess = printInfo;
    request.send();
};


