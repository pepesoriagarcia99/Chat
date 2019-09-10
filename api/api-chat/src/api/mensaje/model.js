import mongoose, { Schema } from 'mongoose'

const mensajeSchema = new Schema({
  user: {
    type: String
  },
  cuerpo: {
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

mensajeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      user: this.user,
      cuerpo: this.cuerpo,
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

const model = mongoose.model('Mensaje', mensajeSchema)

export const schema = model.schema
export default model
