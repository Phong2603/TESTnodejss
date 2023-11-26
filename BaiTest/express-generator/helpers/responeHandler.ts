import {Response} from 'express';
const sendJsonSuccess = (res: Response, message = 'Success', code = 200) => {
    return (data: any = null) => {
      const resData = data ? { statusCode: code, message, data} : { statusCode: code, message};
      res.status(code).json(resData);
    };
  };
  

  const sendJsonErrors = (res: Response, error: any) => {
    console.log("sendJsonErrors",error);
    return res.status(error.status || 500).json({
      statusCode: error.status || 500,
      errorType: error.typeError || 'error',
      message: error.message || 'Unhandled Error'
      
    });
  };
  
export {
    sendJsonSuccess,
    sendJsonErrors,
  };