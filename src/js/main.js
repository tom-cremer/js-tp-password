
const settings = {
    typePassword: "password",
    typeText: "text"
}

const show = {
    buttonSelector: document.querySelector(".showPass"),
    passwordElement: document.getElementById(settings.typePassword),

    init() {
        this.buttonSelector.addEventListener("click", ()=> {
            if (this.passwordElement.type === settings.typePassword){
                this.passwordElement.type = settings.typeText;
            }else {
                this.passwordElement.type = settings.typePassword;
            }
        })
    }
}

show.init();

