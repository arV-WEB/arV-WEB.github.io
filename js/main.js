document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const productForm = document.querySelector("#productFilterForm");
  const productGrid = document.querySelector("#productGrid");
  const productStatus = document.querySelector("#productStatus");
  const searchInput = document.querySelector("#flavorSearch");
  const priceRange = document.querySelector("#priceRange");
  const toastElement = document.querySelector("#shopToast");
  const toast = toastElement && window.bootstrap ? new bootstrap.Toast(toastElement, { delay: 2600 }) : null;

  function showToast(message) {
    if (!toastElement) {
      return;
    }

    toastElement.querySelector(".toast-body").textContent = message;
    toast.show();
  }

  function scrollToFlavors() {
    const target = document.querySelector("#flavors");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function priceMatches(price, range) {
    if (range === "low") return price < 20000;
    if (range === "mid") return price >= 20000 && price <= 24000;
    if (range === "high") return price > 24000;
    return true;
  }

  function filterProducts() {
    if (!productGrid) {
      return [];
    }

    const query = (searchInput?.value || "").trim().toLowerCase();
    const range = priceRange?.value || "all";
    const items = [...productGrid.querySelectorAll(".product-item")];
    const visible = [];

    items.forEach((item) => {
      const name = item.dataset.name || "";
      const price = Number(item.dataset.price || 0);
      const match = name.includes(query) && priceMatches(price, range);
      item.classList.toggle("is-hidden", !match);
      item.querySelector(".flavor-card")?.classList.remove("highlight");
      if (match) visible.push(item);
    });

    if (productStatus) {
      productStatus.textContent = visible.length
        ? `${visible.length} flavor available for your selection.`
        : "No flavor matches your search. Try another keyword or price range.";
    }

    return visible;
  }

  productForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = (searchInput?.value || "").trim();
    const searchIsOpen = productForm.classList.contains("search-open");

    if (!searchIsOpen && !query && window.matchMedia("(min-width: 992px)").matches) {
      productForm.classList.add("search-open");
      searchInput?.focus();
      showToast("Type a flavor name, then press the search icon again.");
      return;
    }

    const visible = filterProducts();
    scrollToFlavors();
    showToast(visible.length ? "Search complete. Matching flavors are shown." : "No matching flavor found.");
  });

  document.addEventListener("click", (event) => {
    if (!productForm?.contains(event.target) && !searchInput?.value.trim()) {
      productForm?.classList.remove("search-open");
    }
  });

  priceRange?.addEventListener("change", () => {
    const visible = filterProducts();
    scrollToFlavors();
    showToast(visible.length ? "Price range applied." : "No product in this price range.");
  });

  productForm?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) {
      return;
    }

    const action = button.dataset.action;

    if (action === "explore") {
      if (searchInput) searchInput.value = "";
      if (priceRange) priceRange.value = "all";
      filterProducts();
      scrollToFlavors();
      showToast("Explore all Xylitol flavors.");
    }

    if (action === "buy") {
      const visible = filterProducts();
      scrollToFlavors();
      const firstCard = visible[0]?.querySelector(".flavor-card");
      firstCard?.classList.add("highlight");
      showToast(visible[0] ? "Choose a product card below to continue buying." : "No product is available to buy.");
    }
  });

  document.querySelectorAll(".product-buy").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".flavor-card").forEach((card) => card.classList.remove("highlight"));
      button.closest(".flavor-card")?.classList.add("highlight");
      showToast(`${button.dataset.product} selected. Please continue to contact us for ordering.`);
    });
  });

  document.querySelectorAll(".needs-brand-feedback").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const response = form.querySelector(".form-response");
      if (response) {
        response.textContent = "Thank you. Your request has been received.";
      }
      form.reset();
    });
  });

  document.querySelectorAll(".newsletter-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
      showToast(input?.value ? "Thanks for joining our newsletter." : "Please enter your email first.");
      form.reset();
    });
  });
});
