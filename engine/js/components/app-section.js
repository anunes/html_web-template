class AppSection extends HTMLElement {
  connectedCallback() {
    const id    = this.getAttribute('section-id');
    const title = this.getAttribute('title');

    const section  = document.createElement('section');
    section.id        = id;
    section.className = 'section';

    const h2 = document.createElement('h2');
    h2.textContent = title;
    section.appendChild(h2);

    // Move existing child nodes (paragraph content) into the section
    while (this.firstChild) section.appendChild(this.firstChild);

    this.appendChild(section);
  }
}

customElements.define('app-section', AppSection);
