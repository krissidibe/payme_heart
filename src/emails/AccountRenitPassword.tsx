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

export const AccountRenitPassword = ({
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
            Nous vous confirmons que votre mot de passe pour le compte Payme a été réinitialisé avec succès.</Text>
            <Text style={paragraph}>
            Détails de la Réinitialisation :
            </Text>
            <Text style={paragraph}>
            Date et Heure : [Date et heure de la réinitialisation]
            <br />
            Adresse IP : [Adresse IP utilisée pour la réinitialisation]
            <br />
            Appareil : [Type d'appareil utilisé, si disponible]
          </Text>
            <Text style={paragraph}>
            Si vous n'avez pas effectué cette réinitialisation, nous vous conseillons de sécuriser immédiatement votre compte en contactant notre équipe d'assistance.
            </Text>
            <Text style={paragraph}>
            Pour toute question ou préoccupation supplémentaire, n'hésitez pas à nous contacter à support@paymefinance.com. Notre équipe est là pour vous aider.
            
            </Text>
            <Text style={paragraph}>
            Merci d'utiliser Payme.
            </Text>
            <Text style={paragraph}>Cordialement,</Text>
            <Text style={paragraph}>L'équipe Payme</Text>
          </Section> 
        

          <Section style={footer}>
            <Text style={{ textAlign: "center", padding:"10px" ,color: "#00000095" }}>
              © 2023 Payme, Tous droits réservés <br />
              350 Bush Street, Bamako Golf, CA, 94104 - Mali
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AccountRenitPassword;

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
