
function register() {
    // Perform validation
    var nickname = document.getElementById("nickname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var genre = document.getElementById("genre").value;

    if (!nickname || !email || !password || !repassword || !name || !surname || !birthday || !gender || !genre) {
        alert("Please fill out all required fields");
        return;
    }
    // Basic email format validation
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return;
    }

    // Password match validation
    if (password !== repassword) {
        alert("Passwords do not match");
        return;
    }

    // Other validations as needed (e.g., name, surname, etc.)
    var nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name)) {
        alert("Invalid name. Use only letters.");
        return;
    }

    var surnameRegex = /^[A-Za-z]+$/;
    if (!surnameRegex.test(surname)) {
        alert("Invalid surname. Use only letters.");
        return;
    }

    // Dummy registration success alert
    alert("Registration successful!");

    // Redirect to the front page (replace this URL with your actual front page URL)
    window.location.href = "first.html";
    
}