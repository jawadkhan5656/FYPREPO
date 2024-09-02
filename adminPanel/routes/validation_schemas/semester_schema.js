const joi = require('joi');

function semesterSchema(data) {
    const schema = joi.object({
        cs_id: joi.number(),

        springFall: joi.string()
            .min(4)
            .max(10)
            .required(),

        year: joi.number()
            .required(),

        session_id: joi.number(),

        batch: joi.string()
            .min(4)
            .max(20)
            .required(),

        session_name: joi.string()
            .valid('fall', 'spring')
            .required()
    
        
    })

    const valid = schema.validate(data);
    return valid;
}

module.exports = semesterSchema;