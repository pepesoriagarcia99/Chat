import { success, notFound } from '../../services/response/'
import { Grupo } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Grupo.create(body)
    .then((grupo) => grupo.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Grupo.count(query)
    .then(count => Grupo.find(query, select, cursor)
      .then((grupos) => ({
        count,
        rows: grupos.map((grupo) => grupo.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Grupo.findById(params.id)
    .then(notFound(res))
    .then((grupo) => grupo ? grupo.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Grupo.findById(params.id)
    .then(notFound(res))
    .then((grupo) => grupo ? Object.assign(grupo, body).save() : null)
    .then((grupo) => grupo ? grupo.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Grupo.findById(params.id)
    .then(notFound(res))
    .then((grupo) => grupo ? grupo.remove() : null)
    .then(success(res, 204))
    .catch(next)
