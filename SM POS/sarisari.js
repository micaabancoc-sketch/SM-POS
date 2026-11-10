const groceryItems = [
  { product_id: 1, product_name: "Dried Mangoes (200g)", product_price: 180, category: "snacks" },
  { product_id: 2, product_name: "Banana Chips (200g)", product_price: 120, category: "snacks" },
  { product_id: 3, product_name: "Tablea Chocolate (250g)", product_price: 200, category: "beverages" },
  { product_id: 4, product_name: "Coconut Oil (500ml)", product_price: 180, category: "pantry" },
  { product_id: 5, product_name: "Mango Jam (250g)", product_price: 160, category: "condiments" },
  { product_id: 6, product_name: "Peanut Brittle (200g)", product_price: 150, category: "snacks" },
  { product_id: 7, product_name: "Cashew Nuts (250g)", product_price: 280, category: "snacks" },
  { product_id: 8, product_name: "Philippine Coffee Beans (250g)", product_price: 320, category: "beverages" },
  { product_id: 9, product_name: "Native Vinegar (500ml)", product_price: 120, category: "condiments" },
  { product_id: 10, product_name: "Philippine Honey (250ml)", product_price: 250, category: "pantry" },
  { product_id: 11, product_name: "Coconut Sugar (500g)", product_price: 180, category: "pantry" },
  { product_id: 12, product_name: "Rice Crackers (200g)", product_price: 100, category: "snacks" },
  { product_id: 13, product_name: "Salted Fish (Danggit, 250g)", product_price: 220, category: "frozen" },
  { product_id: 14, product_name: "Longganisa (Frozen, 500g)", product_price: 280, category: "frozen" },
  { product_id: 15, product_name: "Tocino (Frozen, 500g)", product_price: 300, category: "frozen" },
  { product_id: 16, product_name: "Chicharon (100g)", product_price: 120, category: "snacks" },
  { product_id: 17, product_name: "Pandesal Pack (12 pcs)", product_price: 80, category: "bakery" },
  { product_id: 18, product_name: "Native Brown Rice (1kg)", product_price: 90, category: "rice" },
  { product_id: 19, product_name: "White Rice (1kg)", product_price: 70, category: "rice" },
  { product_id: 20, product_name: "Corn Coffee (250g)", product_price: 150, category: "beverages" },
  { product_id: 21, product_name: "Coconut Water (1L)", product_price: 100, category: "beverages" },
  { product_id: 22, product_name: "Calamansi Juice (1L)", product_price: 120, category: "beverages" },
  { product_id: 23, product_name: "Guava Jelly (250g)", product_price: 160, category: "condiments" },
  { product_id: 24, product_name: "Bagoong (250g)", product_price: 90, category: "condiments" },
  { product_id: 25, product_name: "Fish Sauce (Patis, 500ml)", product_price: 110, category: "condiments" },
  { product_id: 26, product_name: "Soy Sauce (500ml)", product_price: 95, category: "condiments" },
  { product_id: 27, product_name: "Native Salt (250g)", product_price: 50, category: "pantry" },
  { product_id: 28, product_name: "Coconut Milk Powder (200g)", product_price: 140, category: "pantry" },
  { product_id: 29, product_name: "Instant Noodles (Pack of 6)", product_price: 75, category: "canned" },
  { product_id: 30, product_name: "Native Cheese (Kesong Puti, 250g)", product_price: 180, category: "dairy" },
  { product_id: 31, product_name: "Eggs (Dozen)", product_price: 90, category: "dairy" },
  { product_id: 32, product_name: "Fresh Tilapia (1kg)", product_price: 160, category: "seafood" },
  { product_id: 33, product_name: "Fresh Bangus (Milkfish, 1kg)", product_price: 180, category: "seafood" },
  { product_id: 34, product_name: "Fresh Chicken (1kg)", product_price: 200, category: "meat" },
  { product_id: 35, product_name: "Fresh Pork (1kg)", product_price: 280, category: "meat" },
  { product_id: 36, product_name: "Fresh Beef (1kg)", product_price: 350, category: "meat" },
  { product_id: 37, product_name: "Native Vegetables Basket", product_price: 250, category: "produce" },
  { product_id: 38, product_name: "Bananas (1kg)", product_price: 60, category: "produce" },
  { product_id: 39, product_name: "Mangoes (1kg)", product_price: 120, category: "produce" },
  { product_id: 40, product_name: "Papaya (1kg)", product_price: 70, category: "produce" },
  { product_id: 41, product_name: "Pineapple (Whole)", product_price: 90, category: "produce" },
  { product_id: 42, product_name: "Coconut (Whole)", product_price: 50, category: "produce" },
  { product_id: 43, product_name: "Native Peanuts (250g)", product_price: 100, category: "snacks" },
  { product_id: 44, product_name: "Camote (Sweet Potato, 1kg)", product_price: 80, category: "produce" },
  { product_id: 45, product_name: "Ube Halaya (250g)", product_price: 180, category: "desserts" },
  { product_id: 46, product_name: "Leche Flan (Whole)", product_price: 250, category: "desserts" },
  { product_id: 47, product_name: "Bibingka (Whole)", product_price: 200, category: "desserts" },
  { product_id: 48, product_name: "Puto (Dozen)", product_price: 120, category: "desserts" },
  { product_id: 49, product_name: "Kakanin Sampler Pack", product_price: 300, category: "desserts" },
  { product_id: 50, product_name: "Native Chocolate Drink (Sikwate, 250ml)", product_price: 90, category: "beverages" }
];

