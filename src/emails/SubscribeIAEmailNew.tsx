import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { format } from "date-fns";
import * as React from "react";

interface TwitchResetPasswordEmailProps {
  username?: string;
  subscribe?: any;
}

const baseUrl = `https://paymefinance.com`;

export const SubscribeIAEmailNew = ({
  username = "zenorocha",
  subscribe = null,
}: TwitchResetPasswordEmailProps) => {
  return (
    <Html>
      <Head>
        {" "}
        <Preview>Cher(e) {username}</Preview>{" "}
      </Head>

      <Body style={main}>
        <Container style={container}>
          <Row style={logo}>
            <Column>
              <Img
                width={134}
                src={`${baseUrl}/images/logo-payme-complet.png`}
              />
            </Column>
            <Column align="right">
              <Link style={link}>www.payamefinance.com</Link>
            </Column>
          </Row>

          <Section style={content}>
            <br />
           {/*  <Text style={paragraph}>Cher(e) {username},</Text> */}
         <Text style={paragraph}>
         <span style={{ fontWeight: "bold"  , fontSize:"30px" }}>Félicitations !</span>
          </Text>   
         <Text style={paragraph}>Madame, Monsieur,</Text>   
            <Text style={paragraph}>
             
            Nous avons le plaisir de vous informer que votre souscription au pack de crédit IA a été validée avec succès. Vous bénéficiez désormais de notre solution avancée de génération de factures assistée par IA, conçue pour simplifier et optimiser vos processus de facturation.

            </Text>
            <Text style={paragraph}>
            Détails de votre souscription :
            </Text>
            <Text style={paragraph}>

            <span style={{ fontWeight: "bold" , marginRight:"3px" }}>Numéro de référence de la facture :</span>
              {subscribe.reference}
              <br />


              <span style={{ fontWeight: "bold" , marginRight:"3px" }}>Type de Plan d'Abonnement :</span>
              {subscribe.amount == "1490" ? "Pack Hot" : subscribe.amount == "950" ? "Pack Semi" : "Pack Mini"}  
              <br />
            
              <span style={{ fontWeight: "bold" , marginRight:"3px" }}>Date de souscription :</span>
              {format(
                new Date(subscribe.createdAt).toString(),
                "dd/MM/yyyy"
              )}{" "}
              <br />
              <span style={{ fontWeight: "bold" , marginRight:"3px" }}>
                Date d'expiration :
              </span>
              {format(
                new Date(subscribe.createdAt).setMonth(
                  new Date(subscribe.createdAt).getMonth() +
                    1
                ),
                "dd/MM/yyyy"
              )}{" "}
              <br />
              <br />
              Grâce à ce pack, vous pourrez accéder à des fonctionnalités IA avancées, vous permettant de créer des factures de manière plus rapide et efficace.
            </Text>
            <Text style={paragraph}>
              
            Pour toute question ou demande d'assistance, notre équipe est à votre disposition via l'adresse email : support@paymefinance.com.
             
             
            </Text>
            <Text style={paragraph}>
            Nous vous remercions de votre confiance en Payme et espérons que cette nouvelle fonctionnalité vous apportera entière satisfaction.
            </Text>
            <Text style={paragraph}>Cordialement,</Text>
            <Text style={paragraph}>L'équipe Payme</Text>
          </Section>

          <Section style={footer}>
            <Text
              style={{
                textAlign: "center",
                padding: "10px",
                color: "#00000095",
              }}
            >
              © 2024 Payme, Sarl. Tout droit réservé <br />
              Cet email a été envoyé depuis Payme. Pour toute question ou
              assistance, veuillez nous contacter à support@paymefinance.com.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SubscribeIAEmailNew;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#FFFFFF",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  border: "0.5px solid black",
  width: "730px",
  maxWidth: "730px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  borderTop: "0.5px solid black",
  width: "84%",
  margin: "20px auto",
};

const content = {
  padding: "5px 50px 10px 60px",
};

const logo = {
  padding: "40px 50px 25px 50px",
  backgroundColor: "#000000 !important",
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  /*  borderBottom: '1px solid rgb(145,71,255)',
      width: '102px', */
};

const link = {
  color: "#000000",
  marginTop: "24px",
  fontSize: "12px",
  textDecoration: "underline-none",
};
