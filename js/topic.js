document.addEventListener("DOMContentLoaded", () => {
  addChrome("units");
  const slug = new URLSearchParams(location.search).get("topic");
  const topic = CONTENT_DATA[slug];
  const main = document.querySelector("#topic-main");
  if (!topic) {
    main.append(
      SiteUI.el("h1", "", "Topic not found"),
      SiteUI.el(
        "p",
        "",
        "The link may be incorrect. Return to the overview to select a topic.",
      ),
      Object.assign(SiteUI.el("a", "primary-button", "Back to overview"), {
        href: "index.html",
      }),
    );
    return;
  }
  const sectionNumber = (i) => String(i + 1).padStart(2, "0");
  const sectionId = (i) => `section-${i + 1}`;
  const all = getTopics();
  const index = all.findIndex((t) => t.slug === slug);
  const prev = all[index - 1],
    next = all[index + 1];
  main.append(
    renderBreadcrumbs([
      { label: "Home", href: "index.html" },
      { label: `Unit ${topic.unit}`, href: `unit.html?unit=${topic.unit}` },
      { label: topic.unit_title, href: `unit.html?unit=${topic.unit}` },
      { label: topic.title },
    ]),
  );
  const grid = SiteUI.el("div", "topic-page-grid");
  const article = SiteUI.el("article", "topic-article");
  const hero = SiteUI.el("header", "topic-hero");
  hero.append(
    SiteUI.el(
      "span",
      "eyebrow",
      `UNIT ${topic.unit} / ${topic.unit_title.toUpperCase()}`,
    ),
    SiteUI.el("h1", "", topic.title),
    SiteUI.el("p", "topic-intro", topic.intro || ""),
  );
  const meta = SiteUI.el("div", "topic-meta");
  meta.append(
    SiteUI.el("span", "", `${topic.sections.length} sections`),
    SiteUI.el("span", "", "Notes · Syntax · Examples"),
  );
  hero.append(meta);
  article.append(hero);
  const toc = SiteUI.el("div", "mobile-toc");
  toc.append(SiteUI.el("label", "", "Jump to section"));
  const select = SiteUI.el("select", "");
  select.setAttribute("aria-label", "Jump to section");
  select.append(new Option("Choose a section", ""));
  topic.sections.forEach((s, i) =>
    select.append(new Option(`${sectionNumber(i)}. ${s.title}`, sectionId(i))),
  );
  select.addEventListener("change", () => {
    if (select.value)
      document
        .getElementById(select.value)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  toc.append(select);
  article.append(toc);
  topic.sections.forEach((section, i) => {
    const sectionEl = SiteUI.el("section", "content-section");
    sectionEl.id = sectionId(i);
    const heading = SiteUI.el("div", "content-section-heading");
    heading.append(
      SiteUI.el(
        "span",
        "section-number",
        sectionNumber(i),
      ),
      SiteUI.el("h2", "", section.title || `Section ${i + 1}`),
    );
    sectionEl.append(heading);
    (section.content || []).forEach((paragraph) => {
      if (String(paragraph).trim())
        sectionEl.append(SiteUI.el("p", "content-paragraph", paragraph));
    });
    if (section.syntax?.length) {
      const syntax = SiteUI.el("div", "syntax-panel");
      syntax.append(SiteUI.el("span", "syntax-label", "SYNTAX / FLOW"));
      section.syntax.forEach((line) =>
        syntax.append(SiteUI.el("code", "syntax-line", line)),
      );
      sectionEl.append(syntax);
    }
    if (section.table?.length) sectionEl.append(renderDataTable(section.table));
    if (section.examples?.length) {
      const examples = SiteUI.el("div", "examples-stack");
      section.examples.forEach((example, j) => {
        const ex = SiteUI.el("div", "example-block");
        ex.append(
          SiteUI.el("h3", "example-title", example.title || `Example ${j + 1}`),
        );
        if (example.code !== undefined)
          ex.append(renderCodeBlock(example.code, "Example code"));
        if (example.output !== undefined) {
          const out = SiteUI.el("div", "output-panel");
          out.append(SiteUI.el("span", "output-label", "EXPECTED OUTPUT"));
          const pre = SiteUI.el("pre", "output-content", example.output);
          out.append(pre);
          ex.append(out);
        }
        examples.append(ex);
      });
      sectionEl.append(examples);
    }
    if (section.type === "note") {
      sectionEl.classList.add("note-section");
      const label = SiteUI.el("span", "note-label", "KEY TAKEAWAYS");
      sectionEl.prepend(label);
    }
    article.append(sectionEl);
  });
  const pager = SiteUI.el("nav", "topic-pager");
  pager.setAttribute("aria-label", "Topic navigation");
  if (prev) {
    const a = SiteUI.el("a", "pager-link previous");
    a.href = `topic.html?topic=${encodeURIComponent(prev.slug)}`;
    a.append(
      SiteUI.el("small", "", "PREVIOUS TOPIC"),
      SiteUI.el("strong", "", prev.title),
    );
    pager.append(a);
  } else
    pager.append(
      SiteUI.el("div", "pager-spacer", "You are at the first topic."),
    );
  if (next) {
    const a = SiteUI.el("a", "pager-link next");
    a.href = `topic.html?topic=${encodeURIComponent(next.slug)}`;
    a.append(
      SiteUI.el("small", "", "NEXT TOPIC"),
      SiteUI.el("strong", "", next.title),
    );
    pager.append(a);
  } else
    pager.append(
      SiteUI.el("div", "pager-spacer", "You are at the last topic."),
    );
  article.append(pager);
  grid.append(article);
  const sidebar = SiteUI.el("aside", "topic-sidebar");
  const tocCard = SiteUI.el("div", "sidebar-card");
  tocCard.append(
    SiteUI.el("span", "eyebrow", "ON THIS PAGE"),
    SiteUI.el("h3", "", "Contents"),
  );
  const tocList = SiteUI.el("nav", "toc-list");
  tocList.setAttribute("aria-label", "Topic contents");
  topic.sections.forEach((s, i) => {
    const a = SiteUI.el("a", "toc-link");
    a.href = `#${sectionId(i)}`;
    a.append(
      SiteUI.el("span", "", sectionNumber(i)),
      SiteUI.el("span", "", s.title || `Section ${i + 1}`),
    );
    tocList.append(a);
  });
  tocCard.append(tocList);
  sidebar.append(tocCard);
  const related = SiteUI.el("div", "sidebar-card related-card");
  related.append(
    SiteUI.el("span", "eyebrow", "COURSE NAVIGATION"),
    SiteUI.el("h3", "", topic.unit_title),
  );
  const unitLink = SiteUI.el("a", "text-link", "View all unit topics ↗");
  unitLink.href = `unit.html?unit=${topic.unit}`;
  related.append(unitLink);
  sidebar.append(related);
  grid.append(sidebar);
  main.append(grid);
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelectorAll(".toc-link")
            .forEach((a) =>
              a.classList.toggle(
                "current",
                a.getAttribute("href") === `#${entry.target.id}`,
              ),
            );
        }
      }),
    { rootMargin: "-15% 0px -70% 0px" },
  );
  topic.sections.forEach((s, i) => {
    const node = document.getElementById(sectionId(i));
    if (node) observer.observe(node);
  });
});
