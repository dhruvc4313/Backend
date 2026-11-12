document.addEventListener("DOMContentLoaded", () => {
  addChrome("units");
  const params = new URLSearchParams(location.search);
  const id = params.get("unit") || "01";
  const unit = UNIT_META[id];
  const main = document.querySelector("#unit-main");
  if (!unit) {
    main.append(
      SiteUI.el("h1", "", "Unit not found"),
      SiteUI.el("p", "", "Choose a unit from the home page."),
    );
    return;
  }
  const topics = getTopics().filter((t) => t.unit === id);
  main.append(
    renderBreadcrumbs([
      { label: "Home", href: "index.html" },
      { label: "Units", href: "index.html#units" },
      { label: `Unit ${id} · ${unit.title}` },
    ]),
  );
  const hero = SiteUI.el("section", "unit-hero");
  hero.append(
    SiteUI.el("span", "eyebrow", `UNIT ${id} / COURSE CONTENT`),
    SiteUI.el("h1", "", unit.title),
    SiteUI.el("p", "", unit.description),
  );
  const stats = SiteUI.el("div", "unit-stats");
  stats.append(
    SiteUI.el("span", "", `${topics.length} topics`),
    SiteUI.el("span", "", "Structured notes & examples"),
    SiteUI.el("span", "", "Self-paced learning"),
  );
  hero.append(stats);
  main.append(hero);
  const layout = SiteUI.el("div", "unit-layout");
  const list = SiteUI.el("section", "topic-list-panel");
  const head = SiteUI.el("div", "section-heading");
  head.append(
    SiteUI.el("div", "", "STUDY PATH"),
    SiteUI.el("h2", "", "Topics in this unit"),
    SiteUI.el("p", "", "Choose a topic to open the complete notes."),
  );
  list.append(head);
  topics.forEach((t, i) => {
    const a = SiteUI.el("a", "topic-list-item");
    a.href = `topic.html?topic=${encodeURIComponent(t.slug)}`;
    const n = SiteUI.el("span", "topic-index", String(i + 1).padStart(2, "0"));
    const body = SiteUI.el("span", "topic-list-copy");
    body.append(
      SiteUI.el("strong", "", t.title),
      SiteUI.el("small", "", `${t.sections.length} sections · detailed notes`),
    );
    a.append(n, body, SiteUI.el("span", "arrow", "↗"));
    list.append(a);
  });
  const aside = SiteUI.el("aside", "unit-aside");
  aside.append(
    SiteUI.el("span", "eyebrow", "IN THIS UNIT"),
    SiteUI.el("h3", "", "A clear path through the syllabus"),
    SiteUI.el(
      "p",
      "",
      "Move through the topics in order, or open any topic directly. Each topic page includes section navigation and previous/next links.",
    ),
    SiteUI.el("div", "aside-divider"),
  );
  const other = SiteUI.el("h4", "", "Other units");
  getUnits()
    .filter((u) => u.id !== id)
    .forEach((u) => {
      const a = SiteUI.el("a", "other-unit");
      a.href = `unit.html?unit=${u.id}`;
      a.append(
        SiteUI.el("span", "", `Unit ${u.id}`),
        SiteUI.el("strong", "", u.title),
      );
      other.append(a);
    });
  aside.append(other);
  layout.append(list, aside);
  main.append(layout);
});