// Category metadata: label (full name), short (compact tag text), color (accent used across the app)
const CATEGORY_META = {
  snacks:     { label: "Snacks & Chips",           short: "Snacks",       color: "#f97316" },
  beverages:  { label: "Beverages",                short: "Beverages",    color: "#0ea5e9" },
  condiments: { label: "Condiments & Sauces",      short: "Condiments",   color: "#a855f7" },
  pantry:     { label: "Pantry Staples",           short: "Pantry",       color: "#ca8a04" },
  rice:       { label: "Rice & Grains",            short: "Rice/Grains",  color: "#65a30d" },
  bakery:     { label: "Bakery",                   short: "Bakery",       color: "#db2777" },
  frozen:     { label: "Frozen & Preserved",       short: "Frozen",       color: "#0891b2" },
  dairy:      { label: "Dairy & Eggs",             short: "Dairy/Eggs",   color: "#eab308" },
  meat:       { label: "Fresh Meat & Poultry",     short: "Meat",         color: "#dc2626" },
  seafood:    { label: "Fresh Seafood",            short: "Seafood",      color: "#2563eb" },
  produce:    { label: "Fresh Produce",            short: "Produce",      color: "#16a34a" },
  desserts:   { label: "Desserts & Kakanin",       short: "Desserts",     color: "#ec4899" },
  canned:     { label: "Canned & Packaged Goods",  short: "Canned",       color: "#6366f1" }
};

const PAYMENT_COLORS = { Cash: "#16a34a", GCash: "#2563eb", Utang: "#d97706" };

// App State (Uses sessionStorage so data clears when browser tab is closed)
let cart = [];
let customerType = "Regular";
let paymentMethod = "Cash";
let transactions = JSON.parse(sessionStorage.getItem("pos_transactions") || "[]");
let currentTxnData = null;

// DOM Elements
const productGrid = document.getElementById("productGrid");
const productsFooter = document.getElementById("productsFooter");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const minPriceInput = document.getElementById("minPriceInput");
const maxPriceInput = document.getElementById("maxPriceInput");

const cartBody = document.getElementById("cartBody");
const cartSummary = document.getElementById("cartSummary");
const proceedPaymentBtn = document.getElementById("proceedPaymentBtn");
const customerNameInput = document.getElementById("customerName");
const cartBadge = document.getElementById("cartBadge");
const cartBadgePay = document.getElementById("cartBadgePay");

const cartMainPanel = document.getElementById("cartMainPanel");
const paymentPanel = document.getElementById("paymentPanel");
const paymentBreakdown = document.getElementById("paymentBreakdown");

