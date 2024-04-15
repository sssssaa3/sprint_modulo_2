document.addEventListener("DOMContentLoaded", () => {
    //SELECCION DE FORMULARIO, INPUTS Y MODAL
    const form = document.querySelector('.needs-validation')
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputMessage = document.getElementById("message");
    const modalEmail = new bootstrap.Modal(document.getElementById("exampleModal"));

    //EXPRESION REGULAR PARA VALIDAR EMAIL
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //ESTADO DE LOS INPUTS, FALSE PARA NO VALIDO
    let formIsValid = {
        inputName: false,
        inputEmail: false,
        inputMessage: false
    }

    //FUNCIONES QUE AGREGAN O REMUEVEN LA CLASE IS-VALID O IS-INVALID DE BOOTSTRAP A LOS INPUTS QUE ACTIVAN O DESACTIVAN LA EXHIBICION DEL DIV CON LA CLASE invalid-feedback
    function validateInput(element) {
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
    }

    function invalidateInput(element) {
        element.classList.remove("is-valid")
        element.classList.add("is-invalid")
    }

    //FUNCION QUE CAMBIA EL ESTADO DEL INPUT SEGUN CONDICION LOGICA Y EJECUTA FUNCIONES VALIDATE O INVALIDATE INPUT SEGUN EL ESTADO
    function changeStateInput(element, funcLogic, keyInput) {
        const value = element.value.trim()
        const stateInput = funcLogic(value);
        formIsValid[keyInput] = stateInput;
        stateInput ? validateInput(element) : invalidateInput(element);

    }

    //FUNCION QUE RESTABLECE VALORES DEL FORM
    function resetForm() {
        inputName.classList.remove("is-valid")
        inputEmail.classList.remove("is-valid")
        inputMessage.classList.remove("is-valid")
        formIsValid.inputEmail = false
        formIsValid.inputMessage = false
        formIsValid.inputName = false
        inputName.value = "";
        inputEmail.value = "";
        inputMessage.value = "";
    }

    //EVENTO INPUT EN COMBINACION CON LAS FUNCIONES DE VALIDACION PARA RETROALIMENTACION EN TIEMPO REAL
    inputName.addEventListener("input", (e) => {
        changeStateInput(inputName, (value) => value.length >= 4, "inputName")

    })

    inputEmail.addEventListener("input", (e) => {
        changeStateInput(inputEmail, (value) => regex.test(value), "inputEmail")
    })

    inputMessage.addEventListener("input", (e) => {
        changeStateInput(inputMessage, (value) => value.length >= 10, "inputMessage")
    })

    //EVENTO SUBMIT. EVITAMOS EL ENVIO DEL FORM, VERIFICAMOS EL ESTADO DE LOS INPUTS Y SOLO CUANDO SEAN TRUE RESTABLECEMOS TODOS LOS VALORES, Y MOSTRAMOS EL MODAL CON EL MENSAJE DE EXITO SIMULANDO EL ENVIO. 
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        changeStateInput(inputName, (value) => value.length >= 4, "inputName");
        changeStateInput(inputEmail, (value) => regex.test(value), "inputEmail");
        changeStateInput(inputMessage, (value) => value.length >= 10, "inputMessage");

        if (formIsValid.inputEmail && formIsValid.inputMessage && formIsValid.inputName) {
            resetForm()
            modalEmail.show()
        }
        event.stopPropagation()
    })




})







