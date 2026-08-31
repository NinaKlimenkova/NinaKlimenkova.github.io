const baseUrl = import.meta.env.BASE_URL;

/** Build an internal URL that remains valid on repository-based GitHub Pages sites. */
export function withBase(path = ""): string {
  const normalizedPath = path.replace(/^\/+/, "");
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${normalizedPath}`;
}
