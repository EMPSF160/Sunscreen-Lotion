/**
 * SOLVÉA - Master JavaScript Interactions & State Management
 */

// State Management
const SolveaState = {
  cart: JSON.parse(localStorage.getItem('solvea_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('solvea_wishlist') || '[]'),
  currentUV: 7.4, // Live simulation index
  quizAnswers: {},
  activeFilter: 'all'
};

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initCartUI();
  initWishlistUI();
  initUVTracker();
  initSearch();
  initQuiz();
  initQuickFilters();
  initProductCards();
  initMobileNav();
});

/* ==========================================================================
   Cart System
   ========================================================================== */
function addToCart(productId, qty = 1, isSubscription = false, frequency = '60-days') {
  const product = SOLVEA_DATA.products.find(p => p.id === productId);
  if (!product) return;

  const itemPrice = isSubscription ? product.subscriptionPrice : product.price;
  const existingIndex = SolveaState.cart.findIndex(item => item.id === productId && item.isSubscription === isSubscription);

  if (existingIndex > -1) {
    SolveaState.cart[existingIndex].qty += qty;
  } else {
    SolveaState.cart.push({
      id: product.id,
      name: product.name,
      subTitle: product.subTitle,
      price: itemPrice,
      originalPrice: product.price,
      isSubscription: isSubscription,
      frequency: frequency,
      image: product.image,
      spf: product.spfLevel,
      qty: qty
    });
  }

  saveCart();
  renderCartDrawer();
  openCartDrawer();
  showToast(`Added ${product.name} to your bag`);
}

function updateCartQty(index, delta) {
  if (!SolveaState.cart[index]) return;
  SolveaState.cart[index].qty += delta;
  if (SolveaState.cart[index].qty <= 0) {
    SolveaState.cart.splice(index, 1);
  }
  saveCart();
  renderCartDrawer();
}

function removeCartItem(index) {
  SolveaState.cart.splice(index, 1);
  saveCart();
  renderCartDrawer();
  showToast('Item removed from bag');
}

function saveCart() {
  localStorage.setItem('solvea_cart', JSON.stringify(SolveaState.cart));
  updateCartBadge();
}

