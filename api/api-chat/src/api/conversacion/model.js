import mongoose, { Schema } from 'mongoose'

const conversacionSchema = new Schema({
  integrantes: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  mensajes: [{
    type: Schema.ObjectId,
    ref: 'Mensaje'
  }],
  fecha: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

conversacionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      integrantes: this.integrantes,
      mensajes: this.mensajes,
      fecha: this.fecha,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Conversacion', conversacionSchema)

export const schema = model.schema
export default model
