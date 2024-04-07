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
   
}

const baseUrl = `https://paymefinance.com`;

export const ConfirmPassword = ({
  username = "zenorocha",
  
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
                  src={`${baseUrl}/images/logo-payme-complet.png`}
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
            <Text style={paragraph}>Bonjour {username},</Text> 
            
            <Text style={paragraph}>
            Nous vous confirmons que votre mot de passe pour le compte Payme a été réinitialisé avec succès.
            </Text>
            <Text style={paragraph}>
            Si vous n'avez pas effectué cette réinitialisation, nous vous conseillons de sécuriser immédiatement votre compte en contactant notre équipe d'assistance.
            </Text>
            <Text style={paragraph}>
            Pour toute question ou préoccupation supplémentaire, n'hésitez pas à nous contacter à support@paymefinance.com. Notre équipe est là pour vous aider.
            </Text>
            <Text style={paragraph}>
            Nous nous engageons à assurer la sécurité de vos informations personnelles et nous vous remercions de continuer à faire confiance à Payme.
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

export default ConfirmPassword;

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
