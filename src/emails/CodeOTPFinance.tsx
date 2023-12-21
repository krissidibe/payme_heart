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

export const CodeOTPFinance = ({
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
      <Head> <Preview>Bonjour {username}</Preview> </Head>
     
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
            <Text style={paragraph}>Bonjour {username},</Text>
            <Text style={paragraph}>
            Suite à la récente réinitialisation de votre code d’accès à vos finances, un nouveau code d'accès a été généré pour renforcer la sécurité de vos informations financières.
<br />
<br />

<span style={{fontWeight:"bold"}}> Nouveau Code d'Accès aux Finances : {code}</span>
 
            </Text>
            <Text style={paragraph}>
            À Noter :
            <ul>
              <li style={{
  lineHeight: 1.5,
  fontSize: 14,
}}>Ce code est essentiel pour accéder à toutes les fonctionnalités financières de votre compte.</li>
              <li style={{
  lineHeight: 1.5,
  fontSize: 14,
}}>Pour des raisons de sécurité, veillez à ne pas partager ce code avec quiconque.</li>
              <li style={{
  lineHeight: 1.5,
  fontSize: 14,
}}>Ce code peut être modifié à tout moment dans les paramètres de votre compte pour une sécurité accrue.</li>
            </ul>
            </Text>
            <Text style={paragraph}>
            Nous recommandons de changer ce code périodiquement pour maintenir la sécurité de vos informations financières.
            </Text>
            
            
            
            <Text style={paragraph}>
            Si vous n'avez pas demandé de réinitialisation ou si vous avez des questions concernant votre nouveau code d'accès financier, veuillez contacter immédiatement notre équipe d’assistance à support@paymefinance.com.
            </Text>
            <Text style={paragraph}>
            Nous sommes dédiés à protéger vos informations et à vous offrir une expérience sécurisée avec Payme.
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

export default CodeOTPFinance;

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
