import { config } from '../../../assets/js/config.js';

class AppFooter extends HTMLElement {
  connectedCallback() {
    const { yearStart, domain } = config.footer;
    const yearNow   = new Date().getFullYear();
    const yearRange = yearNow > yearStart ? `${yearStart}–${yearNow}` : yearStart;

    this.innerHTML = `
      <footer class="site-footer">
        <div class="nav-container">
          <p>&copy; ${yearRange}${domain ? ` <a href="https://${domain}" target="_blank" rel="noopener">@${domain}</a>` : ''}</p>
        </div>
      </footer>`;
  }
}

customElements.define('app-footer', AppFooter);
