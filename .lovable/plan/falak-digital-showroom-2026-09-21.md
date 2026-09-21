# Falak Digital Showroom

## Goal
Build a complete, cinematic single-page digital showroom for Falak The Bridal Boutique, using the real storefront photograph prominently and excluding all commerce patterns.

## Experience
- Open with a full-screen storefront campaign treatment, minimal overlay navigation, editorial typography, cinematic entrance, slow image movement, and clear collection/visit actions.
- Follow with a large brand statement, then seven collection “rooms” using varied full-bleed and asymmetric compositions rather than product cards.
- Add an editorial masonry lookbook, three full-screen fashion moments, a physical boutique section, “The Search for the One,” Google rating proof, a final visit/contact moment, and a minimal footer.
- Create a distinct mobile presentation with a full-screen menu, strong vertical storytelling, touch-sized controls, and no horizontal overflow.

## Visual System
- Deep charcoal, warm ivory, restrained champagne/muted gold, and sparing burgundy accents.
- High-contrast editorial serif paired with a clean modern sans-serif.
- Sharp, architectural framing with controlled whitespace and restrained detail.
- Generate cohesive bridal campaign imagery for all collection and lookbook placeholders; preserve the supplied storefront image unchanged.

## Interaction and Motion
- Sticky navigation that gains a translucent dark surface while scrolling.
- Smooth anchor navigation, image reveal masks, slow zoom, subtle parallax, clipped text entrances, restrained hover movement, and a desktop cursor accent.
- Respect reduced-motion preferences and avoid heavy effects on smaller devices.
- Make directions, WhatsApp, phone, collection navigation, and the mobile menu functional.

## Technical Details
- Build reusable React/TypeScript sections and data-driven image modules.
- Store the uploaded storefront through the project asset flow and import generated campaign images from the project.
- Use semantic Tailwind design tokens in the global style system; add Framer Motion and Lucide where useful.
- Add page-specific title, description, Open Graph tags, Twitter card metadata, canonical URL, and ClothingStore/LocalBusiness structured data.
- Lazy-load below-the-fold imagery and provide descriptive alt text.
- Verify desktop and mobile rendering, interactions, overflow, and browser console state.
