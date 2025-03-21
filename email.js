document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_906bj2d", "template_etgc87b", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
    .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Reset form setelah terkirim
    }, function(error) {
        alert("Failed to send message. Please try again.");
    });
});
