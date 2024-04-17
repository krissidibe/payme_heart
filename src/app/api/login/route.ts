import { signJwtAccessToken } from "@/utils/jwt";
import {prisma} from "@/utils/prisma";
import bcrypt from "bcryptjs";
interface RequestBody {
  email: string;
  password: string;
}


export async function GET() {
  return new Response(JSON.stringify("LOGIN GET"));
 }


export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if(!user){
    return new Response(
      JSON.stringify({
        message: "Votre compte n'est pas enregistré",
      }),
      {
        status: 401,
      }
    );
  }


   const isPasswordValid = await bcrypt.compare(
    body.password,
    user!.password
  );
  console.log(isPasswordValid); 
  
  /* if (user && (await bcrypt.compare(body.password, user.password))) { */
  if (user && ( isPasswordValid) ){
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);

    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } 

   else if(user && ( body.password != user.password)){
    return new Response(
      JSON.stringify({
        message: "Votre mot de passe est incorrect",
      }),
      {
        status: 401,
      }
    );
   }
  
  else
    return new Response(
      JSON.stringify({
        message: "Votre compte n'est pas enregistré",
      }),
      {
        status: 401,
      }
    );
}