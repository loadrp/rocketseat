const bodyValidate = (request, response, next) => {
  const { body } = request;
  if(body.title === undefined){
    return response.status(400).json({"mensagem":"Title field is required"})
  } 

  if(body.title === ''){
    return response.status(400).json({"mensagem":"Title field can't be empyt"})
  } 
  next();

};

module.exports = {
  bodyValidate
};