function updateCartBadge() {
  const totalCount = SolveaState.cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });
  document.querySelectorAll('.mobile-cart-badge').forEach(badge => {
    badge.textContent = totalCount;
  });
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const shippingMsgEl = document.getElementById('cart-shipping-msg');
  const progressBar = document.getElementById('cart-shipping-progress');

  if (!container) return;

  if (SolveaState.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--c-carbon-light);">🛍️</div>
        <h4 style="font-weight: 700; margin-bottom: 0.5rem;">Your Clean Science Bag is Empty</h4>
        <p style="font-size: 0.88rem; color: var(--c-carbon-muted); margin-bottom: 1.5rem;">Discover our dermatologist-backed SPF protection.</p>
        <a href="shop.html" class="btn-solvea btn-primary-solar btn-sm">Explore Sunscreens</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (progressBar) progressBar.style.width = '0%';
    if (shippingMsgEl) shippingMsgEl.innerHTML = 'Add <strong>$45.00</strong> more for Free Shipping';
    return;
  }

  let subtotal = 0;
  let itemsHTML = '';

  SolveaState.cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    itemsHTML += `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div style="font-size: 0.74rem; color: var(--c-carbon-muted); margin-bottom: 4px;">
            ${item.isSubscription ? `<span class="badge-clinical badge-solar" style="font-size: 0.65rem; padding: 2px 6px;">Auto-Delivery (${item.frequency})</span>` : 'One-Time Order'}
          </div>
          <div class="cart-item-price">$${item.price.toFixed(2)} ${item.isSubscription ? '<span style="font-size: 0.75rem; text-decoration: line-through; color: #999;">$' + item.originalPrice.toFixed(2) + '</span>' : ''}</div>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="updateCartQty(${idx}, -1)">-</button>
              <span class="cart-qty-val">${item.qty}</span>
              <button class="cart-qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
            </div>
            <button onclick="removeCartItem(${idx})" style="background:none; border:none; color: #999; font-size: 0.8rem; cursor:pointer; text-decoration: underline;">Remove</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = itemsHTML;
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  // Free shipping threshold: $45
  const threshold = 45;
  if (shippingMsgEl && progressBar) {
    if (subtotal >= threshold) {
      shippingMsgEl.innerHTML = `🎉 You have unlocked <strong>FREE Standard Shipping</strong>!`;
      progressBar.style.width = '100%';
      progressBar.style.backgroundColor = '#52B788';
    } else {
      const needed = (threshold - subtotal).toFixed(2);
      const pct = Math.min(100, (subtotal / threshold) * 100);
      shippingMsgEl.innerHTML = `Add <strong>$${needed}</strong> more to unlock <strong>FREE Shipping</strong>`;
      progressBar.style.width = `${pct}%`;
      progressBar.style.backgroundColor = 'var(--c-solar-deep)';
    }
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initCartUI() {
  updateCartBadge();
  renderCartDrawer();
  
  const openBtns = document.querySelectorAll('[data-open-cart]');
  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
  }));

  const closeBtns = document.querySelectorAll('[data-close-cart]');
  closeBtns.forEach(btn => btn.addEventListener('click', closeCartDrawer));
}

/* ==========================================================================
   Wishlist System
   ========================================================================== */
function toggleWishlist(productId, btnElement) {
  const index = SolveaState.wishlist.indexOf(productId);
  if (index > -1) {
    SolveaState.wishlist.splice(index, 1);
    if (btnElement) btnElement.classList.remove('active');
    showToast('Removed from saved items');
  } else {
    SolveaState.wishlist.push(productId);
    if (btnElement) btnElement.classList.add('active');
    showToast('Saved to your routine wishlist ❤️');
  }
  localStorage.setItem('solvea_wishlist', JSON.stringify(SolveaState.wishlist));
  updateWishlistBadge();
}

function updateWishlistBadge() {
  const count = SolveaState.wishlist.length;
  document.querySelectorAll('.wishlist-count-badge').forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

function initWishlistUI() {
  updateWishlistBadge();
}

/* ==========================================================================
   Live UV Index Intelligence Tracker
   ========================================================================== */
function initUVTracker() {
  // Simulate live UV fluctuation
  const uvPills = document.querySelectorAll('.live-uv-num');
  const uvTextPills = document.querySelectorAll('.live-uv-status');

  const updateUVDisplay = (val) => {
    SolveaState.currentUV = val;
    let levelText = 'Moderate';
    let color = 'var(--c-solar-orange)';

    if (val <= 2) { levelText = 'Low'; color = '#52B788'; }
    else if (val <= 5) { levelText = 'Moderate'; color = '#F4A261'; }
    else if (val <= 7) { levelText = 'High'; color = '#E76F51'; }
    else if (val <= 10) { levelText = 'Very High'; color = '#D62828'; }
    else { levelText = 'Extreme'; color = '#6A040F'; }

    uvPills.forEach(el => el.textContent = val.toFixed(1));
    uvTextPills.forEach(el => {
      el.textContent = `${levelText} (${val.toFixed(1)})`;
      el.style.color = color;
    });
  };

  updateUVDisplay(SolveaState.currentUV);
}

/* ==========================================================================
   "Find Your SPF" Diagnostic Quiz Modal
   ========================================================================== */
let currentQuizStep = 0;

function openQuiz() {
  currentQuizStep = 0;
  SolveaState.quizAnswers = {};
  renderQuizStep();
  const modal = document.getElementById('quiz-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeQuiz() {
  const modal = document.getElementById('quiz-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function renderQuizStep() {
  const container = document.getElementById('quiz-content-area');
  const progressFill = document.getElementById('quiz-progress-fill');
  const stepCount = SOLVEA_DATA.quizQuestions.length;

  if (currentQuizStep >= stepCount) {
    renderQuizResult();
    return;
  }

  const q = SOLVEA_DATA.quizQuestions[currentQuizStep];
  const progressPct = ((currentQuizStep + 1) / stepCount) * 100;
  if (progressFill) progressFill.style.width = `${progressPct}%`;

  let optionsHTML = '';
  q.options.forEach(opt => {
    optionsHTML += `
      <div class="quiz-option-card" onclick="selectQuizOption('${opt.value}')">
        <div class="quiz-opt-icon">${opt.icon}</div>
        <div class="quiz-opt-label">${opt.label}</div>
        <div class="quiz-opt-sub">${opt.sub}</div>
      </div>
    `;
  });

  if (container) {
    container.innerHTML = `
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <span class="badge-clinical badge-solar" style="margin-bottom: 0.5rem;">Step ${currentQuizStep + 1} of ${stepCount}</span>
        <h3 style="font-size: 1.45rem; font-weight: 800; margin-bottom: 0.4rem;">${q.title}</h3>
        <p style="font-size: 0.88rem; color: var(--c-carbon-muted);">${q.description}</p>
      </div>
      <div class="quiz-options-grid">
        ${optionsHTML}
      </div>
    `;
  }
}

function selectQuizOption(val) {
  SolveaState.quizAnswers[`step_${currentQuizStep}`] = val;
  currentQuizStep++;
  renderQuizStep();
}

function renderQuizResult() {
  const container = document.getElementById('quiz-content-area');
  const progressFill = document.getElementById('quiz-progress-fill');
  if (progressFill) progressFill.style.width = '100%';

  // Recommend best product based on choices
  let recommended = SOLVEA_DATA.products[0]; // default hydro-shield
  const skinType = SolveaState.quizAnswers['step_0'];
  const filterPref = SolveaState.quizAnswers['step_3'];

  if (skinType === 'oily') {
    recommended = SOLVEA_DATA.products.find(p => p.id === 'solvea-clarifying-matte-spf50') || recommended;
  } else if (skinType === 'sensitive' || filterPref === 'mineral') {
    recommended = SOLVEA_DATA.products.find(p => p.id === 'solvea-mineral-pure-spf50') || recommended;
  } else if (filterPref === 'tinted') {
    recommended = SOLVEA_DATA.products.find(p => p.id === 'solvea-tinted-mineral-glow-spf50') || recommended;
  }

  if (container) {
    container.innerHTML = `
      <div style="text-align: center; padding: 1rem 0;">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">☀️🔬</div>
        <span class="badge-clinical badge-eco" style="margin-bottom: 0.5rem;">Your Clinical Match</span>
        <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 0.5rem;">We Formulated This For You</h3>
        <p style="font-size: 0.9rem; color: var(--c-carbon-muted); max-width: 480px; margin: 0 auto 1.5rem;">
          Based on your profile, your barrier requires <strong>${recommended.spfLevel} ${recommended.pa}</strong> with <strong>${recommended.type.toUpperCase()}</strong> technology.
        </p>

        <div style="background: var(--c-sun-cream); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; align-items: center; gap: 1.25rem; text-align: left; margin-bottom: 2rem; border: 1px solid var(--c-border);">
          <img src="${recommended.image}" alt="${recommended.name}" style="width: 90px; height: 90px; object-fit: contain; padding: 6px; border-radius: var(--radius-md); background: #FAF7F0; border: 1px solid var(--c-border); flex-shrink: 0;">
          <div>
            <div style="font-size: 0.74rem; font-weight: 700; color: var(--c-solar-deep); text-transform: uppercase;">${recommended.badge}</div>
            <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 2px;">${recommended.name}</h4>
            <div style="font-size: 0.8rem; color: var(--c-carbon-muted); margin-bottom: 6px;">${recommended.finish}</div>
            <div style="font-size: 1.15rem; font-weight: 800; color: var(--c-carbon);">$${recommended.price.toFixed(2)} <span style="font-size: 0.76rem; color: var(--c-solar-deep);">($${recommended.subscriptionPrice.toFixed(2)} with Sub)</span></div>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn-solvea btn-primary-solar" onclick="addToCart('${recommended.id}'); closeQuiz();">
            Add Match To Bag ($${recommended.price.toFixed(2)})
          </button>
          <a href="product-detail.html?id=${recommended.id}" class="btn-solvea btn-outline-carbon">
            View Formulation Lab
          </a>
        </div>
      </div>
    `;
  }
}

function initQuiz() {
  document.querySelectorAll('[data-open-quiz]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openQuiz();
    });
  });

  const closeBtn = document.getElementById('quiz-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeQuiz);

  const modal = document.getElementById('quiz-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeQuiz();
    });
  }
}

/* ==========================================================================
   Product Grid Generation & Quick Filters
   ========================================================================== */
function initProductCards() {
  const container = document.getElementById('home-featured-products');
  if (!container) return;

  renderProductGrid(container, SOLVEA_DATA.products.slice(0, 4));
}

function renderProductGrid(container, productsList) {
  if (!container) return;
  if (productsList.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem;">No matching formulas found. Try adjusting your filters.</div>`;
    return;
  }

  let html = '';
  productsList.forEach(p => {
    const isSaved = SolveaState.wishlist.includes(p.id);
    html += `
      <div class="product-card" data-spf="${p.spfLevel}" data-category="${p.category}" data-type="${p.type}">
        <div class="product-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <div class="product-badges">
            <span class="badge-clinical badge-spf">${p.spfLevel} ${p.pa}</span>
            ${p.badge ? `<span class="badge-clinical badge-solar">${p.badge}</span>` : ''}
          </div>
          <button class="product-wishlist-btn ${isSaved ? 'active' : ''}" onclick="toggleWishlist('${p.id}', this)" title="Save to routine">
            <i class="fa-solid fa-heart"></i>
          </button>
          <div class="product-quick-actions">
            <button class="btn-solvea btn-carbon btn-sm" style="flex:1;" onclick="addToCart('${p.id}')">
              Quick Add
            </button>
            <a href="product-detail.html?id=${p.id}" class="btn-solvea btn-outline-carbon btn-sm" style="background: #fff; width: 42px; padding: 0;">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="product-body">
          <div class="product-meta-row">
            <span class="product-spf-tag">${p.type.toUpperCase()} • ${p.category.toUpperCase()}</span>
            <div class="product-rating">
              <i class="fa-solid fa-star"></i>
              <span>${p.rating}</span>
              <span style="color: var(--c-carbon-muted); font-size: 0.72rem;">(${p.reviewCount})</span>
            </div>
          </div>
          <h3 class="product-title">
            <a href="product-detail.html?id=${p.id}">${p.name}</a>
          </h3>
          <p class="product-sub">${p.subTitle}</p>
          <div class="product-attributes">
            <span class="attr-pill">${p.finish}</span>
            <span class="attr-pill">${p.waterResistant} Resist</span>
            ${p.reefSafe ? '<span class="attr-pill" style="color: var(--c-eco-sage-dark);">🌿 Reef-Safe</span>' : ''}
          </div>
          <div class="product-footer">
            <div class="product-price-box">
              <span class="product-price">$${p.price.toFixed(2)}</span>
              <span class="product-sub-price">Sub & Save: $${p.subscriptionPrice.toFixed(2)}</span>
            </div>
            <button class="btn-solvea btn-primary-solar btn-sm" onclick="addToCart('${p.id}')">
              + Bag
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function initQuickFilters() {
  const pills = document.querySelectorAll('[data-filter-spf]');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const val = pill.dataset.filterSpf;

      const container = document.getElementById('home-featured-products') || document.getElementById('shop-product-grid');
      if (!container) return;

      if (val === 'all') {
        renderProductGrid(container, SOLVEA_DATA.products);
      } else {
        const filtered = SOLVEA_DATA.products.filter(p => p.spfLevel.includes(val));
        renderProductGrid(container, filtered);
      }
    });
  });
}

/* ==========================================================================
   Global Search
   ========================================================================== */
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  const searchResults = document.getElementById('global-search-results');
  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    const matches = SOLVEA_DATA.products.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.subTitle.toLowerCase().includes(query) ||
      p.type.toLowerCase().includes(query) ||
      p.ingredients.some(i => i.name.toLowerCase().includes(query))
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `<p style="padding: 1rem; color: var(--c-carbon-muted);">No formulas matching "${query}"</p>`;
      return;
    }

    let html = '<div style="display: flex; flex-direction: column; gap: 8px;">';
    matches.forEach(m => {
      html += `
        <a href="product-detail.html?id=${m.id}" style="display: flex; align-items: center; gap: 12px; padding: 8px; border-radius: var(--radius-sm); transition: background 0.2s;" onmouseover="this.style.background='var(--c-sun-cream)'" onmouseout="this.style.background='transparent'">
          <img src="${m.image}" alt="${m.name}" style="width: 44px; height: 44px; object-fit: contain; padding: 3px; border-radius: var(--radius-xs); background: #FAF7F0; border: 1px solid var(--c-border); flex-shrink: 0;">
          <div>
            <div style="font-weight: 700; font-size: 0.88rem;">${m.name}</div>
            <div style="font-size: 0.74rem; color: var(--c-carbon-muted);">${m.spfLevel} • $${m.price.toFixed(2)}</div>
          </div>
        </a>
      `;
    });
    html += '</div>';
    searchResults.innerHTML = html;
  });
}

/* ==========================================================================
   Toast Dispatcher
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('solvea-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'solvea-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  let drawer = document.getElementById('mobile-nav-drawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.id = 'mobile-nav-drawer';
    drawer.className = 'mobile-nav-drawer';
    
    const cartCount = SolveaState.cart.reduce((sum, item) => sum + item.qty, 0);

    drawer.innerHTML = `
      <div class="mobile-nav-panel">
        <div class="mobile-nav-header">
          <a href="index.html" class="brand-logo" onclick="closeMobileNav()">
            <span class="brand-logo-text">SOLVÉA <span class="sun-dot"></span></span>
            <span class="brand-logo-tag">Clinical Photoprotection</span>
          </a>
          <button class="corner-close-btn" onclick="closeMobileNav()" title="Close Navigation" aria-label="Close Navigation">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <ul class="mobile-nav-links">
          <li>
            <a href="shop.html" class="mobile-nav-link" onclick="closeMobileNav()">
              <span class="nav-idx">01</span> Shop Sunscreens
            </a>
          </li>
          <li>
            <a href="uv-guide.html" class="mobile-nav-link" onclick="closeMobileNav()">
              <span class="nav-idx">02</span> UV Index Guide
            </a>
          </li>
          <li>
            <a href="skin-guide.html" class="mobile-nav-link" onclick="closeMobileNav()">
              <span class="nav-idx">03</span> Skin & Sun Guide
            </a>
          </li>
          <li>
            <a href="subscriptions.html" class="mobile-nav-link" onclick="closeMobileNav()">
              <span class="nav-idx">04</span> Auto-Shield Refills
            </a>
          </li>
          <li>
            <a href="wholesale.html" class="mobile-nav-link" onclick="closeMobileNav()">
              <span class="nav-idx">05</span> Bulk & Pro Clinics
            </a>
          </li>
          <li>
            <a href="about.html" class="mobile-nav-link" onclick="closeMobileNav()">
              <span class="nav-idx">06</span> About Clean Science
            </a>
          </li>
          <li>
            <a href="contact.html" class="mobile-nav-link" onclick="closeMobileNav()">
              <span class="nav-idx">07</span> Contact Concierge
            </a>
          </li>
          <li>
            <a href="dashboard.html" class="mobile-nav-link" onclick="closeMobileNav()">
              <span class="nav-idx">08</span> Member Dashboard
            </a>
          </li>
        </ul>

        <!-- Account Authentication Hub: Dashboard, Login & Register -->
        <div class="mobile-nav-auth-box">
          <div class="mobile-nav-auth-title">
            <i class="fa-solid fa-user-circle"></i> Account & Protocol Access
          </div>
          <div class="mobile-nav-auth-grid">
            <a href="dashboard.html" class="auth-pill-link" onclick="closeMobileNav()">
              <i class="fa-solid fa-gauge-high"></i> Dashboard
            </a>
            <a href="dashboard.html?mode=login" class="auth-pill-link" onclick="closeMobileNav()">
              <i class="fa-solid fa-right-to-bracket"></i> Sign In (Login)
            </a>
            <a href="dashboard.html?mode=register" class="auth-pill-link auth-pill-highlight" onclick="closeMobileNav()">
              <i class="fa-solid fa-user-plus"></i> Register (+15% Off)
            </a>
          </div>
        </div>

        <div class="mobile-nav-actions">
          <button class="btn-solvea btn-primary-solar w-100" onclick="closeMobileNav(); openQuiz();">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Take 60s SPF Diagnostic
          </button>
          <button class="btn-solvea btn-carbon w-100" style="background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2);" onclick="closeMobileNav(); openCartDrawer();">
            <i class="fa-solid fa-bag-shopping" style="color: var(--c-solar-orange);"></i> Shopping Bag (<span class="mobile-cart-badge">${cartCount}</span>)
          </button>
          <div style="font-size: 0.76rem; color: rgba(255,255,255,0.65); text-align: center; margin-top: 4px; display: flex; align-items: center; justify-content: center; gap: 6px;">
            <span class="uv-indicator-dot"></span>
            <span>Solar Radar: <strong style="color: var(--c-solar-orange);" class="live-uv-status">7.4 High • Active Shielding</strong></span>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(drawer);

    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) closeMobileNav();
    });
  }

  document.querySelectorAll('.mobile-toggle, .corner-menu-trigger').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      openMobileNav();
    };
  });
}

function openMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

window.openMobileNav = openMobileNav;
window.closeMobileNav = closeMobileNav;
window.handleNewsletter = handleNewsletter;
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
window.removeCartItem = removeCartItem;
window.toggleWishlist = toggleWishlist;
window.openQuiz = openQuiz;
window.closeQuiz = closeQuiz;
window.selectQuizOption = selectQuizOption;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.showToast = showToast;

