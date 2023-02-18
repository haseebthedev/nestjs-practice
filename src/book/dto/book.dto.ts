import * as Joi from 'joi';

export interface Book {
    id: string
    title: string
    author: string
    published: string
}

export const createBookSchema = Joi.object({
    id: Joi.string().required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    published: Joi.string().required(),
})
