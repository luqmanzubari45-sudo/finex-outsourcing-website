(() => {
  const app = document.querySelector('#app');
  const enquirySection = '';
  const stats = [
    ['150+', 'Accounting Professionals'],
    ['15+', 'Years Experience'],
    ['100+', 'UK Clients Supported'],
    ['4+', 'Global Offices'],
    ['60%+', 'Staff Cost Savings'],
    ['95%+', 'Client Retention']
  ];
  const strengths = [
    ['Dedicated Teams', 'Your own skilled professionals who understand your firm and your clients.'],
    ['UK Accounting Expertise', 'Deep knowledge of UK GAAP, HMRC requirements and practice workflows.'],
    ['GDPR Compliance', 'Strict data protection standards to keep your firm and clients secure.'],
    ['ISO 27001 Security', 'Information security practices aligned with global standards.'],
    ['Flexible Scaling', 'Scale up or down with ease as your workload and deadlines change.'],
    ['Significant Cost Savings', 'Reduce overheads and increase profitability with efficient outsourcing.']
  ];
  const partners = [
    ['ZH', 'Zohaib Hassan Raza', 'FCCA, FCA', 'zohaib@finexoutsourcing.com'],
    ['AM', 'Ahmed Malik', 'FCCA', 'ahmed@finexoutsourcing.com'],
    ['SG', 'Salman Gillani', 'ACCA', 'salman@finexoutsourcing.com']
  ];
  app.innerHTML = `<div class="co-page">
    <section class="co-hero"><div class="wrap co-hero-grid"><div><div class="co-breadcrumb"><a href="/">Home</a><span>/</span>Contact Us</div><span class="co-kicker">FINEX OUTSOURCING</span><h1>Come Aspire<br><em>with Us.</em></h1><p>At FineX Outsourcing, in short for financial excellence, we are passionate about providing high-quality support and solutions to our clients at reasonable costs. We seek to build strategic partnerships with our clients to help them maximize their profitability and productivity in the most cost-efficient manner.</p><div class="co-hero-actions"><a class="btn btn-primary" href="#get-in-touch">Book Free Consultation <span>↗</span></a><a class="btn co-ghost" href="#meet-our-team">Meet Our Team <span>↓</span></a></div><div class="co-hero-proof"><span><b>ESTABLISHED</b> 2015</span><span><b>COMPLIANCE</b> ISO 27001 · GDPR</span></div></div><div class="co-hero-image"><img src="/assets/finex-team-collaboration.png" alt="Finex finance professionals collaborating" loading="eager"><div class="co-image-label"><span>THE FINEX APPROACH</span><strong>People. Precision.<br>Partnership.</strong></div></div></div></section>
    <section class="co-stats"><div class="wrap co-stats-grid">${stats.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('')}</div></section>
    <section class="co-section"><div class="wrap co-story-grid"><div><span class="co-eyebrow">OUR STORY</span><h2>A partnership built for long-term growth.</h2><p>We at FineX understand what it takes to run an accountancy firm and the importance of high-quality deliverables. Our partners are ex-PwC, Deloitte, KPMG and Grant Thornton employees. A dedicated team of designated and experienced professionals works with you to provide high-quality deliverables for your engagements.</p><ul class="co-checks"><li>Accountants who understand your world</li><li>Processes built for accuracy and compliance</li><li>Technology that keeps you secure and informed</li><li>Partnerships focused on performance and growth</li></ul></div><div class="co-story-art"><div class="co-story-art-inner"><span>FINEX / FINANCIAL EXCELLENCE</span><strong>We help firms create the capacity to do their best work.</strong><i>01 — PEOPLE<br>02 — PROCESS<br>03 — TECHNOLOGY<br>04 — TRUST</i></div></div></div></section>
    <section class="co-section co-soft"><div class="wrap"><div class="co-section-heading"><span class="co-eyebrow">OUR DIRECTION</span><h2>Our Mission & Vision</h2></div><div class="co-purpose-grid"><article><span>01 / OUR MISSION</span><h3>Empower better delivery.</h3><p>To empower accounting firms with highly skilled professionals, smart workflows and secure technology—delivering quality, efficiency and scalability.</p></article><article><span>02 / OUR VISION</span><h3>Become the trusted partner.</h3><p>To be the most trusted outsourcing partner for UK accounting firms—known for our people, our standards and the value we create together.</p></article></div></div></section>
    <section class="co-section"><div class="wrap"><div class="co-section-heading"><span class="co-eyebrow">WHY CHOOSE US?</span><h2>Expertise. Security. Scalability.</h2></div><div class="co-strength-grid">${strengths.map(([title, description], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${description}</p></article>`).join('')}</div></div></section>
    <section class="co-section co-team-section" id="meet-our-team"><div class="wrap"><div class="co-section-heading"><span class="co-eyebrow">OUR TEAM MEMBERS</span><h2>Meet our Partners</h2><p>Experienced professionals who take ownership of the work and the relationship.</p></div><div class="co-team-grid">${partners.map(([initials, name, qualification, email]) => `<article><div class="co-avatar" aria-hidden="true">${initials}</div><h3>${name}</h3><span class="co-qualification">${qualification}</span><a href="mailto:${email}">${email}</a></article>`).join('')}</div></div></section>
    <section class="co-join"><div class="wrap"><div><span class="co-eyebrow">JOIN OUR TEAM</span><h2>Grow your career with FineX.</h2><p>Join a team that values expertise, ownership and meaningful client work.</p></div><a class="btn btn-light" href="/careers/">Start Now <span>↗</span></a></div></section>
    <div id="get-in-touch">${enquirySection}</div>
  </div>`;
  const heroImage = app.querySelector('.co-hero-image img');
  heroImage.src = '/assets/finex-about-hero.jpg';
  heroImage.alt = 'Illustrative finance team collaborating in a London office';
  const mobileVisual = document.createElement('div');
  mobileVisual.className = 'co-mobile-visual';
  mobileVisual.innerHTML = '<img src="/assets/finex-about-hero.jpg" alt="Illustrative finance team collaborating in a London office"><span>PEOPLE · PRECISION · PARTNERSHIP</span>';
  app.querySelector('.co-hero h1').insertAdjacentElement('afterend', mobileVisual);
  app.querySelector('.co-breadcrumb').innerHTML = '<a href="/">Home</a><span>/</span>About Us';
  app.querySelector('.co-hero-actions a:first-child').href = '/contact/';
  const partnerProfiles = [
    { photo: '/assets/partner-zohaib.png', linkedin: 'https://www.linkedin.com/in/zohaibraza/' },
    { photo: '/assets/partner-ahmed.png', linkedin: 'https://www.linkedin.com/in/ahmed-malik-fcca-934a7616/' },
    { photo: '/assets/partner-salman.png', linkedin: 'https://linkedin.com/in/s-g-390626247' }
  ];
  app.querySelectorAll('.co-team-grid article').forEach((card, index) => {
    const profile = partnerProfiles[index];
    const name = partners[index][1];
    card.querySelector('.co-avatar').outerHTML = `<div class="co-partner-photo"><img src="${profile.photo}" alt="Portrait of ${name}" loading="lazy"></div>`;
    card.insertAdjacentHTML('beforeend', `<a class="co-partner-linkedin" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="${name} on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.04 18.75H5.06V9.2h2.98v9.55ZM6.55 7.9a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46Zm12.2 10.85h-2.98V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.45V9.2h2.86v1.3h.04c.4-.75 1.37-1.55 2.82-1.55 3.02 0 3.58 1.99 3.58 4.57v5.23Z"/></svg></a>`);
  });
  app.querySelector('#get-in-touch').outerHTML = '<section class="co-about-cta"><div class="wrap"><span class="co-eyebrow">LET’S WORK TOGETHER</span><h2>Build a stronger finance operation with Finex.</h2><p>Tell us where you need capacity, control or specialist support. We’ll help you shape a practical next step.</p><a class="btn btn-primary" href="/contact/">Book Free Consultation <span>↗</span></a></div></section>';
  const page = app.querySelector('.co-page');
  const hero = page.querySelector('.co-hero');
  const scaleStats = page.querySelector('.co-stats');
  const [company, purpose, strengthsSection, leadership] = page.querySelectorAll(':scope > .co-section');
  const join = page.querySelector('.co-join');
  const contact = page.querySelector('.co-about-cta');
  company.id = 'company';
  company.querySelector('.co-eyebrow').textContent = '01 / COMPANY';
  purpose.querySelector('.co-eyebrow').textContent = 'OUR PURPOSE';
  leadership.querySelector('.co-eyebrow').textContent = '02 / LEADERSHIP';
  leadership.querySelector('.co-section-heading p').textContent = 'Meet the partners who guide our work and client relationships.';
  strengthsSection.remove();

  const sectionNav = document.createElement('nav');
  sectionNav.className = 'co-section-nav';
  sectionNav.setAttribute('aria-label', 'About Us sections');
  sectionNav.innerHTML = `<div class="wrap"><span>EXPLORE FINEX</span><div class="co-section-nav-links"><a href="#company">Company</a><a href="#meet-our-team">Leadership</a><a href="#delivery-centres">Delivery centres</a><a href="#security">Security</a><a href="#qualifications">Qualifications</a><a href="#scale">Scale</a></div></div>`;

  const delivery = document.createElement('section');
  delivery.className = 'co-section co-delivery';
  delivery.id = 'delivery-centres';
  delivery.innerHTML = `<div class="wrap co-delivery-grid"><div><span class="co-eyebrow">03 / DELIVERY CENTRES</span><h2>Connected teams. Consistent delivery.</h2><p>Our delivery model combines a UK-established business with remote accounting professionals and coordinated workflows. Your dedicated team works within your systems and processes, with clear ownership and communication.</p><div class="co-delivery-points"><div><strong>01</strong><span>Dedicated professionals aligned to your firm</span></div><div><strong>02</strong><span>Cloud-based collaboration and secure access</span></div><div><strong>03</strong><span>Flexible capacity as your workload changes</span></div></div></div><div class="co-delivery-visual" aria-label="Illustration of connected finance delivery"><div class="co-delivery-orbit"><span>FINEX</span><i class="co-orbit-node co-orbit-one">CLIENTS</i><i class="co-orbit-node co-orbit-two">TEAMS</i><i class="co-orbit-node co-orbit-three">SYSTEMS</i></div><p>One coordinated way of working, wherever your team is based.</p></div></div></section>`;

  const security = document.createElement('section');
  security.className = 'co-section co-security';
  security.id = 'security';
  security.innerHTML = `<div class="wrap"><div class="co-section-heading"><span class="co-eyebrow">04 / SECURITY</span><h2>Built around trust and control.</h2><p>Financial information needs careful handling. Our working approach brings together secure systems, documented processes and clear accountability.</p></div><div class="co-info-grid"><article><span>01 / INFORMATION SECURITY</span><h3>ISO 27001 practices</h3><p>Information security management practices designed to protect sensitive client work.</p></article><article><span>02 / DATA PROTECTION</span><h3>GDPR awareness</h3><p>Privacy-conscious handling of personal and financial data across day-to-day delivery.</p></article><article><span>03 / WORKFLOW CONTROL</span><h3>Reviewable processes</h3><p>Defined access, oversight and review points help keep engagements organised and accountable.</p></article></div></div></section>`;

  const qualifications = document.createElement('section');
  qualifications.className = 'co-section co-qualifications';
  qualifications.id = 'qualifications';
  qualifications.innerHTML = `<div class="wrap co-qualification-layout"><div><span class="co-eyebrow">05 / QUALIFICATIONS</span><h2>Qualified people who know your world.</h2><p>Our partner team brings recognised accountancy qualifications and experience shaped by major professional-services firms. We pair that expertise with training in the workflows and software our clients use.</p><a href="#meet-our-team" class="co-text-link">Meet our partners <span aria-hidden="true">↗</span></a></div><div class="co-credential-list"><div><strong>ACCA / FCCA</strong><span>Professional accountancy qualifications represented across our leadership</span></div><div><strong>FCA / ICAEW</strong><span>Chartered accountancy expertise and UK practice knowledge</span></div><div><strong>UK accounting workflows</strong><span>Support shaped around firm processes, reporting and deadlines</span></div><div><strong>Cloud accounting tools</strong><span>Teams working within client-selected systems and technology stacks</span></div></div></div></section>`;

  const scaleHeading = document.createElement('section');
  scaleHeading.className = 'co-scale-heading';
  scaleHeading.id = 'scale';
  scaleHeading.innerHTML = `<div class="wrap"><span class="co-eyebrow">06 / SCALE</span><h2>Capacity to grow with you.</h2><p>Build a dedicated team, add support for busy periods and keep delivery moving as your client base or finance operation evolves.</p></div>`;
  scaleStats.remove();
  page.append(hero, sectionNav, company, purpose, leadership, delivery, security, qualifications, scaleHeading, join, contact);
  page.insertBefore(document.querySelector('.shared-site-bands'), join);
  document.title = 'About Us | Finex Outsourcing';
  document.querySelector('meta[name="description"]').content = 'Explore Finex Outsourcing: our company, leadership, delivery model, security, qualifications and scale.';
  bind();
})();
