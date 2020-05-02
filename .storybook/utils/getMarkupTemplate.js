export default function(key, value) {
  if (typeof value === 'string') {
    return `${key}="${value}"`;
  }

  if (typeof value === 'boolean' && value) {
    return key
  }

  return `:${key}="${value}"`;
}