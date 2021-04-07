function sendMail(contactForm) {
    emailjs.send("service_z8cgpej","template_55aqf9b", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.querysummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    document.getElementById("contactForm").reset();
    return false;  
    // To block from loading a new page
}