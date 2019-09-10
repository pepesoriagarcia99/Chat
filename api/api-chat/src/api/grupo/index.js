import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Grupo, { schema } from './model'

const router = new Router()
const { integrantes, mensajes, nombre, fecha } = schema.tree

/**
 * @api {post} /grupos Create grupo
 * @apiName CreateGrupo
 * @apiGroup Grupo
 * @apiParam integrantes Grupo's integrantes.
 * @apiParam mensajes Grupo's mensajes.
 * @apiParam nombre Grupo's nombre.
 * @apiParam fecha Grupo's fecha.
 * @apiSuccess {Object} grupo Grupo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Grupo not found.
 */
router.post('/',
  body({ integrantes, mensajes, nombre, fecha }),
  create)

/**
 * @api {get} /grupos Retrieve grupos
 * @apiName RetrieveGrupos
 * @apiGroup Grupo
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of grupos.
 * @apiSuccess {Object[]} rows List of grupos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /grupos/:id Retrieve grupo
 * @apiName RetrieveGrupo
 * @apiGroup Grupo
 * @apiSuccess {Object} grupo Grupo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Grupo not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /grupos/:id Update grupo
 * @apiName UpdateGrupo
 * @apiGroup Grupo
 * @apiParam integrantes Grupo's integrantes.
 * @apiParam mensajes Grupo's mensajes.
 * @apiParam nombre Grupo's nombre.
 * @apiParam fecha Grupo's fecha.
 * @apiSuccess {Object} grupo Grupo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Grupo not found.
 */
router.put('/:id',
  body({ integrantes, mensajes, nombre, fecha }),
  update)

/**
 * @api {delete} /grupos/:id Delete grupo
 * @apiName DeleteGrupo
 * @apiGroup Grupo
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Grupo not found.
 */
router.delete('/:id',
  destroy)

export default router
