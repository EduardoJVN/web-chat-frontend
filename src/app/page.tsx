'use client'
import { useRouter } from "next/navigation";
import AvatarStatus from "@/components/avatarStatus";
import Link from "next/link";
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"

import { useStatusStore } from "@/store/statusStore";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


type FormData = {
  email: string;
  password: string;
  rememberUser: boolean;
  automatic: boolean;
};
const defaultValues:FormData =  {
  email: "example@example.com",
  password: "12123123123",
  rememberUser: false,
  automatic: false,
}
// Schema con Yup
const schemaLogin = yup.object({
  email: yup.string().email("Email inválido").required("El email es obligatorio"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("La contraseña es obligatoria"),
  rememberUser: yup.boolean(),
  automatic: yup.boolean(),
}).required();

export default function Home() {
  const router = useRouter()
  const { status, setStatus } = useStatusStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schemaLogin),
    defaultValues
  });

  const onSubmit = async (data: any) => {
    // Simula una petición HTTP
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Datos enviados", data);
    router.push('/dashboard')

  };
  return (
    <div className="flex flex-col items-center h-full w-full bg-gradient-to-b from-bg-from via-bg-via to-bg-to gap-4">
      <div className="flex flex-col text-4xl gap-4">
        <h1 >Iniciar session en</h1>
        <h1>Windows Live <b className="font-bold">Messenger</b></h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col sm:flex-row bg-bg-primary rounded-2xl p-6 sm:w-full md:w-3xl gap-4 shadow-xl">
          <div className="flex flex-col items-center justify-center md:w-2/5">
            <AvatarStatus className="w-[200] h-[200]"/>
          </div>

          <div className="flex flex-col items-start justify-start md:w-full gap-3">
            <div className="flex flex-col gap-3 w-full">
              <Input type="text" placeholder="example@email.com"
                  {...register("email")}
                  error={errors.email?.message}
              />
              
              <Input type="password" placeholder="password"
                {...register("password")}
                error={errors.password?.message}
              />
            </div>
            
            <Link href="/dashboard" className="font-bold text-blue-500">¿No puedes iniciar session?</Link>
            <div className="flex flex-row items-center justify-center">
                Iniciar session como:
                <select name="select-status" id="select-status" value={status} onChange={(e)=>setStatus(e.target.value)}>
                  <option value="online">Disponible</option>
                  <option value="absent">Ausente</option>
                  <option value="busy">Ocupado</option>
                  <option value="offline">Desconectado</option>
                </select>
            </div>
            <div className="flex flex-row items-center">
              <input type="checkbox" {...register("rememberUser")} id="remember-id" className="mr-1" /> Recordar mi Id y contrasena
            </div>
            <div className="flex flex-row items-center">
              <input type="checkbox" {...register("automatic")} id="automatic" className="mr-1"/> Iniciar session automatico
            </div>

            <div className="flex flex-row items-center gap-3">
              <Button type="submit" loading={isSubmitting}>Iniciar session</Button>
              <Button>Cancelar</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  
  );
}
