function sendMail(contactForm) {
    emailjs.send("gmail", "whiskey_tour", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "query_request": contactForm.querysummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}