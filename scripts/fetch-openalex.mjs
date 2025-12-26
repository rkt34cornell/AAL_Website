import fs from "node:fs/promises";
import path from "node:path";

const ORCIDS = [
  { name: "Gregory Falco", orcid: "0000-0002-6463-7719" },
  { name: "Nicolò Boschetti", orcid: "0000-0001-5904-3900" },
  { name: "Rajiv Thummala", orcid: "0009-0006-8293-4764" },
  { name: "Cameron Mehlman", orcid: "0000-0003-2385-3631" },
  { name: "Jackson Artis", orcid: "0009-0009-3578-6529" },
  { name: "Larisa Azad", orcid: "0000-0003-3787-1478" },
];

const MAILTO = "aerospaceadversarylab@gmail.com";
const PER_PAGE = 200;

const fetchJson = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`OpenAlex request failed (${res.status}): ${url}`);
  }
  return res.json();
};

const normalizeTitle = (title) =>
  (title || "").toLowerCase().replace(/\s+/g, " ").trim();

const formatWork = (work) => {
  const hostVenue = work.host_venue || {};
  const venue = hostVenue.display_name || work.primary_location?.source?.display_name || "";
  const year = work.publication_year || "";
  const landingPage =
    work.doi
      ? `https://doi.org/${work.doi.replace("https://doi.org/", "")}`
      : work.primary_location?.landing_page_url || work.id;

  return {
    id: work.id,
    title: work.title || "Untitled",
    venue,
    year,
    url: landingPage,
    publicationDate: work.publication_date || "",
  };
};

const main = async () => {
  const worksById = new Map();

  for (const author of ORCIDS) {
    const url =
      `https://api.openalex.org/works?filter=authorships.author.orcid:${author.orcid}` +
      `&sort=publication_date:desc&per-page=${PER_PAGE}&mailto=${encodeURIComponent(MAILTO)}`;
    const data = await fetchJson(url);
    const results = Array.isArray(data.results) ? data.results : [];

    for (const work of results) {
      if (work.type === "book-chapter") {
        continue;
      }
      const key = work.id || normalizeTitle(work.title);
      const formatted = formatWork(work);
      const titleKey = normalizeTitle(formatted.title);
      if (
        !worksById.has(key) &&
        !Array.from(worksById.values()).some(
          (existing) =>
            normalizeTitle(existing.title) === titleKey &&
            existing.year === formatted.year
        )
      ) {
        worksById.set(key, formatted);
      }
    }
  }

  const items = Array.from(worksById.values()).sort((a, b) =>
    (b.publicationDate || "").localeCompare(a.publicationDate || "")
  );

  const payload = {
    updatedAt: new Date().toISOString(),
    items,
  };

  const outPath = path.resolve("public", "recent-research.json");
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, JSON.stringify(payload, null, 2) + "\n", "utf8");
  console.log(`Wrote ${items.length} items to ${outPath}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
