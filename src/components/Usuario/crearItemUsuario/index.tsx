"use client"

import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react"
import { Button } from "../../ui/button"
import { Card, CardContent, CardHeader } from "../../ui/card"
import { Input } from "../../ui/input"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import { useAppDispatch } from "@/store"
import { addUser } from "@/store/features/usuarioSlice"
import IUsuario from "@/interfaces/usuario.interface"


const initialForm = {
  nombre: "",
  apellido: "",
  correo: "",
  direccion: "",
  descripcion: ""
}

const CrearItemUsuario = () => {

  const dispatch = useAppDispatch()
  const [form, setForm] = useState<IUsuario>(initialForm)

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(addUser(form))
    setForm(initialForm);
  };

  return (
    <Card className="w-full max-w-sm col-span-2">
      <CardContent className="space-y-6">
        <CardHeader className="font-bold text-2xl text-center">Crear usuario</CardHeader>
        <form onSubmit={handleSubmit}>

          <label>Nombre:</label>
          <Input type="text" name="nombre" value={form.nombre} placeholder="Nombre..." onChange={handleInputChange} />

          <label>Apellido:</label>
          <Input type="text" name="apellido" value={form.apellido} placeholder="Apellido..." onChange={handleInputChange} />

          <label>Correo electrónico:</label>
          <Input type="text" name="correo" value={form.correo} placeholder="correo electrónico..." onChange={handleInputChange} />

          <label>Dirección:</label>
          <Input type="text" name="direccion" value={form.direccion} placeholder="Dirección..." onChange={handleInputChange} />

          <label>Descripción:</label>
          <Input className="w-full h-30 border rounded pb-20" name="descripcion" value={form.descripcion} onChange={handleInputChange} type="text" placeholder="Descripción..." />

          <div className="flex justify-center">
            <Button>Crear Usuario</Button>
          </div>
        </form>


      </CardContent>

    </Card>


  )
}

export default CrearItemUsuario