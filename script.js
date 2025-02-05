// Select the QR code container and time display
const qrCodeElement = document.getElementById("qrcode");
const timeRemaining = document.getElementById("time-remaining");
const codeNumberElement = document.querySelector(".code-number");

// Initialize QR code generator
let qr = new QRCode(qrCodeElement, { text: "Initial QR Code", width: 150, height: 150 });

// Generate a new QR code and code number
function generateNewQRCode() {
    const randomCode = Math.floor(Math.random() * 10000000000000); // Generate a random code
    const newData = `Ticket-${randomCode}`;
    
    // Clear old QR code and create a new one
    qrCodeElement.innerHTML = "";
    qr = new QRCode(qrCodeElement, { text: newData, width: 150, height: 150 });

    // Update the displayed code number
    codeNumberElement.textContent = randomCode.toString().replace(/(.{4})/g, "$1 ");
}

// Update time remaining dynamically
let timeLeftInSeconds = 60 * 64; // Example: 1 hour and 4 minutes
function updateTimeRemaining() {
    const minutes = Math.floor(timeLeftInSeconds / 60);
    const seconds = timeLeftInSeconds % 60;

    timeRemaining.textContent = `${minutes} minutes, ${seconds} seconds`;

    if (timeLeftInSeconds > 0) timeLeftInSeconds--;
}

// Change QR code every 4 seconds
setInterval(generateNewQRCode, 4000);

// Update the time left every second
setInterval(updateTimeRemaining, 1000);

// Generate the first QR code and start the countdown
generateNewQRCode();
updateTimeRemaining();
