import mongoose, { Schema } from 'mongoose'

const grupoSchema = new Schema({
  integrantes: {
    type: String
  },
  mensajes: {
    type: String
  },
  nombre: {
    type: String
  },
  fecha: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

grupoSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      integrantes: this.integrantes,
      mensajes: this.mensajes,
      nombre: this.nombre,
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

const model = mongoose.model('Grupo', grupoSchema)

export const schema = model.schema
export default model
