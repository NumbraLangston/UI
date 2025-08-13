interface IUsuario {
    id?: number
    nombre: string
    apellido: string
    correo: string
    direccion: string
    descripcion: string
    createdAt?: Date
    updatedAt?: Date
}

export default IUsuario