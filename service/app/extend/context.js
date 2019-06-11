module.exports={
    returnBody(status, code, message, data = {}) {
        this.status = status;
        this.body = {
            status: code,
            message, 
            data
        }
    }
}