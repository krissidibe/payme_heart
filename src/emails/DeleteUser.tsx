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
  type?: any;
}

const baseUrl = `https://paymefinance.com`;

export const DeleteUser = ({
  user = "",
  enterprise = "",
  type = "",
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
            <Text style={paragraph}>Cher(e) équipe,</Text>
            <Text style={paragraph}>
              Cette notification est générée automatiquement pour vous informer
              de la suppression d'un compte utilisateur dans notre application.
              Veuillez trouver ci-dessous les détails pertinents pour la
              documentation, l'analyse et le suivi conformément à nos procédures
              internes.
            </Text>
            <Text style={paragraph}>
              <span style={{ fontWeight: "bold" }}>
                Détails de l'Utilisateur :
              </span>
            </Text>
            <Text style={paragraph}>
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Nom et Prénom de l'Utilisateur :
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
             
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Raison du Départ :
              </span>
             {type}{" "}
              <br /> <br />
              <span style={{ fontWeight: "bold" }}>Actions Requises :</span>
              <li style={paragraph}>
                Vérifiez et confirmez l'effacement complet des données de
                l'utilisateur conformément aux politiques de confidentialité et
                de conformité de l'entreprise.
              </li>
              <li style={paragraph}>
                Effectuez une analyse des raisons du départ de l'utilisateur
                pour contribuer à l'amélioration continue de l'application.
              </li>
              <li style={paragraph}>
                Mettez à jour les enregistrements internes et les rapports
                d'utilisateurs pour refléter cette suppression.
              </li>
            </Text>

            <Text style={paragraph}>
              <span style={{ fontWeight: "bold" }}>Remarque</span> : Cette
              notification est générée automatiquement. En cas de questions ou
              de besoin d'informations supplémentaires, veuillez contacter le
              gestionnaire de compte ou le service client.
            </Text>
            <Text style={paragraph}>
              Merci pour votre attention rapide et votre action conforme à cette
              notification.
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

export default DeleteUser;

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
