(() => {
  if (location.pathname !== '/services/fpa/') return;
  const app = document.querySelector('#app');
  const esc = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const list = items => `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  const iconBox = (symbol, title, copy) => `<article><span class="fpa-icon">${icon(symbol)}</span><div><strong>${title}</strong><p>${copy}</p></div></article>`;
  const focusAreas = [
    ['Budgeting', 'Turn revenue, cost and operational assumptions into an agreed financial plan.'],
    ['Financial Forecasting', 'Refresh expected performance as actual results and assumptions change.'],
    ['Cash-Flow Forecasting', 'Build forward visibility over expected receipts, payments and cash requirements.'],
    ['Financial Modelling', 'Explore how different assumptions could affect financial outcomes.'],
    ['Scenario Analysis', 'Compare base, upside and downside cases before decisions are made.'],
    ['Performance Analysis', 'Connect actual results with budgets, forecasts and the drivers behind variances.']
  ];
  const focusHighlights = [
    ['audit', ['Annual Budget Preparation', 'Revenue Budgeting', 'Cost Budgeting'], 'fpa-budgeting'],
    ['chart', ['Revenue Forecasting', 'Cost Forecasting', 'Rolling Forecasts'], 'fpa-forecasting'],
    ['forecast', ['Cash Inflow Forecasting', 'Cash Outflow Forecasting', 'Scenario-Based Cash Forecasting'], 'fpa-cash'],
    ['calculator', ['Integrated Financial Models', 'Revenue Models', 'Scenario Models'], 'fpa-modelling'],
    ['operations', ['Base-Case Scenarios', 'Upside Scenarios', 'Downside Scenarios'], 'fpa-modelling'],
    ['chart', ['Actual vs Budget Analysis', 'Actual vs Forecast Analysis', 'Supporting Commentary'], 'fpa-performance']
  ];
  const challenge = [
    ['Limited Forward Visibility', 'Historical reports alone do not show how current trends and assumptions may affect future financial performance.'],
    ['Disconnected Budgets', 'Budgets can lose value when they are created annually but not connected to ongoing business performance.'],
    ['Outdated Forecasts', 'Plans based on old assumptions may become less useful as trading conditions and business priorities change.'],
    ['Cash-Flow Uncertainty', 'Limited forward-looking cash information can make it harder to anticipate periods of pressure or changing funding requirements.'],
    ['Slow Scenario Analysis', 'Management may struggle to assess the potential financial impact of alternative business decisions quickly.'],
    ['Limited Performance Insight', 'Reporting what happened without analysing drivers can make it difficult to understand why results differ from expectations.'],
    ['Spreadsheet Dependency', 'Complex manual models can become difficult to maintain, review and update as organisations grow.'],
    ['Pressure on Senior Finance Teams', 'CFOs and Finance Directors can spend significant time preparing analysis instead of using it to support strategic decisions.']
  ];
  const challengeBoxes = [
    ['Forward visibility', 'chart', [challenge[0], challenge[2]]],
    ['Connected planning', 'book', [challenge[1], challenge[6]]],
    ['Cash and scenarios', 'forecast', [challenge[3], challenge[4]]],
    ['Performance capacity', 'team', [challenge[5], challenge[7]]]
  ];
  const budgeting = [
    ['Annual Budget Preparation', 'Organise revenue, cost and operational assumptions into a structured financial budget.'],
    ['Revenue Budgeting', 'Translate expected sales, pricing, volumes or other relevant business drivers into financial projections.'],
    ['Cost Budgeting', 'Plan operating expenses and other expected expenditure using agreed assumptions.'],
    ['Departmental Budgeting', 'Build financial plans across relevant departments, entities, locations or business units.'],
    ['Budget Consolidation', 'Combine individual budget inputs into a more complete financial view of the organisation.'],
    ['Rolling Forecasts', 'Regularly update projections using actual performance and revised business assumptions.'],
    ['Budget vs Actual Analysis', 'Compare actual results with planned performance to identify important differences.'],
    ['Forecast Updates', 'Refresh projections when business conditions, assumptions or management expectations change.']
  ];
  const budgetingKeyPoints = [budgeting[0], budgeting[1], budgeting[2], budgeting[5], budgeting[6], budgeting[7]];
  const forecasting = [
    ['Revenue Forecasting', 'Develop projections around future revenue using agreed business assumptions and available performance data.'],
    ['Cost Forecasting', 'Estimate future expenditure and understand how expected cost movements may affect performance.'],
    ['Profitability Forecasting', 'Connect projected revenue and costs to provide greater visibility over potential future profitability.'],
    ['Rolling Forecasts', 'Extend and refresh forecasts periodically rather than relying entirely on a fixed annual budget.'],
    ['Forecast vs Actual Analysis', 'Compare previous projections with actual results to understand differences and improve future planning.'],
    ['Driver-Based Forecasting', 'Where appropriate, connect financial projections to relevant operational or commercial drivers.'],
    ['Multi-Period Forecasting', 'Develop projections across months, quarters or other agreed planning horizons.'],
    ['Forecast Consolidation', 'Bring relevant entity, department or business-unit forecasts into a broader organisational view.']
  ];
  const forecastingKeyPoints = [forecasting[0], forecasting[1], forecasting[2], forecasting[3]];
  const cashFlow = [
    ['Cash Inflow Forecasting', 'Estimate expected cash receipts using available receivables, revenue and other relevant information.'],
    ['Cash Outflow Forecasting', 'Organise expected supplier payments, operating expenditure and other relevant cash requirements.'],
    ['Receivables Integration', 'Use relevant Accounts Receivable information to improve visibility over expected customer cash receipts.'],
    ['Payables Integration', 'Incorporate relevant Accounts Payable information when considering expected cash outflows.'],
    ['Short-Term Cash Forecasting', 'Develop more detailed near-term visibility where the business requires closer cash monitoring.'],
    ['Medium-Term Cash Planning', 'Extend the financial view across a broader planning horizon to support management discussions.'],
    ['Actual vs Forecast Cash Analysis', 'Compare expected cash movements with actual outcomes and identify meaningful differences.'],
    ['Scenario-Based Cash Forecasting', 'Assess how different assumptions could affect the projected cash position.']
  ];
  const cashFlowKeyPoints = [cashFlow[0], cashFlow[1], cashFlow[7]];
  const modelling = [
    ['Integrated Financial Models', 'Connect relevant profit and loss, balance-sheet and cash-flow assumptions within a structured financial model.'],
    ['Revenue Models', 'Analyse how changes in pricing, volumes, customers or other relevant drivers may influence revenue.'],
    ['Cost Models', 'Understand how operating costs could change under different assumptions or business scenarios.'],
    ['Profitability Models', 'Assess how changes in revenue, costs and margins may influence projected profitability.'],
    ['Cash-Flow Models', 'Model potential cash movements across different assumptions and planning periods.'],
    ['Scenario Models', 'Compare alternative assumptions to understand a range of possible financial outcomes.'],
    ['Sensitivity Analysis', 'Test how changes in selected variables may affect financial results.'],
    ['Model Updates', 'Refresh agreed models as actual performance and planning assumptions change.']
  ];
  const modellingKeyPoints = [modelling[0], modelling[1], modelling[2], modelling[3], modelling[4], modelling[5]];
  const scenarios = [
    ['Base-Case Scenarios', 'Model financial outcomes using the organisation\'s central planning assumptions.'],
    ['Upside Scenarios', 'Explore potential results if selected business drivers perform above the base assumptions.'],
    ['Downside Scenarios', 'Assess potential financial outcomes under more challenging assumptions.'],
    ['Sensitivity Testing', 'Change individual assumptions to understand which variables have the greatest potential financial impact.'],
    ['Scenario Comparisons', 'Present alternative financial outcomes in a format that management can review more easily.'],
    ['Cash Impact Analysis', 'Understand how alternative scenarios may influence projected cash requirements.'],
    ['Profitability Impact Analysis', 'Assess how changes in revenue, cost or margin assumptions could influence expected profitability.']
  ];
  const performance = [
    ['Actual vs Budget Analysis', 'Compare current financial performance against agreed budget targets.'],
    ['Actual vs Forecast Analysis', 'Understand how actual results differ from previous financial projections.'],
    ['Revenue Variance Analysis', 'Identify meaningful differences between expected and actual revenue.'],
    ['Cost Variance Analysis', 'Highlight operating expenses that differ materially from the plan.'],
    ['Margin Analysis', 'Review movements in margins and relevant underlying financial drivers.'],
    ['Trend Analysis', 'Compare performance across periods to identify patterns and changes.'],
    ['Exception Reporting', 'Highlight material financial movements that warrant management attention.'],
    ['Supporting Commentary', 'Organise relevant information around significant variances to support management review.']
  ];
  const reportContent = [
    ['Actual Performance', 'Show how the business has performed during the current reporting period.'],
    ['Budget Performance', 'Compare actual financial results with approved budgets.'],
    ['Current Forecast', 'Maintain visibility over the latest view of expected future performance.'],
    ['Revenue Trends', 'Monitor how revenue is developing across relevant reporting periods.'],
    ['Cost Trends', 'Identify important movements in operating expenditure.'],
    ['Margin Performance', 'Track changes in profitability and relevant margin measures.'],
    ['Cash-Flow Outlook', 'Provide forward-looking visibility over expected cash movements.'],
    ['Key Variances', 'Highlight material differences requiring management attention.'],
    ['Scenario Outcomes', 'Present the potential financial effects of alternative assumptions where appropriate.'],
    ['Business KPIs', 'Bring agreed financial and operational indicators into the FP&A reporting environment.']
  ];
  const models = [
    ['FP&A Process Support', 'Outsource specific FP&A activities such as forecasting, budget preparation, financial modelling or variance analysis.', 'Best for: Finance teams that need additional capacity within selected planning and analytical processes.', 'Outsource an FP&A Process'],
    ['Dedicated FP&A Professional', 'Add dedicated offshore FP&A capacity to your existing finance function. Your Finex professional can work with agreed financial information, planning models, reporting cycles and internal finance stakeholders.', 'Best for: Organisations requiring consistent FP&A support without building every analytical role internally.', 'Add FP&A Capacity'],
    ['Managed FP&A Services', 'Create a broader outsourced FP&A model covering multiple planning, forecasting and analysis processes. The scope can include budgeting, forecasting, financial modelling, cash-flow forecasting, scenario analysis, performance reporting and defined governance.', 'Best for: Organisations looking for a scalable and structured FP&A operating model.', 'Discuss Managed FP&A']
  ];
  const audiences = [
    ['Growing Businesses', 'Introduce more structured budgeting, forecasting and financial analysis as the organisation becomes more complex.'],
    ['Corporate Finance Teams', 'Add analytical capacity so senior finance leaders can spend more time interpreting information and supporting business decisions.'],
    ['Private Equity & Portfolio Companies', 'Extend existing planning and analysis capabilities without necessarily building every FP&A role internally.'],
    ['Property Management Companies', 'Support more structured budgeting, forecasting and financial performance analysis across growing portfolio businesses.'],
    ['Care & Multi-Site Organisations', 'Develop more consistent planning and forecasting processes across relevant entities, divisions or business units.'],
    ['Accounting Firms', 'Extend your finance team\'s planning and analytical capability without building every FP&A position internally.']
  ];
  const operatingModel = [
    ['People', 'We review your existing finance environment, management reporting, planning cycles, budgets, forecasts, models and business requirements.'],
    ['Process', 'We define the FP&A activities, reporting outputs, planning timetable, responsibilities, data requirements and review process.'],
    ['Technology', 'Your Finex team works with agreed financial information, models, systems and internal finance stakeholders.'],
    ['Governance', 'The team supports agreed budgeting, forecasting, modelling, variance analysis and FP&A reporting activities.'],
    ['Scalability', 'Models, forecasts and reporting can evolve as actual performance, assumptions and business requirements change.']
  ];
  const processSteps = [
    ['Understand', 'Review the finance environment, reporting, planning cycles, budgets, forecasts, models and requirements.'],
    ['Design', 'Define FP&A activities, outputs, responsibilities, data requirements and review routines.'],
    ['Integrate', 'Work with agreed financial information, models, systems and internal finance stakeholders.'],
    ['Analyse & Forecast', 'Support budgeting, forecasting, modelling, variance analysis and FP&A reporting.'],
    ['Review & Evolve', 'Adapt models, forecasts and reporting as performance, assumptions and requirements change.']
  ];
  const faqs = [
    ['What is financial planning and analysis (FP&A)?', 'Financial planning and analysis (FP&A) is a finance function focused on budgeting, forecasting, financial modelling, performance analysis and other forward-looking activities that help management understand potential financial outcomes and support business planning. It connects historical financial information with assumptions about future performance.'],
    ['What does FP&A stand for?', 'FP&A means Financial Planning & Analysis. It typically refers to the finance activities used to develop budgets and forecasts, analyse performance, model financial scenarios and provide information that supports management planning and decision-making.'],
    ['What do FP&A services include?', 'FP&A services can include budgeting, financial forecasting, cash-flow forecasting, financial modelling, scenario analysis, variance analysis and management reporting. The exact scope depends on the organisation\'s finance structure and planning requirements.'],
    ['What is FP&A outsourcing?', 'FP&A outsourcing involves using an external finance team to perform agreed financial planning and analysis activities. Businesses can outsource selected processes or build a broader outsourced FP&A model while retaining strategic decisions, assumptions and approvals internally.'],
    ['Can FP&A activities be outsourced individually?', 'Yes. Financial planning and analysis activities can be outsourced individually or as part of a broader finance outsourcing model. For example, a company may outsource forecast preparation, modelling and variance analysis while its CFO retains responsibility for strategy and final decisions.'],
    ['What does an outsourced FP&A team do?', 'An outsourced FP&A team can support budgeting, forecasting, cash-flow planning, financial modelling, scenario analysis, variance analysis and regular performance reporting. The responsibilities should be clearly defined around the company\'s existing finance team, systems and decision-making structure.'],
    ['How does FP&A connect with management accounting?', 'Management accounting generally focuses on helping management understand current and historical financial performance through management accounts, KPIs and analysis. FP&A builds on this information to support budgets, forecasts, financial models and forward-looking scenarios. The two functions are closely connected within a mature finance operation.'],
    ['What are financial forecasting services?', 'Financial forecasting services support the preparation and updating of projections around future financial performance. Forecasts may cover revenue, costs, profitability, cash flow and other financial measures using available information and agreed assumptions.'],
    ['What are budgeting and forecasting services?', 'Budgeting and forecasting services help businesses translate plans and assumptions into structured financial projections. Budgets typically establish financial expectations, while forecasts can be updated as actual performance and business assumptions change.'],
    ['What are financial modelling services?', 'Financial modelling services involve creating structured models that help businesses analyse how different financial and operational assumptions could affect potential outcomes. Models can support forecasting, cash-flow planning, scenario analysis, sensitivity analysis and other management planning activities.']
  ];
  const journey = ['What happened?', 'How are we performing?', 'What did we plan?', 'Where are we heading?', 'What could change?', 'What could the impact be?', 'What should management consider?'];
  const gbs = ['Finance Operations', 'Accounting & Bookkeeping', 'Month-End', 'Management Accounting', 'FP&A', 'Controller Support', 'Virtual CFO', 'Dedicated Finance Teams', 'Global Business Services'];
  const linkFor = label => ({'Finance Operations':'/services/finance-operations/','Accounting & Bookkeeping':'/services/accounting-bookkeeping/','Management Accounting':'/services/management-accounting/','FP&A':'/services/fpa/','Virtual CFO':'/services/virtual-cfo/','Dedicated Finance Teams':'/services/dedicated-finance-teams/','Global Business Services':'/global-business-services/'}[label] || '#');
  const featureGrid = (items, className='fpa-feature-grid') => `<div class="${className}">${items.map(([title, copy]) => `<article><strong>${title}</strong><p>${copy}</p></article>`).join('')}</div>`;
  const detailedSection = (className, eyebrow, title, intro, items, close, cta) => `<section id="${className}" class="fpa-section ${className}"><div class="wrap"><div class="fpa-section-head"><div><span class="fo-eyebrow">${eyebrow}</span><h2>${title}</h2></div><p>${intro}</p></div>${featureGrid(items)}<p class="fpa-close">${close}</p>${cta ? `<a class="btn btn-primary" href="/contact/">${cta}</a>` : ''}</div></section>`;

  app.innerHTML = `<div class="fo-page fpa-page">
    <section class="fpa-hero"><div class="wrap fpa-hero-grid"><div class="fpa-hero-copy"><div class="fo-breadcrumb"><a href="/">Home</a><span>/</span><a href="/services/">Services</a><span>/</span>FP&amp;A</div><span class="fo-eyebrow">FINANCIAL PLANNING &amp; ANALYSIS</span><h1>Forward-looking finance for better business decisions.</h1><p class="fpa-lead">Historical financial reporting tells you where the business has been. Financial planning and analysis helps you understand where it could be going - and what may influence the journey.</p><p>Finex provides <strong>FP&amp;A services</strong> that help businesses connect financial data with budgets, forecasts, cash-flow planning, financial models and performance analysis.</p><p>Our offshore FP&amp;A professionals can work alongside your CFO, Finance Director or internal finance team to provide additional analytical capacity without requiring you to build every FP&amp;A capability in-house.</p><div class="fo-actions"><a class="btn btn-primary" href="/contact/">Talk to an FP&amp;A Expert</a><a class="btn fo-ghost" href="/contact/">Discuss Your FP&amp;A Requirements</a></div></div><div class="fpa-dashboard-hero"><div class="fpa-dashboard-title"><span>FP&amp;A DASHBOARD</span><b>Actual &rarr; Decision</b></div><div class="fpa-dashboard-flow"><span>Actual</span><i>&rarr;</i><span>Budget</span><i>&rarr;</i><span>Forecast</span><i>&rarr;</i><span>Scenario</span><i>&rarr;</i><strong>Decision</strong></div><div class="fpa-mini-grid"><div><small>Revenue Forecast</small><b>£ -</b><em class="up">↗</em></div><div><small>Cash Forecast</small><b>£ -</b><em>↗</em></div><div><small>Budget vs Actual</small><b>- %</b><em class="amber">↔</em></div><div><small>Scenario Analysis</small><b>Base</b><em class="violet">◆</em></div></div></div></div><div class="fpa-trust"><div class="wrap"><span>Budgeting</span><span>Financial Forecasting</span><span>Cash-Flow Forecasting</span><span>Financial Modelling</span><span>Scenario Analysis</span><span>Performance Analysis</span></div></div></section>
    <section class="fpa-section fpa-challenge"><div class="wrap"><div class="fpa-section-head"><div><span class="fo-eyebrow">THE FP&amp;A OPPORTUNITY</span><h2>Planning should connect to what is happening in the business.</h2></div><p>Businesses need accurate historical information, but leadership teams also need to understand what may happen next. As organisations grow, financial decisions become increasingly connected to revenue expectations, costs, cash requirements, investment plans and changing business conditions.</p></div><p>Without a structured financial planning and analysis function, businesses can face:</p><div class="fpa-challenge-boxes">${challengeBoxes.map(([title,symbol,items],i)=>`<article><div class="fpa-challenge-card-top"><span class="fpa-icon">${icon(symbol)}</span><em>0${i+1}</em></div><h3>${title}</h3>${items.map(([itemTitle,itemCopy])=>`<p><strong>${itemTitle}</strong><span>${itemCopy}</span></p>`).join('')}</article>`).join('')}</div><p class="fpa-close">Finex's FP&amp;A outsourcing model provides additional capacity for the planning, forecasting and analysis activities that sit between financial reporting and strategic finance leadership. Finex can support individual FP&amp;A processes or provide broader outsourced FP&amp;A capability alongside your existing finance function.</p></div></section>
    <section class="fpa-section fpa-focus"><div class="wrap"><div class="fpa-focus-heading"><span class="fo-eyebrow">OUR CORE FP&amp;A SERVICES</span><h2>Build the planning and <em>analysis capability you need.</em></h2><p>From regular forecasting to scenario analysis, we help turn financial information into forward-looking insight that supports better-informed business decisions.</p><span class="fpa-focus-rule" aria-hidden="true"></span></div><div class="fpa-focus-grid">${focusAreas.map(([title,copy],i)=>{const [symbol,highlights,target]=focusHighlights[i];return `<article class="fpa-focus-card"><div class="fpa-focus-card-head"><span class="fpa-focus-emblem">${icon(symbol)}</span><div><span class="fpa-focus-number">0${i+1}</span><h3>${title}</h3><p>${copy}</p></div><span class="fpa-focus-arrow" aria-hidden="true">&rarr;</span></div><div class="fpa-focus-highlights">${highlights.map(label=>`<span><i>${icon('audit')}</i>${label}</span>`).join('')}</div><a class="fpa-focus-more" href="#${target}">Learn More <span aria-hidden="true">&rarr;</span></a></article>`;}).join('')}</div></div></section>
    <section id="fpa-budgeting" class="fpa-section fpa-budgeting fpa-planning"><div class="wrap fpa-planning-grid"><div><h2>Keep financial plans connected to performance.</h2><p>Budgets establish expectations. Forecasts help those expectations evolve as actual performance and business conditions change. Finex can provide budgeting and forecasting services designed around your reporting structure and planning requirements.</p><p>A stronger budgeting and forecasting process keeps financial plans connected to the way the business is actually performing.</p><a class="btn btn-primary" href="/contact/">Discuss Budgeting &amp; Forecasting</a></div><div class="fpa-planning-points">${budgetingKeyPoints.map(([title],i)=>`<span><small>0${i+1}</small>${title}</span>`).join('')}</div></div></section>
    <section id="fpa-forecasting" class="fpa-section fpa-forecasting fpa-forecast-split"><div class="wrap fpa-forecast-split-grid"><div class="fpa-forecast-image"><img src="/assets/finex-management-accounts.png" alt="Finance professionals reviewing forecasts and business performance"></div><div class="fpa-forecast-copy"><h2>A forecast should evolve as your business evolves.</h2><p>Finex's financial forecasting services can help businesses maintain a structured view of expected financial performance using available historical information and agreed forward-looking assumptions.</p><div class="fpa-forecast-points">${forecastingKeyPoints.map(([title,copy])=>`<div><strong>${title}</strong><span>${copy}</span></div>`).join('')}</div><p class="fpa-forecast-close">Forecasts are not guarantees of future performance. They are structured planning tools built around available information and assumptions.</p></div></div></section>
    <section id="fpa-cash" class="fpa-section fpa-cash fpa-cash-models"><div class="wrap"><div class="fpa-section-head"><div><span class="fo-eyebrow">CASH-FLOW FORECASTING</span><h2>Build greater visibility over expected cash movements.</h2></div><p>Profitability and liquidity are different. A business can report profits while still experiencing periods of cash pressure. Finex provides cash flow forecasting services that can help finance teams develop greater forward visibility over expected cash movements.</p></div><div class="fpa-cash-model-grid">${cashFlowKeyPoints.map(([title,copy],i)=>`<article><span>0${i+1} / CASH-FLOW SUPPORT</span><h3>${title}</h3><p>${copy}</p><small>${['Best for: building visibility over expected customer cash receipts.','Best for: planning expected supplier payments and operating cash requirements.','Best for: reviewing how changing assumptions could affect the projected cash position.'][i]}</small></article>`).join('')}</div><p class="fpa-close">Cash-flow forecasts are based on assumptions and available information and should be reviewed as conditions change.</p><a class="btn btn-primary" href="/contact/">Discuss Cash-Flow Forecasting</a></div></section>
    <section class="fpa-visual-band fpa-cash-visual"><div class="wrap"><span class="fo-eyebrow">CASH-FLOW OUTLOOK</span><h2>See the movement behind the projected closing cash position.</h2><div class="fpa-visual-flow"><span>Opening Cash</span><b>&rarr;</b><span>Expected Inflows</span><b>&rarr;</b><span>Expected Outflows</span><b>&rarr;</b><strong>Forecast Closing Cash</strong></div></div></section>
    <section id="fpa-modelling" class="fpa-section fpa-modelling fpa-modelling-list"><div class="wrap"><div class="fpa-section-head"><div><span class="fo-eyebrow">FINANCIAL MODELLING</span><h2>Explore how assumptions could affect financial outcomes.</h2></div><p>Financial models allow management teams to explore how different assumptions could affect financial outcomes. Finex's financial modelling services can support structured models built around agreed business questions and available information.</p></div><div class="fpa-modelling-grid">${modellingKeyPoints.map(([title,copy])=>`<article><strong>${title}</strong><p>${copy}</p></article>`).join('')}</div><p class="fpa-close">The objective is not to predict the future with certainty. It is to give decision-makers a structured way to understand the financial implications of different assumptions.</p></div></section>
    ${detailedSection('fpa-performance','PERFORMANCE ANALYSIS','Connect actual performance with the plan.', 'FP&amp;A is not only about forecasting. It also connects actual performance with budgets and previous forecasts to help management understand where results differ from expectations. Finex can support:', performance, 'This connects Management Accounting with the forward-looking FP&amp;A process.', null)}
    <section class="fpa-section fpa-governance"><div class="wrap"><div class="fpa-section-head"><div><span class="fo-eyebrow">YOUR DECISIONS STAY WITH YOU</span><h2>Finex provides the analytical capacity. Your management team remains in control of the decisions.</h2></div><p>Strategic decisions, commercial assumptions, investment decisions, risk decisions, final budget approval and business ownership remain with authorised internal decision-makers.</p></div><div class="fpa-governance-grid">${[['Strategic Decisions','Management remains responsible for determining business strategy and priorities.'],['Commercial Assumptions','Your organisation determines the assumptions used in important business plans.'],['Investment Decisions','Capital allocation and investment decisions remain with authorised decision-makers.'],['Risk Decisions','Leadership retains responsibility for business risk and strategic responses.'],['Final Budget Approval','Internal management retains authority over approved budgets.'],['Business Ownership','Your leadership team remains accountable for business outcomes.']].map(([title,copy])=>`<article><strong>${title}</strong><p>${copy}</p></article>`).join('')}</div></div></section>
    <section class="fpa-section fpa-audiences"><div class="wrap"><div class="fpa-section-head"><div><span class="fo-eyebrow">WHO WE SUPPORT</span><h2>FP&amp;A support for different organisations.</h2></div></div><div class="fpa-audience-grid">${audiences.map(([title,copy])=>`<article><strong>${title}</strong><p>${copy}</p></article>`).join('')}</div></div></section>
    <section class="fpa-section fpa-process"><div class="wrap"><div class="fpa-section-head"><div><span class="fo-eyebrow">A CONTROLLED TRANSITION</span><h2>How FP&amp;A outsourcing works.</h2></div><p>Introduce structured planning and analysis while keeping scope, responsibilities, assumptions and approvals clearly defined.</p></div><div class="fpa-process-grid">${processSteps.map(([title,copy], i)=>`<article><span>0${i+1}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div><a class="fo-text-link" href="/how-it-works/">See How Finex Works <span aria-hidden="true">&rarr;</span></a></div></section>
    <section class="fpa-final"><div class="wrap"><span class="fo-eyebrow">READY TO BUILD FORWARD-LOOKING CAPACITY?</span><h2>Make planning and analysis work harder for your business.</h2><p>Whether you need FP&amp;A services, budgeting and forecasting, cash-flow forecasting, financial modelling or dedicated FP&amp;A capacity, Finex can build an outsourcing model around your existing finance function.</p><div class="fo-actions"><a class="btn btn-primary" href="/contact/">Talk to Our FP&amp;A Team</a><a class="btn fo-ghost" href="/contact/">Book a Consultation</a></div></div></section>
    <section class="fpa-section fpa-faq"><div class="wrap"><div class="fpa-section-head"><div><span class="fo-eyebrow">FREQUENTLY ASKED QUESTIONS</span><h2>Financial planning and analysis, explained.</h2></div></div><div class="fpa-faq-list">${faqs.map(([question, answer]) => `<details><summary>${esc(question)}<span aria-hidden="true">+</span></summary><p>${esc(answer)}</p></details>`).join('')}</div></div></section>
  </div>`;
  const faq = app.querySelector('.fpa-faq');
  const sharedBands = document.querySelector('.shared-site-bands');
  if (sharedBands && faq) faq.before(sharedBands);
  document.title = 'Financial Planning & Analysis (FP&A) Services | Finex';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = 'FP&A services and outsourcing from Finex covering budgeting, forecasting, cash-flow forecasting, financial modelling, scenario analysis and performance reporting.';
  const addSchema = (id, data) => { const script = document.createElement('script'); script.type = 'application/ld+json'; script.id = id; script.textContent = JSON.stringify(data); document.head.appendChild(script); };
  addSchema('fpa-service-schema', { '@context':'https://schema.org', '@type':'Service', name:'Financial Planning & Analysis (FP&A) Services', description:'FP&A services covering budgeting, forecasting, cash-flow forecasting, financial modelling, scenario analysis, variance analysis and management reporting.', provider:{'@type':'Organization',name:'Finex Outsourcing',url:'https://staging-finexoutsourcing-test.vercel.app/'}, serviceType:'Financial Planning & Analysis Services', areaServed:'Worldwide', url:'https://staging-finexoutsourcing-test.vercel.app/services/fpa/' });
  addSchema('fpa-faq-schema', { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:faqs.map(([question, answer]) => ({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}})) });
})();
