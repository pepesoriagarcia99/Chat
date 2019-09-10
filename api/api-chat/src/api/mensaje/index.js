import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Mensaje, { schema } from './model'

const router = new Router()
const { user, cuerpo, fecha } = schema.tree

/**
 * @api {post} /mensajes Create mensaje
 * @apiName CreateMensaje
 * @apiGroup Mensaje
 * @apiParam user Mensaje's user.
 * @apiParam cuerpo Mensaje's cuerpo.
 * @apiParam fecha Mensaje's fecha.
 * @apiSuccess {Object} mensaje Mensaje's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mensaje not found.
 */
router.post('/',
  body({ user, cuerpo, fecha }),
  create)

/**
 * @api {get} /mensajes Retrieve mensajes
 * @apiName RetrieveMensajes
 * @apiGroup Mensaje
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of mensajes.
 * @apiSuccess {Object[]} rows List of mensajes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /mensajes/:id Retrieve mensaje
 * @apiName RetrieveMensaje
 * @apiGroup Mensaje
 * @apiSuccess {Object} mensaje Mensaje's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mensaje not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /mensajes/:id Update mensaje
 * @apiName UpdateMensaje
 * @apiGroup Mensaje
 * @apiParam user Mensaje's user.
 * @apiParam cuerpo Mensaje's cuerpo.
 * @apiParam fecha Mensaje's fecha.
 * @apiSuccess {Object} mensaje Mensaje's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mensaje not found.
 */
router.put('/:id',
  body({ user, cuerpo, fecha }),
  update)

/**
 * @api {delete} /mensajes/:id Delete mensaje
 * @apiName DeleteMensaje
 * @apiGroup Mensaje
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Mensaje not found.
 */
router.delete('/:id',
  destroy)

export default router
