import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Conversacion, { schema } from './model'

const router = new Router()
const { integrantes, mensajes, fecha } = schema.tree

/**
 * @api {post} /conversaciones Create conversacion
 * @apiName CreateConversacion
 * @apiGroup Conversacion
 * @apiParam integrantes Conversacion's integrantes.
 * @apiParam mensajes Conversacion's mensajes.
 * @apiParam fecha Conversacion's fecha.
 * @apiSuccess {Object} conversacion Conversacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Conversacion not found.
 */
router.post('/',
  body({ integrantes, mensajes, fecha }),
  create)

/**
 * @api {get} /conversaciones Retrieve conversacions
 * @apiName RetrieveConversacions
 * @apiGroup Conversacion
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of conversacions.
 * @apiSuccess {Object[]} rows List of conversacions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /conversaciones/:id Retrieve conversacion
 * @apiName RetrieveConversacion
 * @apiGroup Conversacion
 * @apiSuccess {Object} conversacion Conversacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Conversacion not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /conversaciones/:id Update conversacion
 * @apiName UpdateConversacion
 * @apiGroup Conversacion
 * @apiParam integrantes Conversacion's integrantes.
 * @apiParam mensajes Conversacion's mensajes.
 * @apiParam fecha Conversacion's fecha.
 * @apiSuccess {Object} conversacion Conversacion's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Conversacion not found.
 */
router.put('/:id',
  body({ integrantes, mensajes, fecha }),
  update)

/**
 * @api {delete} /conversaciones/:id Delete conversacion
 * @apiName DeleteConversacion
 * @apiGroup Conversacion
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Conversacion not found.
 */
router.delete('/:id',
  destroy)

export default router
