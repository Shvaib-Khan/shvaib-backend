class ApiError extends Error {

    constructor (

        statusCode,
        message="Something went wrong",
        errors=[],
        stack='',
        
    ){
        super(message)  //jab ham overwrite karte hai to super call karte hi hai
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack) {
            this.stack=stack
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
        //we can avoid above code from if else agar samajh jao to bahot badhiya
    }

}

export {ApiError}