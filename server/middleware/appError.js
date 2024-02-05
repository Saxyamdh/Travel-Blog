class AppError extends Error {
    constructor (errorCode,message,statuscode){
        super(message)
        console.log("apphandler",statuscode)
        this.errorCode = errorCode
        this.statusCode = statuscode
 
    }
}

module.exports =  AppError