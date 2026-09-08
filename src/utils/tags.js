const GEORGIAN_TAGS = {
  programming: "პროგრამირება",
  "computer-science": "კომპიუტერული მეცნიერება",
  "georgian-culture": "ქართული კულტურა",
};

// Tags are stored as slugs. This is the single place that turns one into a
// label, so the filters, the cards, and the post pages always agree.
export function formatTag(tag, locale) {
  if (locale === "ka") {
    return GEORGIAN_TAGS[tag] ?? tag.replaceAll("-", " ");
  }

  const words = tag.replaceAll("-", " ");

  return words.charAt(0).toUpperCase() + words.slice(1);
}
