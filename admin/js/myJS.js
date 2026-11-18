// Validate Existing Employee Search
function validateSearchEmployee() {
    var search = document.getElementById("search_employee").value;

    if (search == "") {
        document.getElementById("searchEmployeeError").innerHTML =
            "Please enter an employee ID";
        return false;
    }
    else {
        document.getElementById("searchEmployeeError").innerHTML = "";
        return true;
    }
}


// Validate Username
function validateUsername() {
    var username = document.getElementById("user_name").value;

    if (username == "") {
        document.getElementById("usernameError").innerHTML =
            "Username is required";
        return false;
    }
    else {
        document.getElementById("usernameError").innerHTML = "";
        return true;
    }
}


// Validate Email
function validateEmail() {
    var email = document.getElementById("user_email").value;
    var atPosition = email.indexOf("@");
    var dotPosition = email.lastIndexOf(".");

    if (email == "") {
        document.getElementById("emailError").innerHTML =
            "Email is required";
        return false;
    }
    else if (atPosition == -1 || dotPosition == -1 ||
             dotPosition < atPosition + 2 ||
             dotPosition == email.length - 1) {
        document.getElementById("emailError").innerHTML =
            "Please enter a valid email address";
        return false;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
        return true;
    }
}


// Validate Password
function validatePassword() {
    var password = document.getElementById("user_pass").value;
    var username = document.getElementById("user_name").value;

    if (password == "") {
        document.getElementById("passwordError").innerHTML =
            "Password is required";
        return false;
    }
    else if (password.length < 8) {
        document.getElementById("passwordError").innerHTML =
            "Password must contain at least 8 characters";
        return false;
    }
    else if (!/[A-Za-z]/.test(password) ||
             !/[0-9]/.test(password) ||
             !/[^A-Za-z0-9]/.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password must contain letters, numbers and symbols";
        return false;
    }
    else if (username != "" &&
             password.toLowerCase().includes(username.toLowerCase())) {
        document.getElementById("passwordError").innerHTML =
            "Password must not contain your username";
        return false;
    }
    else {
        document.getElementById("passwordError").innerHTML = "";

        if (document.getElementById("confirm_password").value != "") {
            validateConfirmPassword();
        }

        return true;
    }
}


// Validate Confirm Password
function validateConfirmPassword() {
    var password = document.getElementById("user_pass").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if (confirmPassword == "") {
        document.getElementById("confirmPasswordError").innerHTML =
            "Please confirm your password";
        return false;
    }
    else if (confirmPassword != password) {
        document.getElementById("confirmPasswordError").innerHTML =
            "Passwords do not match";
        return false;
    }
    else {
        document.getElementById("confirmPasswordError").innerHTML = "";
        return true;
    }
}


// Validate User Role
function validateRole() {
    var role = document.getElementById("user_role").value;

    if (role == "") {
        document.getElementById("roleError").innerHTML =
            "Please enter a user role";
        return false;
    }
    else {
        document.getElementById("roleError").innerHTML = "";
        return true;
    }
}


// Validate Account Status
function validateStatus() {
    var status = document.getElementById("status_options").value;

    if (status == "") {
        document.getElementById("statusError").innerHTML =
            "Please select an account status";
        return false;
    }
    else {
        document.getElementById("statusError").innerHTML = "";
        return true;
    }
}


// Validate Employee ID
function validateEmployeeID() {
    var employeeID = document.getElementById("employee_id").value;

    if (employeeID == "") {
        document.getElementById("employeeIdError").innerHTML =
            "Employee ID is required";
        return false;
    }
    else if (!/^[A-Z]{2}[0-9]{4}$/.test(employeeID)) {
        document.getElementById("employeeIdError").innerHTML =
            "Employee ID must contain 2 uppercase letters followed by 4 numbers";
        return false;
    }
    else {
        document.getElementById("employeeIdError").innerHTML = "";
        return true;
    }
}


// Validate Department
function validateDepartment() {
    var department = document.getElementById("department_options").value;

    if (department == "") {
        document.getElementById("departmentError").innerHTML =
            "Please select a department";
        return false;
    }
    else {
        document.getElementById("departmentError").innerHTML = "";
        return true;
    }
}


// Validate Designation
function validateDesignation() {
    var designation = document.getElementById("designation").value;

    if (designation == "") {
        document.getElementById("designationError").innerHTML =
            "Designation is required";
        return false;
    }
    else if (!/^[A-Za-z ]+$/.test(designation)) {
        document.getElementById("designationError").innerHTML =
            "Designation can contain only letters and spaces";
        return false;
    }
    else {
        document.getElementById("designationError").innerHTML = "";
        return true;
    }
}


