export const SITE_URL = "https://sitechauffeur.fr";
export const COMPANY_NAME = "SiteChauffeur";
export const WHATSAPP_NUMBER = "33750978900";
export const WHATSAPP_LINK = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
export const CONTACT_EMAIL = "movevtc.fr@gmail.com";
