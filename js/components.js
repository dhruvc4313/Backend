/* Shared page chrome and DOM-safe rendering utilities. */
(function () {
  const $ = (selector, root = document) => root.querySelector(selector);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  };
  window.SiteUI = { $, el };
  window.renderHeader = function (active = "") {
    const header = el("header", "site-header");
    const inner = el("div", "header-inner");
    const brand = el("a", "brand", "BW");
    brand.href = "index.html";
    brand.setAttribute("aria-label", "Backend Web Development home");
    const brandText = el("span", "brand-name");
    brandText.innerHTML =
      "<strong>Backend</strong><span>Web Development</span>";
    brand.append(brandText);
    const nav = el("nav", "main-nav");
    nav.setAttribute("aria-label", "Main navigation");
    [
      ["index.html", "Overview", "home"],
      ["unit.html?unit=01", "Units", "units"],
    ].forEach(([href, label, key]) => {
      const a = el("a", active === key ? "active" : "", label);
      a.href = href;
      nav.append(a);
    });
    const search = el("a", "header-search", "⌕  Search topics");
    search.href = "index.html#topic-search";
    inner.append(brand, nav, search);
    header.append(inner);
    return header;
  };
  window.renderFooter = function () {
    const footer = el("footer", "site-footer");
    const inner = el("div", "footer-inner");
    const p = el("p", "", "Backend Web Development · Assignment Learning Hub");
    const note = el(
      "p",
      "footer-note",
      "Built with HTML, CSS and browser-side JavaScript.",
    );
    inner.append(p, note);
    footer.append(inner);
    return footer;
  };
  window.addChrome = function (active) {
    document.body.prepend(renderHeader(active));
    document.body.append(renderFooter());
  };
  window.renderBreadcrumbs = function (items) {
    const nav = el("nav", "breadcrumbs");
    nav.setAttribute("aria-label", "Breadcrumb");
    items.forEach((item, index) => {
      if (index) nav.append(el("span", "crumb-separator", "/"));
      if (item.href) {
        const a = el("a", "", item.label);
        a.href = item.href;
        nav.append(a);
      } else nav.append(el("span", "crumb-current", item.label));
    });
    return nav;
  };
  window.renderCodeBlock = function (code, language = "Code") {
    const wrap = el("div", "code-card");
    const top = el("div", "code-toolbar");
    const lang = el("span", "code-language", language);
    const button = el("button", "copy-button", "Copy code");
    button.type = "button";
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(String(code ?? ""));
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy code"), 1300);
      } catch {
        const area = el("textarea", "copy-fallback");
        area.value = String(code ?? "");
        document.body.append(area);
        area.select();
        document.execCommand("copy");
        area.remove();
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy code"), 1300);
      }
    });
    const pre = el("pre", "code-content");
    const c = el("code", "", String(code ?? ""));
    pre.append(c);
    top.append(lang, button);
    wrap.append(top, pre);
    return wrap;
  };
  window.renderDataTable = function (rows) {
    const wrap = el("div", "table-wrap");
    const table = el("table", "content-table");
    const thead = el("thead");
    const tr = el("tr");
    ["Term / Function", "Purpose / Description"].forEach((t) =>
      tr.append(el("th", "", t)),
    );
    thead.append(tr);
    const tbody = el("tbody");
    (rows || []).forEach((row) => {
      const r = el("tr");
      r.append(
        el("td", "table-term", row.function ?? ""),
        el("td", "", row.purpose ?? ""),
      );
      tbody.append(r);
    });
    table.append(thead, tbody);
    wrap.append(table);
    return wrap;
  };
})();
