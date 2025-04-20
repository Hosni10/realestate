import CustomError from '../utilities/customError.js'



export default function catchError(callBack) {
    return (req, res, next) => {
        callBack(req, res, next).catch(err => {
            // If err is already a CustomError, pass it through
            if (err instanceof CustomError) {
                return next(err);
            }
            // Otherwise create new CustomError
            next(new CustomError(err.message || err, 400));
        });
    };
}
