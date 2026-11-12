document.addEventListener("DOMContentLoaded", () => {
  addChrome("home");
  const topics = getTopics();
  const units = getUnits();
  const unitGrid = document.querySelector("#unit-grid");
  units.forEach((unit, index) => {
    const card = SiteUI.el("a", "unit-card");
    card.href = `unit.html?unit=${unit.id}`;
    const top = SiteUI.el("div", "unit-card-top");
    top.append(
      SiteUI.el("span", "unit-number", `UNIT ${unit.id}`),
      SiteUI.el("span", "unit-count", `${unit.topics.length} topics`),
    );
    const title = SiteUI.el("h3", "", unit.title);
    const desc = SiteUI.el("p", "", unit.description);
    const bottom = SiteUI.el("div", "unit-card-bottom");
    bottom.append(
      SiteUI.el("span", "", "Explore unit"),
      SiteUI.el("span", "arrow", "↗"),
    );
    card.append(top, title, desc, bottom);
    unitGrid.append(card);
  });
  const search = document.querySelector("#topic-search");
  const results = document.querySelector("#search-results");
  const renderResults = (query = "") => {
    results.replaceChildren();
    const q = query.trim().toLowerCase();
    if (!q) {
      results.classList.remove("visible");
      return;
    }
    const matches = topics
      .filter((t) =>
        `${t.title} ${t.intro} ${t.unit_title} ${t.sections.map((s) => `${s.title} ${(s.content || []).join(" ")}`).join(" ")}`
          .toLowerCase()
          .includes(q),
      )
      .slice(0, 12);
    results.classList.add("visible");
    if (!matches.length) {
      results.append(
        SiteUI.el(
          "p",
          "no-results",
          "No matching topics found. Try a different keyword.",
        ),
      );
      return;
    }
    matches.forEach((t) => {
      const a = SiteUI.el("a", "search-result");
      a.href = `topic.html?topic=${encodeURIComponent(t.slug)}`;
      const copy = SiteUI.el("span", "search-result-copy");
      copy.append(
        SiteUI.el("strong", "", t.title),
        SiteUI.el(
          "small",
          "",
          `${t.unit_title} · ${t.sections.length} sections`,
        ),
      );
      a.append(copy, SiteUI.el("span", "arrow", "↗"));
      results.append(a);
    });
  };
  search.addEventListener("input", () => renderResults(search.value));
  document.querySelectorAll("[data-scroll-search]").forEach((b) =>
    b.addEventListener("click", () => {
      document
        .querySelector("#search-area")
        .scrollIntoView({ behavior: "smooth" });
      search.focus();
    }),
  );
  const all = document.querySelector("#all-topics");
  topics.slice(0, 8).forEach((t) => {
    const a = SiteUI.el("a", "topic-row");
    a.href = `topic.html?topic=${encodeURIComponent(t.slug)}`;
    a.append(
      SiteUI.el("span", "topic-row-title", t.title),
      SiteUI.el("span", "topic-row-meta", t.unit_title),
      SiteUI.el("span", "arrow", "↗"),
    );
    all.append(a);
  });
  document.querySelector("#topic-total").textContent = String(
    topics.length,
  ).padStart(2, "0");
  document.querySelector("#section-total").textContent = String(
    topics.reduce((n, t) => n + t.sections.length, 0),
  );
});
