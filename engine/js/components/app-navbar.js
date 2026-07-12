import { config } from '../../../assets/js/config.js';

class AppNavbar extends HTMLElement {
  connectedCallback() {
    const { brand, links, dropdown } = config.navbar;
    const base          = this.getAttribute('base') ?? '';
    const dropdownLabel = dropdown?.label ?? null;
    const dropdownItems = dropdown?.items ?? [];

    const resolveHref = href =>
      base && href.startsWith('#') ? `${base}${href}` : href;
    const scrollAttr = href =>
      !base && href.startsWith('#') ? ' data-scroll' : '';

    const linkItems = links.map(({ label, href }) =>
      `<li><a class="nav-link" href="${resolveHref(href)}"${scrollAttr(href)}>${label}</a></li>`
    ).join('');

    const dropItems = dropdownItems.map(item =>
      item.divider
        ? `<li class="nav-dropdown-divider"></li>`
        : `<li><a class="nav-dropdown-item" href="${resolveHref(item.href)}">${item.label}</a></li>`
    ).join('');

    const brandHref = base ? `${base}#home` : '#home';
    const brandScroll = base ? '' : ' data-scroll';

    const dropdownHTML = dropdownLabel ? `
              <li class="nav-dropdown" id="navDropdown">
                <button class="nav-link nav-dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                  ${dropdownLabel}
                  <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                    <path d="M0 0l5 6 5-6z" fill="currentColor"/>
                  </svg>
                </button>
                <ul class="nav-dropdown-menu">${dropItems}</ul>
              </li>` : '';

    this.innerHTML = `
      <nav class="navbar" id="navbar">
        <div class="nav-container">
          <a class="nav-brand" href="${brandHref}"${brandScroll}>${brand}</a>
          <button class="nav-toggler" id="navToggler" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navMenu">
            <span></span><span></span><span></span>
          </button>
          <div class="nav-menu" id="navMenu">
            <ul class="nav-list">
              ${linkItems}
              ${dropdownHTML}
            </ul>
          </div>
        </div>
      </nav>`;

    this._init();
  }

  _init() {
    const toggler  = this.querySelector('#navToggler');
    const menu     = this.querySelector('#navMenu');
    const dropdown = this.querySelector('#navDropdown');

    toggler.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggler.classList.toggle('open', open);
      toggler.setAttribute('aria-expanded', open);
    });

    if (dropdown) {
      const dropBtn = dropdown.querySelector('.nav-dropdown-toggle');
      dropBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = dropdown.classList.toggle('open');
        dropBtn.setAttribute('aria-expanded', open);
      });
      document.addEventListener('click', () => {
        dropdown.classList.remove('open');
        dropBtn.setAttribute('aria-expanded', false);
      });
    }
  }

  /** Close mobile menu — called by app.js after scroll */
  closeMenu() {
    const toggler = this.querySelector('#navToggler');
    const menu    = this.querySelector('#navMenu');
    menu.classList.remove('open');
    toggler.classList.remove('open');
    toggler.setAttribute('aria-expanded', false);
  }

  get navHeight() {
    return this.querySelector('#navbar')?.offsetHeight ?? 0;
  }
}

customElements.define('app-navbar', AppNavbar);
