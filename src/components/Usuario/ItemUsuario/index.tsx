"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useAppSelector } from "@/store"

// Listado de usuarios
const UserList = () => {
  const users = useAppSelector((state) => state.usuarios)
  return (
    <div className="col-span-4">
      {users.map((user, index) => (
        // ItemUsuario
        <Card key={index} className="w-full">
          <CardContent className="space-y-4">
            <CardHeader className="font-bold text-xl">Usuario {index + 1}</CardHeader>
            <div>
              <strong>Nombre:</strong> {user.nombre}
            </div>
            <div>
              <strong>Apellido:</strong> {user.apellido}
            </div>
            <div>
              <strong>Correo:</strong> {user.correo}
            </div>
            <div>
              <strong>Dirección:</strong> {user.direccion}
            </div>
            <div>
              <strong>Descripción:</strong> {user.descripcion}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default UserList