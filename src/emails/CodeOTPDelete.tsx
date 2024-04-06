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
import * as React from "react";

interface TwitchResetPasswordEmailProps {
  username: string;
  code: string;
  updatedDate?: Date;
}

const baseUrl = `https://paymefinance.com`;

export const CodeOTPDelete = ({
  username = "zenorocha",
  code ="1234",
  updatedDate = new Date("June 23, 2022 4:06:00 pm UTC"),
}: TwitchResetPasswordEmailProps) => {
/*   const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(updatedDate); */

  return (
    <Html>
      <Head> <Preview>Cher(e) {username}</Preview> </Head>
     
      <Body style={main}>
        <Container style={container}>
          <Row style={logo}>
            <Column>
              <Img
                width={134}
                src={`${baseUrl}/files/logo-payme-complet.png`}
              />
            </Column>
            <Column align="right">
              <Link style={link}>
                www.payamefinance.com
              </Link>
            </Column>
          </Row>

          <Section style={content}>
            <br />
            <Text style={paragraph}>Cher(e) {username},</Text>
            <Text style={paragraph}>
            Nous avons reçu une demande de suppression de votre compte associé à Payme. Pour assurer la sécurité de votre compte et confirmer cette action, veuillez utiliser le code de vérification suivant :
            </Text>
            <Text style={paragraph}>
              <span  style={{fontWeight:"bold"}}>

              Code de Vérification pour Suppression : {code}
              </span>
            </Text>
            <Text style={paragraph}>
              <span  style={{fontWeight:"bold"}}>

              Veuillez noter :
              </span>
            </Text>
            <li style={paragraph}>
            Ce code est valide pour une durée limitée de 15 minutes.
            </li>
            <li style={paragraph}>
             

            La suppression de votre compte est irréversible. Une fois confirmée, toutes vos données et préférences associées seront définitivement effacées.
            
              </li>
            <li style={paragraph}>
             
             
              Si vous n'avez pas demandé à supprimer votre compte, veuillez ignorer cet e-mail ou nous contacter immédiatement pour sécuriser votre compte.
            </li>
            <Text style={paragraph}>
            Pour toute question ou si vous avez changé d'avis et souhaitez conserver votre compte, contactez notre support à support@paymefinance.com.
            </Text>
            <Text style={paragraph}>
            Nous sommes désolés de vous voir partir et vous remercions d'avoir utilisé Payme. Si vous souhaitez partager vos retours ou les raisons de votre départ, nous serions heureux de vous écouter.
            </Text>
            <Text style={paragraph}>Cordialement,</Text>
            <Text style={paragraph}>L'équipe Payme</Text>
          </Section> 
        

          <Section style={footer}>
            <Text style={{ textAlign: "center", padding:"10px" ,color: "#00000095" }}>
              © 2024 Payme, Tous droits réservés <br />
              350 Bush Street, Bamako Golf, CA, 94104 - Mali
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CodeOTPDelete;

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
  backgroundColor: "#000000",
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
  fontSize:"12px",
  textDecoration: "underline-none",
};
