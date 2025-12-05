# Global Contact Email Configuration

## Overview

This site uses a centralized contact email configuration to ensure consistency across all pages and content. The global contact email is: **dimas@dtslib.com**

## Implementation

### Configuration File

Location: `src/config/contact.js`

```javascript
export const CONTACT_EMAIL = "dimas@dtslib.com";
export const CONTACT_EMAIL_MAILTO = `mailto:${CONTACT_EMAIL}`;
```

### Usage in React Components

```javascript
import { CONTACT_EMAIL, CONTACT_EMAIL_MAILTO } from '../config/contact';

// Use in JSX
<a href={CONTACT_EMAIL_MAILTO}>{CONTACT_EMAIL}</a>
```

### Usage in MDX Files

The `ContactEmail` component is globally available in all MDX files (no import needed):

```mdx
**Contact:** <ContactEmail />
```

This renders as a styled link: [dimas@dtslib.com](mailto:dimas@dtslib.com)

## Rules

⚠️ **IMPORTANT**: Do NOT hardcode email addresses anywhere in the codebase.

✅ **DO**:
- Use `CONTACT_EMAIL` and `CONTACT_EMAIL_MAILTO` from `src/config/contact.js` in React components
- Use `<ContactEmail />` component in MDX files
- Update `src/config/contact.js` if the contact email needs to change

❌ **DON'T**:
- Hardcode email addresses in components, pages, or MDX files
- Use any email addresses other than `dimas@dtslib.com`
- Create new email configuration files

## Files Updated

- `src/config/contact.js` - Global configuration
- `src/components/mdx/ContactEmail.jsx` - Reusable component
- `src/components/mdx/index.js` - Component export
- `src/pages/About.jsx` - Contact section
- `src/content/eae-blueprint/eduart-engineer-blueprint-parksy-os-v1.mdx`
- `src/content/eae-blueprint/2ndtest.mdx`
- `src/content/phl/blueprint.mdx`
- `개발-진단-보고서.md` - Documentation

## Maintenance

To change the site-wide contact email in the future:

1. Edit `src/config/contact.js`
2. Update the `CONTACT_EMAIL` constant
3. Rebuild and deploy

All references will automatically update.
