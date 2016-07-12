function AppError(code,message) {
    this.code = code || '';
    this.message = message || '';
}

AppError.prototype = Error.prototype;
