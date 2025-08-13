"use client"
import { FormEventHandler, useEffect, useState } from "react"
import { Button } from "../../ui/button"
import { Card, CardContent, CardHeader } from "../../ui/card"
import { Input } from "../../ui/input"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"

const initialForm = {
  nombre: "",
  apellido: "",
  correo:"",
  direccion: "",
  descripcion: ""
}

const CrearItemUsuario = () => {  
  const [form, setForm] = useState(initialForm)
   const [tarjetaUsuario, setTarjetaUsuario] = useState([]);

  
  
const createCard = ({ data, index }) => (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-md">
          <h2 className="text-xl font-bold mb-2">Card {index + 1}</h2>
          <p><strong>Usuario:</strong> {data.name +" "+ data.apellido} </p>
          <p><strong>Correo:</strong> {data.correo}</p>
          <p><strong>Dirección:</strong> {data.direccion}</p>
          <p><strong>Descripción:</strong> {data.descripcion}</p>
          
        </div>
      );

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };

   const handleSubmit = (e) => {
        e.preventDefault();
        setTarjetaUsuario([...cards, form]);
        setForm({ nombre: '', apellido: '', correo: '', direccion: '', descripcion: '' });
      };

    return (
        <Card className="w-full max-w-sm col-span-2">
        <CardContent className="space-y-6">
          <CardHeader className="font-bold text-2xl text-center">Crear usuario</CardHeader>
          <label>Nombre:</label>
          <Input type="text" name="nombre"  value={form.nombre} placeholder="Nombre..." onChange={handleInputChange}></Input>
          <label>Apellido:</label>
          <Input type="text" name="apellido" value={form.apellido} placeholder="Apellido..." onChange={handleInputChange}></Input>
          <label>Correo electrónico:</label>
          <Input type="text" name="correo" value={form.correo} placeholder="correo electrónico..." onChange={handleInputChange}></Input> 
          <label>Dirección:</label>
          <Input type="text" name="direccion" value={form.direccion} placeholder="Dirección..." onChange={handleInputChange}></Input>
          <label>Descripción:</label>
          <Input className="w-full h-30 border rounded pb-20" name="descripcion" value={form.descripcion} onChange={handleInputChange} type="text" placeholder="Descripción..."></Input>
          
              <div className="flex justify-center">
                <Button  onClick={handleSubmit}>Crear Usuario</Button>
              </div>

          
        </CardContent>

      </Card>
      
      
    )
}

export default CrearItemUsuario