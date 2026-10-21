// Next.js prefixes Link routes; public assets and ordinary anchors need this helper.
export function sitePath(path: string) {
  return path.startsWith('/') && !path.startsWith('//')
    ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`
    : path
}
