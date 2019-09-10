import { success, notFound } from '../../services/response/'
import { Conversacion } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Conversacion.create(body)
    .then((conversacion) => conversacion.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Conversacion.count(query)
    .then(count => Conversacion.find(query, select, cursor)
      .then((conversacions) => ({
        count,
        rows: conversacions.map((conversacion) => conversacion.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Conversacion.findById(params.id)
    .then(notFound(res))
    .then((conversacion) => conversacion ? conversacion.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Conversacion.findById(params.id)
    .then(notFound(res))
    .then((conversacion) => conversacion ? Object.assign(conversacion, body).save() : null)
    .then((conversacion) => conversacion ? conversacion.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Conversacion.findById(params.id)
    .then(notFound(res))
    .then((conversacion) => conversacion ? conversacion.remove() : null)
    .then(success(res, 204))
    .catch(next)
