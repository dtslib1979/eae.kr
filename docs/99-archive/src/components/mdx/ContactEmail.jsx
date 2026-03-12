import { CONTACT_EMAIL, CONTACT_EMAIL_MAILTO } from '../../config/contact';

/**
 * ContactEmail Component
 * 
 * Displays the global contact email with a mailto link.
 * Use this component in MDX files to ensure consistency.
 * 
 * @example
 * <ContactEmail />
 * 
 * @example With custom text
 * For inquiries, please contact us at <ContactEmail />
 */
export default function ContactEmail() {
  return (
    <a 
      href={CONTACT_EMAIL_MAILTO}
      className="text-blue-400 hover:text-blue-300 underline transition-colors"
    >
      {CONTACT_EMAIL}
    </a>
  );
}
