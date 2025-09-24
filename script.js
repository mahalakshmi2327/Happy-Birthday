const messages = [
  "Happiest Birthday Gulu Gulu!",
  "Today is your special day!",
  "Yeppovum edhae maari happy ah jolly ah fun pannittu iru.",
  "You are my all time favorite person.",
  "If I've ever done anything wrong, I'm truly sorry.",
  "You may forget me but I won't forget the memories we made",
  "Don't ever think I'll leave you,I already promised I wouldn't",
  "Don't worry I'm always here to irritate and make you angry",
  "bcoz unkitta dhana urimaiya poda mudium",
  "Don't think too hard.Go with a flow.Life has unexpected twist and turns",
  "Stay awesome always. Enjoy your day to the fullest!",
  "Wishing you endless happiness and love! and click ok button to watch video"
  
];

let step = 0;

function nextMessage() {
  const msg = document.getElementById("message");
  const box = document.getElementById("messageBox");

  step++;

  if (step < messages.length) {
    msg.textContent = messages[step];
  } else {
    // This is the correct place to add the code.
    // It will run only after the last message has been displayed.
    box.style.display = "none"; // Hide the message box

    // 1. Get the video container element (you need to have added the 'videoContainer' div in your HTML)
    const videoContainer = document.getElementById('videoContainer');

    // 2. Show the video container
    videoContainer.style.display = 'block';

    // Optional: Auto-play the video (uncomment to enable)
    // const videoElement = videoContainer.querySelector('video');
    // videoElement.play();
  }
}