const cashBox = document.getElementById("cashBox");
const cashTendered = document.getElementById("cashTendered");
const changeBox = document.getElementById("changeBox");
const changeAmount = document.getElementById("changeAmount");

const gcashBox = document.getElementById("gcashBox");
const gcashRef = document.getElementById("gcashRef");

const utangBox = document.getElementById("utangBox");
const utangCustomerLabel = document.getElementById("utangCustomerLabel");
const utangWarning = document.getElementById("utangWarning");
const utangContact = document.getElementById("utangContact");
const utangAddress = document.getElementById("utangAddress");

const confirmPaymentBtn = document.getElementById("confirmPaymentBtn");
const backToCartBtn = document.getElementById("backToCartBtn");

const receiptModal = document.getElementById("receiptModal");
const receiptPaper = document.getElementById("receiptPaper");
const printReceiptBtn = document.getElementById("printReceiptBtn");
const newTxBtn = document.getElementById("newTxBtn");
const closeModalIcon = document.getElementById("closeModalIcon");
const txSearchInput = document.getElementById("txSearchInput");

document.addEventListener("DOMContentLoaded", () => {
  populateCategoryFilter();
  renderProducts(groceryItems);
  setupNavigation();
  setupEventListeners();
  renderCart();
});

// Fill the category dropdown from CATEGORY_META (single source of truth)
function populateCategoryFilter() {
  Object.entries(CATEGORY_META).forEach(([slug, meta]) => {
    const opt = document.createElement("option");
    opt.value = slug;
    opt.textContent = meta.label;
    categoryFilter.appendChild(opt);
  });
}

// Render Catalog using product_id, product_name, product_price, category
function renderProducts(items) {
  productGrid.innerHTML = "";
  items.forEach(prod => {
    const meta = CATEGORY_META[prod.category] || { short: "Other", color: "#94a3b8" };
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => addToCart(prod);
    card.innerHTML = `
      <div class="card-top">
        <span class="category-tag">${meta.short}</span>
      </div>
      <span class="product-title">${prod.product_name}</span>
      <div class="card-bottom">
        <span class="product-price">₱${prod.product_price.toFixed(2)}</span>
        <span class="product-id">#${prod.product_id}</span>
      </div>
    `;
    productGrid.appendChild(card);
  });
  productsFooter.textContent = `${items.length} of ${groceryItems.length} products`;
}

// Search, Category & Price Range Filter
// The HTML min="0" only blocks the spinner arrows, not typed input, so clamp negatives here too.
function clampToZero(input) {
  if (input.value !== "" && parseFloat(input.value) < 0) {
    input.value = 0;
  }
}

function filterProducts() {
  const query = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;
  const min = parseFloat(minPriceInput.value) || 0;
  const max = parseFloat(maxPriceInput.value) || Infinity;

  const filtered = groceryItems.filter(p =>
    p.product_name.toLowerCase().includes(query) &&
    (category === "" || p.category === category) &&
    p.product_price >= min &&
    p.product_price <= max
  );
  renderProducts(filtered);
}

// Add Item to Cart
function addToCart(product) {
  const match = cart.find(i => i.product_id === product.product_id);
  if (match) {
    match.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
}

// Update Quantity — the minus button never drops an item below qty 1;
// removing an item entirely is a deliberate action via the trash icon (removeFromCart).
function updateQty(id, delta) {
  const item = cart.find(i => i.product_id === id);
  if (!item) return;
  const newQty = item.qty + delta;
  if (newQty < 1) return;
  item.qty = newQty;
  renderCart();
}

// Remove Item from Cart
function removeFromCart(id) {
  cart = cart.filter(i => i.product_id !== id);
  renderCart();
}

// Compute Totals
function computeTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.product_price * item.qty), 0);
  let discount = 0;
  let vatAmount = 0;
  let totalDue = subtotal;

  if (customerType === "Senior" || customerType === "PWD") {
    // Senior Citizens (RA 9994) & PWD (RA 10754) purchases are VAT-exempt:
    // the 20% discount is computed on the VAT-exclusive price, and no VAT is charged.
    const vatExemptBase = subtotal / 1.12;
    discount = vatExemptBase * 0.20;
    totalDue = vatExemptBase - discount;
    vatAmount = 0;
  } else {
    vatAmount = subtotal - (subtotal / 1.12);
    if (subtotal > 1000) {
      discount = subtotal * 0.10;
    }
    totalDue = subtotal - discount;
  }

  return { subtotal, discount, totalDue, vatAmount };
}

