 // Initialize EmailJS (replace with your public key)
    emailjs.init("YbMY6jwyx6MYGrqn-");

    document.getElementById("supportForm").addEventListener("submit", function(e) {
      e.preventDefault();
      emailjs.sendForm('service_t7p0y43', 'template_otakq6i', this)
        .then(function(response) {
          document.getElementById("successMsg").textContent = "Message sent successfully!";
          document.getElementById("errorMsg").textContent = "";
        }, function(error) {
          document.getElementById("errorMsg").textContent = "An error occurred. Please try again.";
          document.getElementById("successMsg").textContent = "";
        });
    });

    // Typing animation
    const typingElement = document.getElementById("typingText");
    const messages = [
      "Welcome! We are here to help you",
      "You will receive a response shortly",
    ];
    let msgIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
      const currentText = messages[msgIndex];
      if (isDeleting) {
        charIndex--;
        typingElement.textContent = currentText.substring(0, charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          msgIndex = (msgIndex + 1) % messages.length;
          setTimeout(typeText, 400);
        } else {
          setTimeout(typeText, 40);
        }
      } else {
        charIndex++;
        typingElement.textContent = currentText.substring(0, charIndex);
        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(typeText, 1600);
        } else {
          setTimeout(typeText, 60);
        }
      }
    }

    typeText();