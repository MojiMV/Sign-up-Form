
const pass = document.querySelector("#password");
const confPass = document.querySelector("#confirm-pass");
const subBut = document.querySelector(".submit-but");
const passFields = document.querySelectorAll(".pass-fields");
const validErrMsg = document.querySelector(".valid-error-message");

confPass.addEventListener("change", ()=> {
    if (!(pass.value === confPass.value)){
        subBut.disabled = true;
        passFields.forEach((field) =>{
            field.classList.add("pass-invalid-border")
        })
        validErrMsg.textContent = "* Passwords do not match";
    } else {
        subBut.disabled = false;
        passFields.forEach((field) => {
            field.classList.remove("pass-invalid-border")
        })
        validErrMsg.textContent = "";
    }
})