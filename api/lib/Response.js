const _enum = require("../config/enum");
const CustomError = require("./Error");
class Response {
    constructor() { }

    static successResponse(data, code = 200) {
        return {
            code,
            data
        }
    }

    static errorResponse(error) {
        console.log(error);
        if (error instanceof CustomError) {
            return {
                code: error.code,
                error: {
                    message: error.message,
                    description: error.description
                }
            }
        }


        return {
            code: _enum.HTTP_CODES.INT_SERVER_ERROR,
            error: {
                message: "unknown error",
                description: error.message
            }
        }
    }

}
module.exports = Response;
