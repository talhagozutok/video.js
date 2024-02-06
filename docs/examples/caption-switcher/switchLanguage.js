window.addEventListener("load", () => {
  var player = videojs.getAllPlayers()[0];

  player.ready(function () {
    tracks = player.textTracks().tracks_;
    englishTrack = tracks.filter((track) => track.kind == "captions" && track.language == "en")[0];
    swedishTrack = tracks.filter((track) => track.kind == "captions" && track.language == "sv")[0];

    if (!englishTrack || !swedishTrack) {
      console.error("One or both tracks not found.");
      return;
    }

    document.addEventListener("keydown", (event) => {
      // if "c" is pressed on keyboard
      if (event.key == "c") {
        // if current language is english
        if (englishTrack.mode == "showing") {
          // switch to swedish language
          englishTrack.mode = "hidden";
          swedishTrack.mode = "showing";
        } else {
          // switch to english language
          swedishTrack.mode = "hidden";
          englishTrack.mode = "showing";
        }
      }
    });
  });
});
