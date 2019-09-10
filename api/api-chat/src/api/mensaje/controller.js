import { success, notFound } from '../../services/response/'
import { Mensaje } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Mensaje.create(body)
    .then((mensaje) => mensaje.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Mensaje.count(query)
    .then(count => Mensaje.find(query, select, cursor)
      .then((mensajes) => ({
        count,
        rows: mensajes.map((mensaje) => mensaje.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Mensaje.findById(params.id)
    .then(notFound(res))
    .then((mensaje) => mensaje ? mensaje.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Mensaje.findById(params.id)
    .then(notFound(res))
    .then((mensaje) => mensaje ? Object.assign(mensaje, body).save() : null)
    .then((mensaje) => mensaje ? mensaje.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Mensaje.findById(params.id)
    .then(notFound(res))
    .then((mensaje) => mensaje ? mensaje.remove() : null)
    .then(success(res, 204))
    .catch(next)
