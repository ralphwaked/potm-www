import type { IMessage } from "~/data/messages/en";

const fr = {
  Metadata: {
    title: "Production on the Move",
    description:
      "Production on the Move est une maison de production de premier plan basée à Paris, France, offrant des services de production complets pour des clients locaux et internationaux. Contactez-nous pour la production en ligne, la production cinématographique, la production télévisuelle, et plus encore.",
  },

  Home: {
    hero_title: "Production en Mouvement",
    hero_description:
      "Toujours en mouvement pour transformer les idées en créations visuelles exceptionnelles.",
    about_title: "Ce qu'on fait",
    about_description:
      "Notre maison de production audiovisuelle se distingue par son engagement à offrir des services de production complets, répondant aux besoins des clients locaux et internationaux. Nous nous spécialisons dans la garantie d'un processus de production fluide et réussi, de la conception à la réalisation.",
    featured_title: "Projets Phares",
  },

  Contact: {
    title: "Contactez-nous",
      back: "Retour",
      form: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      phone: "Numéro de téléphone",
      message: "Message",
      submit: "Envoyer",
      success: "Merci pour votre message. Nous vous répondrons dès que possible.",
      error: "Une erreur est survenue. Veuillez réessayer plus tard.",
    }
  }
} satisfies IMessage;

export default fr;
