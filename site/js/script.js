// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
}

// Industry tabs
const industries = {
  restaurants: {
    eyebrow: 'Restaurants',
    title: 'Fill empty tables.',
    desc: '25–40% no-show reduction with SMS reminders.',
    cta: 'See Restaurant Solution',
    art: '<svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="118" cy="150" rx="70" ry="14" fill="var(--card-blue)"/><circle cx="118" cy="112" r="46" fill="var(--white)" stroke="var(--ink)" stroke-width="2"/><circle cx="118" cy="112" r="30" fill="none" stroke="var(--border)" stroke-width="2"/><path d="M60 96C58 84 62 74 60 62" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/><path d="M52 62v18M60 62v18M68 62v18" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/><path d="M176 60c-10 6-10 20-2 26-4 10-2 30-2 46" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M96 70c4-8 0-14 4-20M110 66c4-8 0-14 4-20M124 70c4-8 0-14 4-20" stroke="var(--teal)" stroke-width="3" stroke-linecap="round"/><circle cx="188" cy="118" r="22" fill="var(--lime)"/><path d="M180 118l6 6 12-12" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
  },
  healthcare: {
    eyebrow: 'Healthcare',
    title: 'Fewer missed appointments.',
    desc: 'Automated, HIPAA-compliant reminders keep patients on schedule.',
    cta: 'See Healthcare Solution',
    art: '<svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="46" y="46" width="140" height="112" rx="16" fill="var(--white)" stroke="var(--ink)" stroke-width="2"/><rect x="46" y="46" width="140" height="30" rx="16" fill="var(--violet)"/><rect x="72" y="36" width="10" height="20" rx="5" fill="var(--ink)"/><rect x="150" y="36" width="10" height="20" rx="5" fill="var(--ink)"/><path d="M62 122h28l10-24 14 42 12-30 8 12h30" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="176" cy="140" r="24" fill="var(--lime)"/><path d="M176 130v20M166 140h20" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/></svg>'
  },
  realestate: {
    eyebrow: 'Real Estate',
    title: 'Never miss a lead.',
    desc: 'Instant replies to showings, offers, and client questions.',
    cta: 'See Real Estate Solution',
    art: '<svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 108L112 56l62 52" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="66" y="108" width="92" height="58" rx="6" fill="var(--white)" stroke="var(--ink)" stroke-width="2"/><rect x="100" y="128" width="24" height="38" fill="var(--card-blue)" stroke="var(--ink)" stroke-width="2"/><circle cx="136" cy="140" r="9" fill="var(--coral)" stroke="var(--ink)" stroke-width="2"/><rect x="76" y="120" width="16" height="16" fill="var(--teal)" opacity=".7"/><circle cx="182" cy="90" r="26" fill="var(--lime)"/><path d="M172 90h20M182 80v20" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/></svg>'
  },
  salons: {
    eyebrow: 'Salons & Spas',
    title: 'Keep chairs booked.',
    desc: 'Reminders and rebooking prompts that clients actually read.',
    cta: 'See Salon Solution',
    art: '<svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="104" cy="88" r="42" fill="var(--white)" stroke="var(--ink)" stroke-width="2"/><circle cx="104" cy="88" r="30" fill="var(--card-blue)" opacity=".6"/><rect x="99" y="128" width="10" height="40" rx="4" fill="var(--ink)"/><path d="M150 60l30 30M180 60l-30 30" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/><circle cx="150" cy="60" r="7" fill="var(--violet)" stroke="var(--ink)" stroke-width="2"/><circle cx="180" cy="60" r="7" fill="var(--violet)" stroke="var(--ink)" stroke-width="2"/><path d="M60 150l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" fill="var(--lime)"/><path d="M186 130l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="var(--coral)"/></svg>'
  },
  retail: {
    eyebrow: 'Retail',
    title: 'Turn browsers into buyers.',
    desc: 'Flash sales and restock alerts sent straight to their phone.',
    cta: 'See Retail Solution',
    art: '<svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64 82h112l-10 84a10 10 0 0 1-10 9H84a10 10 0 0 1-10-9L64 82z" fill="var(--white)" stroke="var(--ink)" stroke-width="2"/><path d="M86 82c0-20 12-34 34-34s34 14 34 34" stroke="var(--ink)" stroke-width="3" fill="none"/><circle cx="182" cy="66" r="26" fill="var(--lime)"/><circle cx="173" cy="58" r="5" fill="var(--ink)"/><circle cx="191" cy="74" r="5" fill="var(--ink)"/><path d="M172 76l20-20" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/><circle cx="70" cy="150" r="5" fill="var(--teal)"/><circle cx="86" cy="164" r="4" fill="var(--coral)"/><circle cx="60" cy="132" r="3" fill="var(--violet)"/></svg>'
  },
  nonprofits: {
    eyebrow: 'Nonprofits',
    title: 'Reach donors that matter.',
    desc: 'Event reminders and giving campaigns with real reply rates.',
    cta: 'See Nonprofit Solution',
    art: '<svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M118 78c-14-22-52-14-52 12 0 26 30 40 52 58 22-18 52-32 52-58 0-26-38-34-52-12z" fill="var(--coral)" stroke="var(--ink)" stroke-width="2"/><path d="M52 158c10 14 24 22 66 22s56-8 66-22" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M52 158c-6-14 2-26 16-28M184 158c6-14-2-26-16-28" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M40 76l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="var(--lime)"/></svg>'
  }
};

