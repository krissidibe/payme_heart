import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { CustomerType, ProjectType } from "@prisma/client";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "sk-proj-02EQAElc5u0yKiiqRGeRT3BlbkFJlgFIKVlWsuLa1kgxuzyj",
});




 
export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const message = searchParams.get("message")?.toString()

 


  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      
       {role: 'system', content: `
       
       1 - Tu es un expert en informatique si je te pose des question concernant la creation d'une facture tu me montre uniquement la partie contenu tu oublie les en têtes et le pied de page juste le table
      2 - tu maitrise tous les domaines de la creation de facture
      3 - tu donne toujours plus de details au niveau du tableau
      4 - tu peut varier le nombre de la quantité si nécessaire
      5 - tu donne toujours plus de details et les lignes doivent être entre 5 a 20 lignes au niveau du tableau
      6 - tu ne donne pas la description des services 
      7 - tu me donne en retour un tableau en json qui vas contenir les lignes du tableau de la facture du nom datas ainsi id designation vas etre designation prix en rate quantite en quantity et montant en amount

      8 - Le tableau json doit avoir les elements suivant
      designation (ne doit pas avoir de chiffres ni de caractere speciaux)
      id (doit etre de format  aleatoire avec des chiffres lettres et tiret)
      quantity (doit avoir uniquement des nombres)
      rate (doit avoir uniquement des nombres)
      amount  (doit avoir uniquement des nombres)


      tu me donne le code json uniquement\n
       ` },
      
      { role: 'user', content:  message!  }],
    temperature: 1.4,
    max_tokens: 4096,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  

  return new Response(JSON.stringify(response.choices[0]?.message?.content));


 

  
   
}






 

/* tu es un expert en informatique si je te pose des question concernant la creation d'un facture tu me montre uniquement la partie contenu tu oublie les en têtes et le pied de page juste le table\net tu donne toujours plus de details au niveau du tableau\n\nLe tableau doit avoir les elements suivant\nDésignation\nid (doit etre de format  aleatoire avec des chiffres lettres et tiret)\nQuantité (doit avoir uniquement des nombres)\nPrix (doit avoir uniquement des nombres)\nMontant  (doit avoir uniquement des nombres)\n\net tu peut varier le nombre de la quantité si nécessaire \ntu donne plus de detail\n\nne donne pas la description des services\n\ntu me donne en retour un tableau en json qui vas contenir les lignes du tableau de la facture du nom datas ainsi id designation vas etre designation, prix en rate, quantite en quantity\n et montant en amount\n\ntu me donne le code json uniquement\n avec designation rate quantity amount\n\n  */






/*  */




/* 

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "tu es un expert en informatique si je te pose des question concernant la creation d'un facture tu me montre uniquement la partie contenu tu oublie les en têtes et le pied de page juste le table\net tu donne toujours plus de details au niveau du tableau\n\nLe tableau doit avoir les elements suivant\nDésignation\nid (doit etre de format  aleatoire avec des chiffres lettres et tiret)\nQuantité (doit avoir uniquement des nombres)\nPrix (doit avoir uniquement des nombres)\nMontant  (doit avoir uniquement des nombres)\n\net tu peut varier le nombre de la quantité si nécessaire \ntu donne plus de detail\n\nne donne pas la description des services\n\ntu me donne en retour un tableau en json qui vas contenir les lignes du tableau de la facture du nom datas ainsi id designation vas etre designation prix en rate quantite en quantity\n et montant en amount\n\ntu me donne le code json uniquement\n"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Créer moi une facture pour la creation d'un capagne publicitaire pour un ONG"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "```json\n{\n  \"datas\": [\n    {\n      \"id\": \"A1B2-C3D4\",\n      \"designation\": \"Publicité sur réseaux sociaux\",\n      \"quantity\": 10,\n      \"rate\": 100,\n      \"amount\": 1000\n    },\n    {\n      \"id\": \"E5F6-G7H8\",\n      \"designation\": \"Réalisation de vidéos promotionnelles\",\n      \"quantity\": 5,\n      \"rate\": 200,\n      \"amount\": 1000\n    },\n    {\n      \"id\": \"I9J0-K1L2\",\n      \"designation\": \"Gestion de campagne Google Ads\",\n      \"quantity\": 3,\n      \"rate\": 150,\n      \"amount\": 450\n    },\n    {\n      \"id\": \"M3N4-O5P6\",\n      \"designation\": \"Design de bannières publicitaires\",\n      \"quantity\": 8,\n      \"rate\": 75,\n      \"amount\": 600\n    }\n  ]\n}\n```"
        }
      ]
    }
  ],
  temperature: 1,
  max_tokens: 4096,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

*/