audiofile.js
============
audiofile.js is a small JavaScript library for loading WAV and AIFF files into Float32Arrays.  It ignores most of the cruel and unusual parts of the WAV and AIFF specifications, and gets straight to the good stuff.  Loading your audio files for instance!

How do I use it?
----------------
To load the file 'test.wav' using an asynchronous XMLHttpRequest

    var request = new AudioFileRequest('test.wav');
    request.onSuccess = new function(decoded) {
        // Use the decoded data
    }
    request.onFailure = new function() {
        // Something went wrong
    }
    request.send();

The decoded object contains the following attributes:

* channels - An array of Float32Arrays containing the samples for each channel of the audio file, in the range -1 to +1
* length - The length in samples of the audio file (=== channels[n].length)
* sampleRate - The sample rate of the audio file
* bitDepth - The bit depth of the audio file

An example showing how the decoded object is used can be found [here](https://github.com/oampo/audiofile.js/blob/master/example/js/audiofile_example.js).

Synchronous requests can be made by passing 'false' as a second argument to AudioFileRequest.

If the audio data is loaded using a different mechanism, it can be decoded independently using the WAVDecoder and AIFFDecoder classes.

For example, the following code will decode a string containing WAV file data:

    var decoder = new WAVDecoder();
    var decoded = decoder.decode(data);
