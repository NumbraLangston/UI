import { Card, CardContent, CardHeader } from "@/components/ui/card"


const ItemUsuario = () =>{
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <Card key={index} className="w-full max-w-sm">
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
}