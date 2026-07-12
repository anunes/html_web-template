/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║                  SITE CONFIGURATION                           ║
 * ║                                                               ║
 * ║  This is your control panel. Edit values here to update       ║
 * ║  the site name, navigation links, dropdown menu, and footer   ║
 * ║  across the entire website — no need to touch any other file. ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

export const config = {

  // ── Top Navbar ───────────────────────────────────────────────────
  navbar: {

    /** The brand name shown on the left of the navbar */
    brand: 'SiteKit',

    /**
     * Main navigation links.
     * Each link needs a `label` (text shown) and an `href`.
     * For on-page sections use `#section-id`.
     * For external pages use a full URL like `https://example.com`.
     */
    links: [
      { label: 'Home',    href: '#home'    },
      { label: 'About',   href: '#about'   },
      { label: 'Contact', href: '#contact' },
    ],

    /**
     * Dropdown menu in the navbar.
     * Set `label` to the button text.
     * Add `{ divider: true }` to insert a separator line.
     * Set to `null` to hide the dropdown entirely.
     */
    dropdown: {
      label: 'Services',
      items: [
        { label: 'Web Design',    href: '#' },
        { label: 'Development',   href: '#' },
        { divider: true },
        { label: 'Consulting',    href: '#' },
      ],
    },
  },

  // ── Footer ───────────────────────────────────────────────────────
  footer: {
    /** The year the site / project was started */
    yearStart: 2006,

    /**
     * Domain shown as `@domain` in the footer.
     * Set to an empty string '' to hide it.
     */
    domain: 'nunes.net',
  },

};
