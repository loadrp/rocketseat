const titleValidate = (request, response, next) => {
  const { body } = request;
  if(body.title === undefined){
    return response.status(400).json({"mensagem":"Title field is required"})
  } 

  if(body.title === ''){
    return response.status(400).json({"mensagem":"Title field can't be empyt"})
  }
  
  next();

};

const statusValidate = (request, response, next) => {
  const { body } = request;
  if(body.status === undefined){
    return response.status(400).json({"mensagem":"Status field is required"})
  } 

  if(body.status === ''){
    return response.status(400).json({"mensagem":"Status field can't be empyt"})
  }
  
  next();

};

module.exports = {
  titleValidate,
  statusValidate
};