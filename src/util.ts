import { getEntry } from "astro:content";

export async function localize({
  entry,
  lang,
}: {
  entry: string;
  lang: string;
}) {
  const localeEntry = await getEntry("locale", entry);
  if (!localeEntry) {
    throw new Error(`File not found for locale entry "${entry}"`);
  }

  return (id: string) => {
    const res = localeEntry.data[id][lang as "en" | "fr"];
    if (!res) {
      throw new Error(
        `Locale entry not found for string id "${id}" for lang "${lang}"`,
      );
    }
    return res;
  };
}
