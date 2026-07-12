/**
 * app-page  —  Page / section component
 * ─────────────────────────────────────
 * Usage:
 *   <app-page page-id="my-page" title="My Page">
 *     <p>Your content here...</p>
 *   </app-page>
 *
 * Attributes:
 *   page-id  (required) — unique id used for navigation anchors
 *   title    (optional) — heading shown at the top of the page
 */
class AppPage extends HTMLElement {
  connectedCallback() {
    const id    = this.getAttribute('page-id');
    const title = this.getAttribute('title');

    const section     = document.createElement('section');
    section.id        = id;
    section.className = 'section';

    if (title) {
      const h2         = document.createElement('h2');
      h2.className     = 'page-title';
      h2.textContent   = title;
      section.appendChild(h2);
    }

    // Move child content (written by the user) into the section
    while (this.firstChild) section.appendChild(this.firstChild);

    this.appendChild(section);
  }
}

customElements.define('app-page', AppPage);