// Validate Joining Date
function validateJoiningDate() {
    var joiningDate = document.getElementById("joining_date").value;

    if (joiningDate == "") {
        document.getElementById("joiningDateError").innerHTML =
            "Joining date is required";
        return false;
    }
    else if (!isValidDate(joiningDate)) {
        document.getElementById("joiningDateError").innerHTML =
            "Please enter a valid date in dd/mm/yyyy format";
        return false;
    }
    else {
        var parts = joiningDate.split("/");
        var day = Number(parts[0]);
        var month = Number(parts[1]);
        var year = Number(parts[2]);

        var enteredDate = new Date(year, month - 1, day);
        var today = new Date();

        today.setHours(0, 0, 0, 0);

        if (enteredDate > today) {
            document.getElementById("joiningDateError").innerHTML =
                "Joining date cannot be in the future";
            return false;
        }
        else {
            document.getElementById("joiningDateError").innerHTML = "";
            return true;
        }
    }
}


// Check Date Format and Validity
function isValidDate(date) {
    if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(date)) {
        return false;
    }

    var parts = date.split("/");
    var day = Number(parts[0]);
    var month = Number(parts[1]);
    var year = Number(parts[2]);

    var checkDate = new Date(year, month - 1, day);

    if (checkDate.getDate() == day &&
        checkDate.getMonth() == month - 1 &&
        checkDate.getFullYear() == year) {
        return true;
    }
    else {
        return false;
    }
}


// Validate Experience
function validateExperience() {
    var experience = document.getElementById("experience").value;

    if (experience == "") {
        document.getElementById("experienceError").innerHTML =
            "Work experience is required";
        return false;
    }
    else {
        document.getElementById("experienceError").innerHTML = "";
        return true;
    }
}


// Validate Start Time
function validateStartTime() {
    var startTime = document.getElementById("start_time").value;

    if (startTime == "") {
        document.getElementById("startTimeError").innerHTML =
            "Start time is required";
        return false;
    }
    else if (!/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(startTime)) {
        document.getElementById("startTimeError").innerHTML =
            "Please enter the time in HH:MM format";
        return false;
    }
    else {
        document.getElementById("startTimeError").innerHTML = "";

        if (document.getElementById("end_time").value != "") {
            validateEndTime();
        }

        return true;
    }
}


// Validate End Time
function validateEndTime() {
    var startTime = document.getElementById("start_time").value;
    var endTime = document.getElementById("end_time").value;

    if (endTime == "") {
        document.getElementById("endTimeError").innerHTML =
            "End time is required";
        return false;
    }
    else if (!/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(endTime)) {
        document.getElementById("endTimeError").innerHTML =
            "Please enter the time in HH:MM format";
        return false;
    }
    else if (startTime != "" &&
             /^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(startTime) &&
             endTime <= startTime) {
        document.getElementById("endTimeError").innerHTML =
            "End time must be later than start time";
        return false;
    }
    else {
        document.getElementById("endTimeError").innerHTML = "";
        return true;
    }
}


// Validate Full Name
function validateName() {
    var name = document.getElementById("fullname").value;

    if (name == "") {
        document.getElementById("nameError").innerHTML =
            "Full name is required";
        return false;
    }
    if (!/^[A-Za-z ]+$/.test(name) || !/[A-Za-z]/.test(name)) {
    document.getElementById("nameError").innerHTML = "Name must contain letters and spaces only.";
    return false;
}
    else {
        document.getElementById("nameError").innerHTML = "";
        return true;
    }
}


// Validate Phone Number
function validatePhone() {
    var phone = document.getElementById("user_phone").value;

    if (phone == "") {
        document.getElementById("phoneError").innerHTML =
            "Phone number is required";
        return false;
    }
    else if (!/^01[0-9]{9}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML =
            "Phone number must start with 01 and contain exactly 11 digits";
        return false;
    }
    else {
        document.getElementById("phoneError").innerHTML = "";
        return true;
    }
}


// Validate Gender
function validateGender() {
    var male = document.getElementById("gender_m").checked;
    var female = document.getElementById("gender_f").checked;

    if (male == false && female == false) {
        document.getElementById("genderError").innerHTML =
            "Please select your gender";
        return false;
    }
    else {
        document.getElementById("genderError").innerHTML = "";
        return true;
    }
}


// Validate Date of Birth
function validateDOB() {
    let dob = document.getElementById("date_of_birth").value;

    if (dob == "") {
        document.getElementById("dobError").innerHTML =
            "Please enter your date of birth.";
        return false;
    }

    if (!isValidDate(dob)) {
        document.getElementById("dobError").innerHTML =
            "Please enter a valid date in DD/MM/YYYY format.";
        return false;
    }

    let parts = dob.split("/");
    let day = parseInt(parts[0]);
    let month = parseInt(parts[1]) - 1;
    let year = parseInt(parts[2]);

    let birthDate = new Date(year, month, day);
    let today = new Date();

    today.setHours(0, 0, 0, 0);

    if (birthDate > today) {
        document.getElementById("dobError").innerHTML =
            "Date of birth cannot be in the future.";
        return false;
    }

    document.getElementById("dobError").innerHTML = "";
    return true;
}


