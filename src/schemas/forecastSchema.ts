import * as Joi from '@hapi/joi';

const forecastTransaction = (param) => {
  const schema = {
    nik: Joi.string().required()
      .description('nik of user')
      .example('12788012782'),
    name: Joi.string().required()
      .description('name of user')
      .example('John Doe'),
    age: Joi.number().required()
      .description('age of user')
      .example(27)
  };
  return Joi.validate(param, schema);
}

export default forecastTransaction;
