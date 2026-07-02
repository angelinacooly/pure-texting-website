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
    cta: 'See Restaurant Solution'
  },
  healthcare: {
    eyebrow: 'Healthcare',
    title: 'Fewer missed appointments.',
    desc: 'Automated, HIPAA-compliant reminders keep patients on schedule.',
    cta: 'See Healthcare Solution'
  },
  realestate: {
    eyebrow: 'Real Estate',
    title: 'Never miss a lead.',
    desc: 'Instant replies to showings, offers, and client questions.',
    cta: 'See Real Estate Solution'
  },
  salons: {
    eyebrow: 'Salons & Spas',
    title: 'Keep chairs booked.',
    desc: 'Reminders and rebooking prompts that clients actually read.',
    cta: 'See Salon Solution'
  },
  retail: {
    eyebrow: 'Retail',
    title: 'Turn browsers into buyers.',
    desc: 'Flash sales and restock alerts sent straight to their phone.',
    cta: 'See Retail Solution'
  },
  nonprofits: {
    eyebrow: 'Nonprofits',
    title: 'Reach donors that matter.',
    desc: 'Event reminders and giving campaigns with real reply rates.',
    cta: 'See Nonprofit Solution'
  }
};

const tabs = document.querySelectorAll('.tab');
const eyebrowEl = document.getElementById('industry-eyebrow');
const titleEl = document.getElementById('industry-title');
const descEl = document.getElementById('industry-desc');
const ctaEl = document.getElementById('industry-cta');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const data = industries[tab.dataset.industry];
    if (data) {
      eyebrowEl.textContent = data.eyebrow;
      titleEl.textContent = data.title;
      descEl.textContent = data.desc;
      ctaEl.textContent = data.cta;
    }
  });
});

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
