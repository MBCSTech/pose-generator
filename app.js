// Array of pose image URLs
const poses = [
  "images/pose1.png",
  "images/pose2.png",
  "images/pose3.png",
  "images/pose4.png",
  "images/pose5.png",
];

const poseImage = document.getElementById("poseImage");
const buttonContainer = document.getElementById("generatePose");

// Function to generate a random pose
function generateRandomPose() {
  const randomIndex = Math.floor(Math.random() * poses.length);
  const randomPose = poses[randomIndex];

  // Update the image source and make it visible
  poseImage.src = randomPose;
  poseImage.style.display = "block";
  placeholderText.style.display = "none";

  buttonContainer.outerHTML = `
    <a href="https://www.instagram.com" id="instagramButton" target="_blank">
      Go To Instagram
    </a>
  `;
}

// Attach event listener to the button
buttonContainer.addEventListener("click", generateRandomPose);
