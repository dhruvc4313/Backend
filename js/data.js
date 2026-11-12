/* Site metadata and navigation helpers. */
window.UNIT_META = {
  "01": {
    title: "Internet Technologies",
    short: "Internet foundations",
    description:
      "Understand the protocols and browser technologies that make the web work.",
  },
  "02": {
    title: "PHP Programming",
    short: "Programming essentials",
    description:
      "Study PHP syntax, variables, data types, operators, decisions, loops, functions, arrays and strings.",
  },
  "03": {
    title: "HTML Forms with PHP",
    short: "Forms and validation",
    description:
      "Learn how web forms collect, submit and validate user information.",
  },
  "04": {
    title: "Database Connectivity with MySQL",
    short: "Working with data",
    description:
      "Study database connections, tables, inserting, retrieving and modifying records.",
  },
};
window.getTopics = function () {
  return Object.entries(window.CONTENT_DATA).map(([slug, topic]) => ({
    slug,
    ...topic,
  }));
};
window.getUnits = function () {
  return Object.keys(window.UNIT_META).map((id) => ({
    id,
    ...window.UNIT_META[id],
    topics: window.getTopics().filter((t) => t.unit === id),
  }));
};
window.escapeHTML = function (value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
};