const tabs = document.querySelectorAll('.tab');
const eyebrowEl = document.getElementById('industry-eyebrow');
const titleEl = document.getElementById('industry-title');
const descEl = document.getElementById('industry-desc');
const ctaEl = document.getElementById('industry-cta');
const industryArtEl = document.getElementById('industry-art');
const industryPanelEl = document.getElementById('industry-panel');

function renderIndustry(key) {
  const data = industries[key];
  if (!data) return;
  eyebrowEl.textContent = data.eyebrow;
  titleEl.textContent = data.title;
  descEl.textContent = data.desc;
  ctaEl.textContent = data.cta;
  if (industryArtEl) industryArtEl.innerHTML = data.art;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('active')) return;
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    industryPanelEl.classList.add('is-swapping');
    setTimeout(() => {
      renderIndustry(tab.dataset.industry);
      industryPanelEl.classList.remove('is-swapping');
    }, 180);
  });
});

renderIndustry('restaurants');

// Pricing billing toggle
const toggleBtns = document.querySelectorAll('.toggle-btn');
const amounts = document.querySelectorAll('.amount');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const period = btn.dataset.period;
    amounts.forEach(a => {
      a.textContent = '$' + a.dataset[period];
    });
  });
});

// Channel switcher (Solutions section)
const channels = {
  sms: {
    label: 'SMS',
    num: '80%',
    desc: 'of texts are read within 5 minutes. Every phone gets them — no app download, no account required. SMS is where most businesses start, and it works from day one.'
  },
  whatsapp: {
    label: 'WhatsApp',
    num: '2B+',
    desc: 'users worldwide are on WhatsApp. Hispanic and Latinx communities, international contacts, and younger audiences live there. Same inbox, same dashboard — just another channel your customers already use.'
  },
  rcs: {
    label: 'RCS',
    num: 'Rich',
    desc: 'media on Android — photos, carousels, action buttons — delivered straight to the default messaging app. Falls back to SMS on unsupported devices. No message lost.'
  }
};

const channelRows = document.querySelectorAll('.channel-row');
const channelLabelEl = document.getElementById('channel-stat-label');
const channelNumEl = document.getElementById('channel-stat-num');
const channelDescEl = document.getElementById('channel-stat-desc');

const channelStatEl = document.getElementById('channel-stat');

channelRows.forEach(row => {
  row.addEventListener('click', () => {
    if (row.classList.contains('active')) return;
    channelRows.forEach(r => r.classList.remove('active'));
    row.classList.add('active');
    const data = channels[row.dataset.channel];
    if (!data || !channelLabelEl) return;

    channelStatEl.classList.add('is-swapping');
    setTimeout(() => {
      channelLabelEl.textContent = data.label;
      channelDescEl.textContent = data.desc;
      channelNumEl.textContent = data.num;
      channelNumEl.style.animation = 'none';
      void channelNumEl.offsetWidth;
      channelNumEl.style.animation = '';
      channelStatEl.classList.remove('is-swapping');
    }, 180);
  });
});

// Scroll-reveal animations
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach(el => el.classList.add('in-view'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));
}
