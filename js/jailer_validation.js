


var form = document.querySelector("form");
form.addEventListener("submit", function (event) {

    // 1. Store all input values in variables
    var fullname   = document.getElementById("fullname").value.trim();
    var email      = document.getElementById("email").value.trim();
    var phone      = document.getElementById("phone").value.trim();
    var dob        = document.getElementById("dob").value;
    var gender     = document.querySelector('input[name="gender"]:checked');
    var address    = document.getElementById("address").value.trim();
    var badge      = document.getElementById("badge").value.trim();
    var shift      = document.getElementById("shift").value;
    var block      = document.getElementById("block").value;
    var passcode   = document.getElementById("passcode").value;
    var experience = document.getElementById("experience").value.trim();
    var username   = document.getElementById("username").value.trim();
    var password   = document.getElementById("password").value;
    var confirm    = document.getElementById("confirm").value;
    var terms      = document.getElementById("terms").checked;

    // Build a single error message string
    var errors = "";

    //2. VALIDATION RULES 

    // Full Name (letters + spaces only) 
    if (fullname === "") {
        errors += "Full Name cannot be empty.<br>";
    } else {
        var nameValid = true;
        for (var i = 0; i < fullname.length; i++) {
            var ch = fullname[i];
            var isLetter = (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z");
            var isSpace  = (ch === " ");
            if (!isLetter && !isSpace) {
                nameValid = false;
                break;
            }
        }
        if (!nameValid) {
            errors += "Full Name should contain only letters.<br>";
        }
    }

   
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errors += "Email cannot be empty.<br>";
    } else if (!emailPattern.test(email)) {
        errors += "Enter a valid email address.<br>";
    }

    
    var phonePattern = /^01[0-9]{9}$/;
    if (phone === "") {
        errors += "Phone Number cannot be empty.<br>";
    } else if (!phonePattern.test(phone)) {
        errors += "Phone must be 11 digits starting with 01.<br>";
    }

    // Date of Birth (must be selected) 
    if (dob === "") {
        errors += "Date of Birth is required.<br>";
    }

    // Gender (must be selected) 
    if (!gender) {
        errors += "Please select a gender.<br>";
    }

    // Address (min 10 characters) 
    if (address === "") {
        errors += "Address cannot be empty.<br>";
    } else if (address.length < 10) {
        errors += "Address must be at least 10 characters.<br>";
    }

    //  Badge Number (format: JLR-YYYY-XXX, ) 
    if (badge === "") {
        errors += "Badge Number cannot be empty.<br>";
    } else {
        var badgeValid = false;

        // Must be exactly 12 chars: "JLR-2024-001"
        if (badge.length === 12 &&
            badge[0] === "J" && badge[1] === "L" && badge[2] === "R" &&
            badge[3] === "-" &&
            badge[8] === "-") {

            badgeValid = true;

            // positions 4-7 must be digits (year)
            for (var i = 4; i <= 7; i++) {
                if (!(badge[i] >= "0" && badge[i] <= "9")) {
                    badgeValid = false;
                    break;
                }
            }

            // positions 9-11 must be digits
            if (badgeValid) {
                for (var i = 9; i <= 11; i++) {
                    if (!(badge[i] >= "0" && badge[i] <= "9")) {
                        badgeValid = false;
                        break;
                    }
                }
            }
        }

        if (!badgeValid) {
            errors += "Badge format must be JLR-2024-001.<br>";
        }
    }

    // Shift (must be selected)
    if (shift === "") {
        errors += "Please select a shift schedule.<br>";
    }

    //  Block (must be selected) 
    if (block === "") {
        errors += "Please select an assigned block.<br>";
    }

    // Security Passcode (min 6 chars, at least 1 number, no regex) 
    if (passcode === "") {
        errors += "Security Passcode cannot be empty.<br>";
    } else {
        var hasNumber = false;
        for (var i = 0; i < passcode.length; i++) {
            if (passcode[i] >= "0" && passcode[i] <= "9") {
                hasNumber = true;
                break;
            }
        }
        if (!(passcode.length >= 6 && hasNumber)) {
            errors += "Passcode must be 6+ characters with at least one number.<br>";
        }
    }

    //  Experience (0–50 number) 
    if (experience === "") {
        errors += "Years of Service cannot be empty.<br>";
    } else if (isNaN(experience) || experience < 0 || experience > 50) {
        errors += "Years of Service must be between 0 and 50.<br>";
    }

    //  Username (min 4 chars, letters/numbers only) 
    if (username === "") {
        errors += "Username cannot be empty.<br>";
    } else {
        var usernameValid = (username.length >= 4);

        if (usernameValid) {
            for (var i = 0; i < username.length; i++) {
                var ch = username[i];
                var isLetter = (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z");
                var isDigit  = (ch >= "0" && ch <= "9");
                if (!isLetter && !isDigit) {
                    usernameValid = false;
                    break;
                }
            }
        }

        if (!usernameValid) {
            errors += "Username must be 4+ letters/numbers (no symbols).<br>";
        }
    }

    // Password (min 6 chars, at least 1 number) 
    if (password === "") {
        errors += "Password cannot be empty.<br>";
    } else {
        var pwdHasNumber = false;
        for (var i = 0; i < password.length; i++) {
            if (password[i] >= "0" && password[i] <= "9") {
                pwdHasNumber = true;
                break;
            }
        }
        if (!(password.length >= 6 && pwdHasNumber)) {
            errors += "Password must be 6+ characters with at least one number.<br>";
        }
    }

    // Confirm Password (must match) 
    if (confirm === "") {
        errors += "Confirm Password cannot be empty.<br>";
    } else if (password !== confirm) {
        errors += "Passwords do not match.<br>";
    }

    // Terms checkbox 
    if (!terms) {
        errors += "You must agree to the terms and conditions.<br>";
    }

    //  SHOW ERRORS OR SUCCESS 

    // Create (or reuse) a message box inside the form
    var messageBox = document.getElementById("formMessage");
    if (!messageBox) {
        messageBox = document.createElement("div");
        messageBox.id = "formMessage";
        messageBox.style.margin = "15px";
        messageBox.style.padding = "12px";
        messageBox.style.borderRadius = "6px";
        messageBox.style.fontWeight = "bold";
        messageBox.style.textAlign = "center";
        form.appendChild(messageBox);
    }

    if (errors !== "") {
        // Errors found – stop submission
        event.preventDefault();
        messageBox.innerHTML = errors;                 // innerHTML (task requirement)
        messageBox.style.color = "red";
        messageBox.style.backgroundColor = "#ffe6e6";
        messageBox.style.border = "1px solid red";
        window.scrollTo(0, 0);                         // scroll to top to see errors
    } else {
        // All valid – show success message
        messageBox.innerHTML = "Registration Successful!";
        messageBox.style.color = "green";
        messageBox.style.backgroundColor = "#e6ffe6";
        messageBox.style.border = "1px solid green";
        
    }
});


var fields = document.querySelectorAll("input, select, textarea");
for (var f = 0; f < fields.length; f++) {
    fields[f].addEventListener("change", function () {
        var box = document.getElementById("formMessage");
        if (box) {
            box.innerHTML = "";
        }
    });
}