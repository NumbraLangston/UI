"use client"
import CrearItemUsuario from "@/components/Usuario/crearItemUsuario";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/store";
import { useState } from "react";

export default function Home() {
  const [usuariosId, setUsuariosId] = useState<number | null>(null)
  const usuarios = useAppSelector(state => state.usuarios)

  return (
    <div className="grid grid-cols-6 mr-80 ml-80 mt-20 gap-4 space-x-20">
      <CrearItemUsuario />
      
      
    </div>
  );
}
