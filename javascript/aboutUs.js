
document.getElementById("emailForm").addEventListener("submit", function(event) {
    //prevent the page from refreshing
    event.preventDefault(); 

    const inputEmail = document.getElementById('email');
    const userEmail = inputEmail.value;

    //display the email in the confirmation box
    document.getElementById('userEmail').textContent = userEmail;

    const confirmationBox = document.getElementById('confirmationMessage');
    confirmationBox.style.display = 'block';
});