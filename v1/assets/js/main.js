/* Greylongg design mockups: shared behaviour.
   Everything here is faked client-side for the demo. Nothing is saved or sent. */
(function () {
  "use strict";

  var IMG = "images/claude-uploads/home/products/";
  var SIZES = ["S", "M", "L", "XL", "2XL"];
  var products = window.GL_PRODUCTS || [];
  var cart = [];

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var rupee = function (n) { return "₹" + n.toLocaleString("en-IN"); };
  var icons = function () { if (window.lucide) { window.lucide.createIcons(); } };
  var nb = function (s) { return s.replace(/T-Shirt/g, "T‑Shirt"); };
  var byId = function (id) { return products.filter(function (p) { return p.id === id; })[0]; };

  /* Product cards ---------------------------------------------------------- */
  function cardHTML(p) {
    var off = p.mrp ? Math.round((1 - p.price / p.mrp) * 100) : 0;
    var sizes = p.sizes || SIZES;
    return (
      '<article class="product-card" data-id="' + p.id + '">' +
        '<div class="product-card__top">' +
        '<a class="product-card__media" href="product.html">' +
          '<img src="' + IMG + p.id + '-1.jpg" alt="' + p.title + '" loading="lazy">' +
          '<img src="' + IMG + p.id + '-2.jpg" alt="" loading="lazy">' +
          (p.tag ? '<span class="product-card__tag">' + p.tag + "</span>" : "") +
        "</a>" +
        '<button class="icon-btn product-card__wish" type="button" aria-label="Add to wishlist" aria-pressed="false"><i data-lucide="heart"></i></button>' +
        '<div class="quick-add">' +
          '<button class="quick-add__btn" type="button" aria-label="Quick add">Quick add</button>' +
          '<div class="quick-add__sizes"><p>Select size</p><div>' +
            sizes.map(function (s) { return '<button type="button" data-size="' + s + '">' + s + "</button>"; }).join("") +
          "</div></div>" +
        "</div>" +
        "</div>" +
        '<div class="product-card__body">' +
          '<h3 class="product-card__title"><a href="product.html">' + nb(p.title) + "</a></h3>" +
          '<div class="product-card__rating"><i data-lucide="star"></i>' + p.rating.toFixed(1) + " (" + p.reviews + ")</div>" +
          '<div class="price"><span>' + rupee(p.price) + "</span>" +
            (p.mrp ? "<s>" + rupee(p.mrp) + "</s><em>" + off + "% off</em>" : "") +
          "</div>" +
          (p.colors.length > 1
            ? '<div class="swatches">' +
                p.colors.map(function (c) { return '<span class="swatch" style="background:' + c + '"></span>'; }).join("") +
                "<small>" + p.colors.length + " colours</small></div>"
            : "") +
        "</div>" +
      "</article>"
    );
  }

  $$("[data-products]").forEach(function (grid) {
    var group = grid.getAttribute("data-products");
    grid.innerHTML = products.filter(function (p) { return p.group === group; }).map(cardHTML).join("");
  });

  document.addEventListener("click", function (e) {
    var wish = e.target.closest(".product-card__wish");
    if (wish) {
      var on = wish.classList.toggle("is-active");
      wish.setAttribute("aria-pressed", on);
      return;
    }

    var quick = e.target.closest(".quick-add__btn");
    if (quick) {
      $$(".quick-add.is-picking").forEach(function (q) { q.classList.remove("is-picking"); });
      quick.parentNode.classList.add("is-picking");
      return;
    }

    var size = e.target.closest(".quick-add__sizes button");
    if (size) {
      var card = size.closest(".product-card");
      size.closest(".quick-add").classList.remove("is-picking");
      addToCart(card.getAttribute("data-id"), size.getAttribute("data-size"));
      return;
    }

    if (!e.target.closest(".quick-add")) {
      $$(".quick-add.is-picking").forEach(function (q) { q.classList.remove("is-picking"); });
    }
  });

  /* Cart drawer ------------------------------------------------------------ */
  var cartDrawer = $("#cart-drawer");
  var cartBody = $("#cart-items");
  var cartFoot = $("#cart-foot");

  function addToCart(id, size) {
    var line = cart.filter(function (l) { return l.id === id && l.size === size; })[0];
    if (line) { line.qty += 1; } else { cart.push({ id: id, size: size, qty: 1 }); }
    renderCart();
    openLayer(cartDrawer);
  }

  function renderCart() {
    var count = cart.reduce(function (n, l) { return n + l.qty; }, 0);
    var total = cart.reduce(function (n, l) { return n + l.qty * byId(l.id).price; }, 0);

    $$(".cart-count").forEach(function (el) {
      el.textContent = count;
      el.setAttribute("data-count", count);
    });

    if (!cartBody) { return; }

    if (!cart.length) {
      cartBody.innerHTML =
        '<div class="cart-empty"><p class="muted">Your cart is empty.</p>' +
        '<a class="btn btn--secondary" href="collection.html">Shop polos</a></div>';
      cartFoot.hidden = true;
      return;
    }

    cartBody.innerHTML = cart.map(function (l, i) {
      var p = byId(l.id);
      return (
        '<div class="cart-item">' +
          '<img src="' + IMG + p.id + '-1.jpg" alt="' + p.title + '">' +
          "<div>" +
            '<p class="cart-item__title">' + p.title + "</p>" +
            '<p class="cart-item__meta">Size ' + l.size + " · " + rupee(p.price) + "</p>" +
            '<div class="cart-item__row">' +
              '<div class="qty"><button type="button" data-qty="-1" data-line="' + i + '" aria-label="Decrease quantity">−</button>' +
              "<span>" + l.qty + "</span>" +
              '<button type="button" data-qty="1" data-line="' + i + '" aria-label="Increase quantity">+</button></div>' +
              '<button class="cart-item__remove" type="button" data-remove="' + i + '">Remove</button>' +
            "</div>" +
          "</div>" +
        "</div>"
      );
    }).join("");

    $("#cart-total").textContent = rupee(total);
    cartFoot.hidden = false;
  }

  if (cartBody) {
    cartBody.addEventListener("click", function (e) {
      var qty = e.target.closest("[data-qty]");
      var remove = e.target.closest("[data-remove]");
      if (qty) {
        var line = cart[+qty.getAttribute("data-line")];
        line.qty += +qty.getAttribute("data-qty");
        if (line.qty < 1) { cart.splice(cart.indexOf(line), 1); }
        renderCart();
      } else if (remove) {
        cart.splice(+remove.getAttribute("data-remove"), 1);
        renderCart();
      }
    });
  }

  /* Drawers, search overlay, scrim ---------------------------------------- */
  var scrim = $(".scrim");

  function openLayer(layer) {
    closeLayers();
    layer.classList.add("is-open");
    scrim.classList.add("is-open");
    document.body.classList.add("is-locked");
    var input = $("input", layer);
    if (input && layer.id === "search-overlay") { setTimeout(function () { input.focus(); }, 200); }
  }

  function closeLayers() {
    $$(".drawer.is-open, .search-overlay.is-open").forEach(function (l) { l.classList.remove("is-open"); });
    scrim.classList.remove("is-open");
    document.body.classList.remove("is-locked");
  }

  $$("[data-open]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openLayer($("#" + btn.getAttribute("data-open")));
    });
  });

  $$("[data-close]").forEach(function (btn) { btn.addEventListener("click", closeLayers); });
  scrim.addEventListener("click", closeLayers);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeLayers(); } });

  /* Search ----------------------------------------------------------------- */
  var searchInput = $("#search-input");
  var searchResults = $("#search-results");

  function runSearch() {
    var q = searchInput.value.trim().toLowerCase();
    if (!q) { searchResults.innerHTML = ""; return; }
    var words = q.replace(/t-shirts?|tees?/g, "").split(/\s+/).filter(Boolean);
    var hits = products.filter(function (p) {
      var hay = (p.title + " " + (p.tag || "") + " " + (p.keywords || "") + " " + p.group).toLowerCase();
      return words.every(function (w) { return hay.indexOf(w.replace(/s$/, "")) > -1; });
    }).slice(0, 4);

    searchResults.innerHTML = hits.length
      ? hits.map(function (p) {
          return '<a class="search-result" href="product.html"><img src="' + IMG + p.id + '-1.jpg" alt="">' +
            "<div>" + p.title + "<span>" + rupee(p.price) + "</span></div></a>";
        }).join("")
      : '<p class="search-none">No matches for “' + searchInput.value + "” in this mockup. Try a suggestion above.</p>";
  }

  if (searchInput) {
    searchInput.addEventListener("input", runSearch);
    $$(".search-chips .chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        searchInput.value = chip.textContent;
        runSearch();
      });
    });
    $(".search-form").addEventListener("submit", function (e) { e.preventDefault(); });
  }

  /* Mobile nav drawer: built from the desktop mega menus ------------------ */
  var mnav = $("#mnav-list");
  if (mnav) {
    $$(".main-nav__item").forEach(function (item, i) {
      var link = $(".main-nav__link", item);
      var tile = $(".mega__tile img", item);
      var row = document.createElement("button");
      row.type = "button";
      row.className = "mnav__row";
      row.setAttribute("aria-expanded", "false");
      row.setAttribute("aria-controls", "mnav-panel-" + i);
      row.innerHTML = '<img src="' + tile.getAttribute("src") + '" alt=""><span>' + link.textContent +
        '</span><i data-lucide="chevron-down"></i>';

      var panel = document.createElement("div");
      panel.className = "mnav__panel";
      panel.id = "mnav-panel-" + i;
      panel.appendChild($(".mega__foot .text-link", item).cloneNode(true));
      $$(".mega__col, .mega__brands", item).forEach(function (col) {
        if (col.children.length) { panel.appendChild(col.cloneNode(true)); }
      });

      row.addEventListener("click", function () {
        var open = panel.classList.toggle("is-open");
        row.setAttribute("aria-expanded", open);
      });

      mnav.appendChild(row);
      mnav.appendChild(panel);
    });
  }

  /* Sticky header shrink --------------------------------------------------- */
  var header = $(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 80); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Hero fills the first screen: tell the CSS how tall the bars above it are */
  var heroEl = $(".hero");
  if (heroEl) {
    var setHeroOffset = function () {
      var top = heroEl.getBoundingClientRect().top + window.scrollY;
      heroEl.style.setProperty("--hero-offset", Math.round(top) + "px");
    };
    window.addEventListener("resize", setHeroOffset);
    window.addEventListener("load", setHeroOffset);
    setHeroOffset();
  }

  /* Tabs ------------------------------------------------------------------- */
  $$(".tabs").forEach(function (tablist) {
    var tabs = $$(".tab", tablist);
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute("aria-selected", on);
          $("#" + t.getAttribute("aria-controls")).hidden = !on;
        });
      });
    });
  });

  /* SEO block expand ------------------------------------------------------- */
  var seoToggle = $("#seo-toggle");
  if (seoToggle) {
    seoToggle.addEventListener("click", function () {
      var open = $("#seo-text").classList.toggle("is-open");
      seoToggle.setAttribute("aria-expanded", open);
      $("span", seoToggle).textContent = open ? "Read less" : "Read more";
    });
  }

  /* Newsletter ------------------------------------------------------------- */
  var news = $("#newsletter-form");
  if (news) {
    news.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.createElement("p");
      note.className = "newsletter__thanks";
      note.textContent = "Thanks. Check your inbox for your welcome offer.";
      news.parentNode.replaceChild(note, news);
    });
  }

  renderCart();
  icons();
})();
