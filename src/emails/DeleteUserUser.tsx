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

interface TwitchResetPasswordEmailProps {
  user?: any;
  enterprise?: any;
}

const baseUrl = `https://paymefinance.com`;

export const DeleteUserUser = ({
  user = "",
  enterprise = "",
}: TwitchResetPasswordEmailProps) => {
  return (
    <Html>
      <Head>
        {" "}
        <Preview>Cher(e) {user.name}</Preview>{" "}
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
            <Text style={paragraph}>Cher(e) {user.name},</Text>
            <Text style={paragraph}>
            Nous vous informons que votre compte associé à Payme a été supprimé avec succès.
            </Text>
            <Text style={paragraph}>
              <span style={{ fontWeight: "bold" }}>
              Détails du compte :
              </span>
            </Text>
            <Text style={paragraph}>
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Nom et Prénom  :
              </span>
              {user.name} <br />
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Nom de l'Entreprise :
              </span>
              {enterprise.name} <br />
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Secteur d'Activité :
              </span>
              {enterprise.activity} <br />
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Contact :
              </span>
              {" "}
              {"+"}
              {JSON.parse(enterprise.numbers)[0]?.indicatif}{" "}
              {JSON.parse(enterprise.numbers)[0]?.number} <br />
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Adresse mail :
              </span>
              {user.email}<br />
             
              
             
              <li style={paragraph}>
              La suppression de votre compte est définitive. Toutes vos données et préférences personnelles ont
été retirées de notre système conformément à nos politiques de confidentialité et de sécurité des
données.
              </li>
              <li style={paragraph}>
              Si cette action n&#39;a pas été initiée par vous, ou si vous avez des préoccupations, veuillez nous
contacter immédiatement à support@paymefinance.com.
              </li>
              <li style={paragraph}>
              Nous sommes désolés de vous voir partir et tenons à vous remercier pour le temps passé avec nous.
Si vous souhaitez nous faire part de vos retours ou si vous envisagez de revenir à l&#39;avenir, notre
porte reste toujours ouverte.
              </li>
            </Text>

            <Text style={paragraph}>
            Nous vous souhaitons le meilleur pour vos projets futurs.
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

export default DeleteUserUser;

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
  fontSize: "12px",
  textDecoration: "underline-none",
};
