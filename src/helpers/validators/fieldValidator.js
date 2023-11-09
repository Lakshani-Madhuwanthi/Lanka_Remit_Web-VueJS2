export class FieldValidator {
    value = ''
    regex = /^[\S\d]+$/
    message = ''
    errorMessage = 'This field is invalid'
    class = ''
    errorClass = 'is-danger'
    skipValidation = false

    constructor(regex, errorMessage, value, skipValidation = false) {
        this.regex = regex ? regex : this.regex
        this.errorMessage = errorMessage ? errorMessage : this.errorMessage
        this.value = value ? value : this.value
        this.skipValidation = skipValidation
    }

    validate(customErrorMessage = null){
        console.log(this)

        if(this.skipValidation) return true

        if(!this.regex.test(this.value)){
            this.class = this.errorClass
            this.message = customErrorMessage === null ? this.errorMessage : customErrorMessage

            return false
        }
        return true
    }

    invalidate(customErrorMessage){
        this.class = this.errorClass
        this.message = customErrorMessage ?  customErrorMessage : this.errorMessage
    }

    blur(){
        this.class = ''
        this.message = ''
    }
}