// Render Cart UI
function renderCart() {
  const totalCount = cart.reduce((c, i) => c + i.qty, 0);
  cartBadge.textContent = totalCount;
  cartBadgePay.textContent = totalCount;

  if (cart.length === 0) {
    cartBody.innerHTML = `<p class="empty-msg">Select products to add</p>`;
    cartSummary.innerHTML = "";
    proceedPaymentBtn.disabled = true;
    return;
  }

  cartBody.innerHTML = "";
  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <span class="cart-item-title">${item.product_name}</span>
        <span class="cart-item-price">₱${item.product_price.toFixed(2)} × ${item.qty}</span>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" ${item.qty <= 1 ? 'disabled' : ''} onclick="updateQty(${item.product_id}, -1)">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${item.product_id}, 1)">+</button>
        <i class="fa-solid fa-trash-can btn-remove" onclick="removeFromCart(${item.product_id})"></i>
      </div>
    `;
    cartBody.appendChild(row);
  });

  cartSummary.innerHTML = buildBreakdownHTML(computeTotals());
  proceedPaymentBtn.disabled = false;
}

// Shared totals breakdown markup (used in cart summary and payment panel)
function buildBreakdownHTML(totals) {
  let html = `<div class="summary-row"><span>Subtotal</span><span>₱${totals.subtotal.toFixed(2)}</span></div>`;

  if (totals.discount > 0) {
    const label = customerType !== "Regular" ? `${customerType} Discount (20%, VAT-exempt)` : "10% Off (>₱1000)";
    html += `<div class="summary-row discount"><span>${label}</span><span>-₱${totals.discount.toFixed(2)}</span></div>`;
  }

  html += `<div class="summary-row"><span>VAT (12%)</span><span>₱${totals.vatAmount.toFixed(2)}</span></div>`;
  html += `<div class="summary-row total"><span>Total Due</span><span>₱${totals.totalDue.toFixed(2)}</span></div>`;
  return html;
}

// Payment Panel
function openPaymentPanel() {
  const totals = computeTotals();
  paymentBreakdown.innerHTML = buildBreakdownHTML(totals);

  cashTendered.placeholder = `Min. ₱${totals.totalDue.toFixed(2)}`;
  cashTendered.value = "";
  gcashRef.value = "";
  utangContact.value = "";
  utangAddress.value = "";
  changeBox.style.display = "none";

  document.querySelectorAll(".method-btn").forEach(b => b.classList.toggle("active", b.dataset.method === paymentMethod));
  updatePaymentMethodView();

  cartMainPanel.classList.remove("active");
  paymentPanel.classList.add("active");
}

// Show the right sub-panel for the selected payment method & validate the Confirm button
function updatePaymentMethodView() {
  cashBox.style.display = paymentMethod === "Cash" ? "flex" : "none";
  gcashBox.style.display = paymentMethod === "GCash" ? "flex" : "none";
  utangBox.style.display = paymentMethod === "Utang" ? "flex" : "none";

  if (paymentMethod === "Cash") {
    validateCashInput();
  } else if (paymentMethod === "GCash") {
    confirmPaymentBtn.disabled = false;
  } else if (paymentMethod === "Utang") {
    validateUtang();
  }
}

// Cash Tendered & Change validation
function validateCashInput() {
  const totals = computeTotals();
  const cash = parseFloat(cashTendered.value) || 0;

  if (cash >= totals.totalDue) {
    const change = cash - totals.totalDue;
    changeAmount.textContent = `₱${change.toFixed(2)}`;
    changeBox.style.display = "block";
    confirmPaymentBtn.disabled = false;
  } else {
    changeBox.style.display = "none";
    confirmPaymentBtn.disabled = true;
  }
}

// Utang requires a customer name so the debt can be tracked
function validateUtang() {
  const name = customerNameInput.value.trim();
  utangCustomerLabel.textContent = name || "—";
  if (name) {
    utangWarning.style.display = "none";
    confirmPaymentBtn.disabled = false;
  } else {
    utangWarning.style.display = "flex";
    confirmPaymentBtn.disabled = true;
  }
}

function saveTransactions() {
  sessionStorage.setItem("pos_transactions", JSON.stringify(transactions));
}

// Checkout and Save to sessionStorage
confirmPaymentBtn.addEventListener("click", () => {
  const totals = computeTotals();
  const custNameRaw = customerNameInput.value.trim();
  const now = new Date();

  let cash = 0, change = 0, status = "Paid", custName = custNameRaw || "Walk-in Customer";
  let utangContactVal = null, utangAddressVal = null;

  if (paymentMethod === "Cash") {
    cash = parseFloat(cashTendered.value) || 0;
    change = cash - totals.totalDue;
  } else if (paymentMethod === "GCash") {
    cash = totals.totalDue;
    change = 0;
  } else if (paymentMethod === "Utang") {
    if (!custNameRaw) return; // guarded already, but never record utang with no name
    custName = custNameRaw;
    cash = 0;
    change = 0;
    status = "Unpaid";
    utangContactVal = utangContact.value.trim() || null;
    utangAddressVal = utangAddress.value.trim() || null;
  }

  currentTxnData = {
    id: `TXN-${Date.now()}`,
    date: now.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    customer: custName,
    type: customerType,
    paymentMethod: paymentMethod,
    gcashRef: paymentMethod === "GCash" ? (gcashRef.value.trim() || "—") : null,
    utangContact: utangContactVal,
    utangAddress: utangAddressVal,
    status: status,
    items: cart.map(item => ({
      product_id: item.product_id,
      product_name: item.product_name,
      product_price: item.product_price,
      category: item.category,
      qty: item.qty,
      subtotal: item.product_price * item.qty
    })),
    subtotal: totals.subtotal,
    discount: totals.discount,
    vatAmount: totals.vatAmount,
    totalDue: totals.totalDue,
    cash: cash,
    change: change
  };

  transactions.unshift(currentTxnData);
  saveTransactions();

  renderReceiptModal(currentTxnData);
  receiptModal.classList.add("active");
});

// Modal Receipt Rendering
function renderReceiptModal(tx) {
  let itemsHTML = tx.items.map(i => `
    <div class="receipt-line"><span>${i.product_name}</span></div>
    <div class="receipt-line">
      <span>₱${i.product_price.toFixed(2)} x ${i.qty}</span>
      <span>₱${i.subtotal.toFixed(2)}</span>
    </div>
  `).join("");

  const paymentHTML = tx.paymentMethod === "Utang"
    ? `
      <div class="receipt-line"><span>Payment Method</span><span>UTANG</span></div>
      ${tx.utangContact ? `<div class="receipt-line"><span>Contact No.</span><span>${tx.utangContact}</span></div>` : ''}
      ${tx.utangAddress ? `<div class="receipt-line"><span>Address</span><span>${tx.utangAddress}</span></div>` : ''}
      <div class="receipt-line"><span>Status</span><span>UNPAID</span></div>
    `
    : `
      <div class="receipt-line"><span>Payment Method</span><span>${tx.paymentMethod}</span></div>
      ${tx.paymentMethod === "GCash" ? `<div class="receipt-line"><span>Ref. No.</span><span>${tx.gcashRef}</span></div>` : ''}
      <div class="receipt-line"><span>${tx.paymentMethod === "GCash" ? "Amount Paid" : "Cash Paid"}</span><span>₱${tx.cash.toFixed(2)}</span></div>
      <div class="receipt-line"><span>Change</span><span>₱${tx.change.toFixed(2)}</span></div>
    `;

  receiptPaper.innerHTML = `
    <header>
      <span>SARI-SARI STORE POS</span><br>
      Official Receipt
    </header>
    <div class="receipt-line"><span>TXN ID:</span><span>${tx.id}</span></div>
    <div class="receipt-line"><span>Date:</span><span>${tx.date}</span></div>
    <div class="receipt-line"><span>Customer:</span><span>${tx.customer}</span></div>
    <div class="receipt-divider"></div>
    ${itemsHTML}
    <div class="receipt-divider"></div>
    <div class="receipt-line"><span>Subtotal</span><span>₱${tx.subtotal.toFixed(2)}</span></div>
    ${tx.discount > 0 ? `<div class="receipt-line"><span>Discount</span><span>-₱${tx.discount.toFixed(2)}</span></div>` : ''}
    <div class="receipt-line"><span>VAT (12%)</span><span>₱${tx.vatAmount.toFixed(2)}</span></div>
    <div class="receipt-divider"></div>
    <div class="receipt-line" style="font-size: 14px; font-weight: bold;">
      <span>TOTAL DUE</span><span>₱${tx.totalDue.toFixed(2)}</span>
    </div>
    ${paymentHTML}
    <div class="receipt-footer-text">
      Transaction Completed.<br>Thank you for shopping!
    </div>
  `;
}

// Reset Form after Transaction
function resetPOS() {
  cart = [];
  customerNameInput.value = "";
  paymentPanel.classList.remove("active");
  cartMainPanel.classList.add("active");
  receiptModal.classList.remove("active");
  renderCart();
}

// Tab View Navigation
function setupNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabViews = document.querySelectorAll(".tab-view");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      tabViews.forEach(v => v.classList.remove("active"));

      btn.classList.add("active");
      const targetView = document.getElementById(btn.dataset.tab);
      if (targetView) targetView.classList.add("active");

      if (btn.dataset.tab === "transactionsView") renderTransactionsView();
      if (btn.dataset.tab === "reportsView") renderReportsView();
    });
  });
}

// Event Listeners
function setupEventListeners() {
  searchInput.addEventListener("input", filterProducts);
  categoryFilter.addEventListener("change", filterProducts);
  minPriceInput.addEventListener("input", () => { clampToZero(minPriceInput); filterProducts(); });
  maxPriceInput.addEventListener("input", () => { clampToZero(maxPriceInput); filterProducts(); });

  document.querySelectorAll(".type-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customerType = btn.dataset.type;
      renderCart();
    });
  });

  document.querySelectorAll(".method-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".method-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      paymentMethod = btn.dataset.method;
      updatePaymentMethodView();
    });
  });

  cashTendered.addEventListener("input", validateCashInput);
  gcashRef.addEventListener("input", () => {
    gcashRef.value = gcashRef.value.replace(/[^0-9]/g, "");
  });
  utangContact.addEventListener("input", () => {
    utangContact.value = utangContact.value.replace(/[^0-9]/g, "");
  });

  proceedPaymentBtn.addEventListener("click", openPaymentPanel);
  backToCartBtn.addEventListener("click", () => {
    paymentPanel.classList.remove("active");
    cartMainPanel.classList.add("active");
  });

  newTxBtn.addEventListener("click", resetPOS);
  closeModalIcon.addEventListener("click", () => receiptModal.classList.remove("active"));
  printReceiptBtn.addEventListener("click", () => window.print());

  txSearchInput.addEventListener("input", renderTransactionsView);
}

// Mark an Utang (credit) transaction as settled
function markAsPaid(txnId) {
  const tx = transactions.find(t => t.id === txnId);
  if (!tx) return;
  tx.status = "Paid";
  saveTransactions();
  renderTransactionsView();
}

// Render Transactions View (optionally filtered by search)
function renderTransactionsView() {
  const query = txSearchInput.value.toLowerCase().trim();
  const container = document.getElementById("txTableContainer");
  const txSummaryText = document.getElementById("txSummaryText");

  if (transactions.length === 0) {
    container.innerHTML = `<div class="empty-state">No transactions recorded yet.</div>`;
    txSummaryText.textContent = "0 transactions · Total Sales: ₱0.00 · VAT Collected: ₱0.00";
    return;
  }

  const totalSales = transactions.reduce((s, t) => s + t.totalDue, 0);
  const totalVat = transactions.reduce((s, t) => s + t.vatAmount, 0);
  const outstandingUtang = transactions.filter(t => t.status === "Unpaid").reduce((s, t) => s + t.totalDue, 0);

  txSummaryText.textContent = `${transactions.length} transactions · Total Sales: ₱${totalSales.toFixed(2)} · VAT Collected: ₱${totalVat.toFixed(2)}` +
    (outstandingUtang > 0 ? ` · Outstanding Utang: ₱${outstandingUtang.toFixed(2)}` : '');

  const filtered = query
    ? transactions.filter(t =>
        t.id.toLowerCase().includes(query) ||
        t.customer.toLowerCase().includes(query))
    : transactions;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">No transactions match your search.</div>`;
    return;
  }

  let rows = filtered.map(t => `
    <tr>
      <td class="tx-id">${t.id}</td>
      <td>${t.date}</td>
      <td>${t.customer}${t.paymentMethod === "Utang" && t.utangContact ? `<span class="tx-sub-line">${t.utangContact}</span>` : ''}</td>
      <td><span class="badge-pill badge-${t.paymentMethod.toLowerCase()}">${t.paymentMethod}</span></td>
      <td><span class="badge-pill badge-${t.status.toLowerCase()}">${t.status}</span></td>
      <td class="tx-total">₱${t.totalDue.toFixed(2)}</td>
      <td>${t.status === "Unpaid" ? `<button class="btn-mark-paid" onclick="markAsPaid('${t.id}')">Mark Paid</button>` : ''}</td>
    </tr>
  `).join("");

  container.innerHTML = `
    <table class="tx-table">
      <thead>
        <tr>
          <th>Txn ID</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Method</th>
          <th>Status</th>
          <th>Total Due</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

// Most / Least Purchased Product
function getProductStats() {
  const productCounts = {};
  transactions.forEach(t => {
    t.items.forEach(item => {
      productCounts[item.product_name] = (productCounts[item.product_name] || 0) + item.qty;
    });
  });

  const entries = Object.entries(productCounts);
  if (entries.length === 0) return { most: null, least: null };

  entries.sort((a, b) => b[1] - a[1]);
  return {
    most: { name: entries[0][0], qty: entries[0][1] },
    least: { name: entries[entries.length - 1][0], qty: entries[entries.length - 1][1] }
  };
}

// Sales grouped by category, highest first
function getCategoryBreakdown() {
  const totals = {};
  transactions.forEach(t => {
    t.items.forEach(item => {
      totals[item.category] = (totals[item.category] || 0) + item.subtotal;
    });
  });

  return Object.entries(totals)
    .map(([slug, amount]) => ({
      label: (CATEGORY_META[slug] && CATEGORY_META[slug].label) || slug,
      color: (CATEGORY_META[slug] && CATEGORY_META[slug].color) || "#94a3b8",
      amount
    }))
    .sort((a, b) => b.amount - a.amount);
}

// Sales grouped by individual product, highest revenue first (top N only, so the list stays readable)
function getTopProducts(limit = 8) {
  const totals = {};
  transactions.forEach(t => {
    t.items.forEach(item => {
      totals[item.product_name] = (totals[item.product_name] || 0) + item.subtotal;
    });
  });

  return Object.entries(totals)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, limit);
}

// Sales grouped by payment method
function getPaymentBreakdown() {
  const amounts = { Cash: 0, GCash: 0, Utang: 0 };
  const counts = { Cash: 0, GCash: 0, Utang: 0 };
  transactions.forEach(t => {
    amounts[t.paymentMethod] += t.totalDue;
    counts[t.paymentMethod] += 1;
  });
  return { amounts, counts };
}

// Render Reports View
function renderReportsView() {
  const container = document.getElementById("reportsContainer");
  if (transactions.length === 0) {
    container.innerHTML = `<div class="empty-state">No data yet. Complete transactions to see reports.</div>`;
    return;
  }

  const totalSales = transactions.reduce((s, t) => s + t.totalDue, 0);
  const totalVat = transactions.reduce((s, t) => s + t.vatAmount, 0);
  const totalDiscount = transactions.reduce((s, t) => s + t.discount, 0);
  const outstandingUtang = transactions.filter(t => t.status === "Unpaid").reduce((s, t) => s + t.totalDue, 0);
  const avgTxn = totalSales / transactions.length;

  const { most, least } = getProductStats();
  const categoryBreakdown = getCategoryBreakdown();
  const topProducts = getTopProducts();
  const { amounts, counts } = getPaymentBreakdown();
  const maxCategoryAmount = categoryBreakdown.length ? categoryBreakdown[0].amount : 1;
  const maxProductAmount = topProducts.length ? topProducts[0].amount : 1;
  const maxMethodAmount = Math.max(amounts.Cash, amounts.GCash, amounts.Utang, 1);

  container.innerHTML = `
    <div class="report-grid">
      <div class="report-card" style="--accent:#16a34a;">
        <h4><i class="fa-solid fa-sack-dollar"></i> Total Sales</h4>
        <p class="value">₱${totalSales.toFixed(2)}</p>
        <p class="sub">${transactions.length} transaction${transactions.length !== 1 ? 's' : ''} · avg ₱${avgTxn.toFixed(2)}</p>
      </div>

      <div class="report-card" style="--accent:#6366f1;">
        <h4><i class="fa-solid fa-receipt"></i> VAT Collected</h4>
        <p class="value">₱${totalVat.toFixed(2)}</p>
        <p class="sub">from regular (non-exempt) sales</p>
      </div>

      <div class="report-card" style="--accent:#a855f7;">
        <h4><i class="fa-solid fa-tags"></i> Discounts Given</h4>
        <p class="value">₱${totalDiscount.toFixed(2)}</p>
        <p class="sub">Senior / PWD / bulk discounts</p>
      </div>

      <div class="report-card" style="--accent:#d97706;">
        <h4><i class="fa-solid fa-hand-holding-dollar"></i> Outstanding Utang</h4>
        <p class="value">₱${outstandingUtang.toFixed(2)}</p>
        <p class="sub">unpaid credit owed to the store</p>
      </div>

      <div class="report-card" style="--accent:#0ea5e9;">
        <h4><i class="fa-solid fa-arrow-trend-up"></i> Most Purchased</h4>
        <p class="value value-sm">${most ? most.name : 'N/A'}</p>
        <p class="sub">${most ? most.qty + ' units sold' : ''}</p>
      </div>

      <div class="report-card" style="--accent:#94a3b8;">
        <h4><i class="fa-solid fa-arrow-trend-down"></i> Least Purchased</h4>
        <p class="value value-sm">${least ? least.name : 'N/A'}</p>
        <p class="sub">${least ? least.qty + ' unit' + (least.qty !== 1 ? 's' : '') + ' sold' : ''}</p>
      </div>
    </div>

    <h3 class="report-section-title">Sales by Category</h3>
    <div class="bar-list">
      ${categoryBreakdown.map(c => `
        <div class="bar-row">
          <span class="bar-label">${c.label}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${(c.amount / maxCategoryAmount * 100).toFixed(1)}%; background:${c.color};"></div></div>
          <span class="bar-value">₱${c.amount.toFixed(2)}</span>
        </div>
      `).join("")}
    </div>

    <h3 class="report-section-title">Top Selling Products</h3>
    <div class="bar-list">
      ${topProducts.map(p => `
        <div class="bar-row">
          <span class="bar-label">${p.name}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${(p.amount / maxProductAmount * 100).toFixed(1)}%; background:#16a34a;"></div></div>
          <span class="bar-value">₱${p.amount.toFixed(2)}</span>
        </div>
      `).join("")}
    </div>

    <h3 class="report-section-title">Payment Methods</h3>
    <div class="bar-list">
      ${["Cash", "GCash", "Utang"].map(m => `
        <div class="bar-row">
          <span class="bar-label">${m} <span class="bar-count">(${counts[m]})</span></span>
          <div class="bar-track"><div class="bar-fill" style="width:${(amounts[m] / maxMethodAmount * 100).toFixed(1)}%; background:${PAYMENT_COLORS[m]};"></div></div>
          <span class="bar-value">₱${amounts[m].toFixed(2)}</span>
        </div>
      `).join("")}
    </div>
  `;
}