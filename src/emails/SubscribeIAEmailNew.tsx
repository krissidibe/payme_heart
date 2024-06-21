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
            <Text style={paragraph}>Cher(e) {username},</Text>
            <Text style={paragraph}>
              Nous tenons à vous remercier pour votre confiance en notre
              service. Vous avez souscrit avec succès à notre plan d'abonnement
              de {subscribe.month} Mois le{" "}
              {format(
                new Date(subscribe.createdAt).toString(),
                "dd/MM/yyyy HH:mm"
              )}
              . Votre numéro de référence de facture est :  <span style={{ fontWeight: "bold" }}>{subscribe.reference}</span> 
              .
            </Text>
            <Text style={paragraph}>
              Voici un récapitulatif de votre abonnement :
            </Text>
            <Text style={paragraph}>
              <span style={{ fontWeight: "bold" , marginRight:"3px" }}>Plan d'abonnement :</span>
              {subscribe.month} Mois
              <br />
              <span style={{ fontWeight: "bold" , marginRight:"3px" }}>Date de souscription :</span>
              {format(
                new Date(subscribe.createdAt).toString(),
                "dd/MM/yyyy"
              )}{" "}
              <br />
              <span style={{ fontWeight: "bold" , marginRight:"3px" }}>
                Date d'expiration de l'abonnement :
              </span>
              {format(
                new Date(subscribe.createdAt).setMonth(
                  new Date(subscribe.createdAt).getMonth() +
                    parseInt(subscribe.month)
                ),
                "dd/MM/yyyy"
              )}{" "}
              <br />
              Votre abonnement est actif et vous donne accès à toutes les
              fonctionnalités incluses dans le plan que vous avez choisi. Nous
              espérons que vous tirerez le meilleur parti de notre service pour
              atteindre vos objectifs professionnels.
            </Text>
            <Text style={paragraph}>
              Si vous avez des questions, des préoccupations ou besoin d'une
              assistance quelconque, n'hésitez pas à nous contacter à
              support@paymefinance.com ou en répondant à ce e-mail. Nous sommes
              là pour vous aider.
            </Text>
            <Text style={paragraph}>
              Encore une fois, merci de faire partie de notre communauté. Nous
              sommes impatients de vous fournir un excellent service tout au
              long de votre abonnement.
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