// Validate Address
function validateAddress() {
    var address = document.getElementById("address").value;

    if (address == "") {
        document.getElementById("addressError").innerHTML =
            "Address is required";
        return false;
    }
    else {
        document.getElementById("addressError").innerHTML = "";
        return true;
    }
}


// Validate NID
function validateNID() {
    var nid = document.getElementById("identity_number").value;

    if (nid == "") {
        document.getElementById("nidError").innerHTML =
            "Identity number is required";
        return false;
    }
    else if (!/^[0-9]{10}$/.test(nid)) {
        document.getElementById("nidError").innerHTML =
            "NID must contain exactly 10 digits";
        return false;
    }
    else {
        document.getElementById("nidError").innerHTML = "";
        return true;
    }
}


// Validate Identity Document
function validateIdentityDocument() {
    var identityDocument = document.getElementById("identity_document").value;

    if (identityDocument == "") {
        document.getElementById("identityDocumentError").innerHTML =
            "Please upload an identity document";
        return false;
    }
    else if (!identityDocument.toLowerCase().endsWith(".pdf")) {
        document.getElementById("identityDocumentError").innerHTML = "Please upload a pdf document.";
        return false;
    }
    else {
        document.getElementById("identityDocumentError").innerHTML = "";
        return true;
    }
}


// Validate Profile Photo
function validateProfilePhoto() {
    var profilePhoto = document.getElementById("profile_photo").value;

    if (profilePhoto == "") {
        document.getElementById("profilePhotoError").innerHTML =
            "Please upload a profile photo";
        return false;
    }
    else if ((!profilePhoto.toLowerCase().endsWith(".jpg")) &&
            (!profilePhoto.toLowerCase().endsWith(".png"))) {
        document.getElementById("profilePhotoError").innerHTML =
        "Please upload a JPG or PNG image.";
        return false;
    }
    else {
        document.getElementById("profilePhotoError").innerHTML = "";
        return true;
    }
}


// Validate Account Creation Date
function validateCreationDate() {
    var creationDate = document.getElementById("account_creation_datetime").value;

    if (creationDate == "") {
        document.getElementById("creationDateError").innerHTML =
            "Account creation date and time is required";
        return false;
    }
    else {
        document.getElementById("creationDateError").innerHTML = "";
        return true;
    }
}


// Validate Confirmation
function validateConfirmation() {
    var confirmation = document.getElementById("information_verified").checked;

    if (confirmation == false) {
        document.getElementById("confirmationError").innerHTML =
            "Please confirm that the information is correct";
        return false;
    }
    else {
        document.getElementById("confirmationError").innerHTML = "";
        return true;
    }
}


// Validate Admin Registration Form
function validateAdminForm() {
    var usernameValid = validateUsername();
    var emailValid = validateEmail();
    var passwordValid = validatePassword();
    var confirmPasswordValid = validateConfirmPassword();
    var roleValid = validateRole();
    var statusValid = validateStatus();
    var employeeIDValid = validateEmployeeID();
    var departmentValid = validateDepartment();
    var designationValid = validateDesignation();
    var joiningDateValid = validateJoiningDate();
    var experienceValid = validateExperience();
    var startTimeValid = validateStartTime();
    var endTimeValid = validateEndTime();
    var nameValid = validateName();
    var phoneValid = validatePhone();
    var genderValid = validateGender();
    var dobValid = validateDOB();
    var addressValid = validateAddress();
    var nidValid = validateNID();
    var identityDocumentValid = validateIdentityDocument();
    var profilePhotoValid = validateProfilePhoto();
    var creationDateValid = validateCreationDate();
    var confirmationValid = validateConfirmation();

    if (usernameValid && emailValid && passwordValid &&
        confirmPasswordValid && roleValid && statusValid &&
        employeeIDValid && departmentValid && designationValid &&
        joiningDateValid && experienceValid && startTimeValid &&
        endTimeValid && nameValid && phoneValid && genderValid &&
        dobValid && addressValid && nidValid && identityDocumentValid &&
        profilePhotoValid && creationDateValid && confirmationValid) {

        alert("Admin registration completed successfully!");

        document.querySelector("form").reset();

        var errors = document.getElementsByTagName("span");

        for (var i = 0; i < errors.length; i++) {
            errors[i].innerHTML = "";
        }

        return true;
    }
    else {
        return false;
    }
}