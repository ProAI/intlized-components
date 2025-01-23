export default function createDictHash(defaultMessages) {
  const json = JSON.stringify(defaultMessages);

  // Simple hash function (FNV-1a)
  let hash = 2166136261n; // FNV offset basis
  const FNV_PRIME = 16777619n; // FNV prime

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < json.length; i++) {
    // eslint-disable-next-line no-undef, no-bitwise
    hash ^= BigInt(json.charCodeAt(i)); // XOR with the byte
    hash *= FNV_PRIME; // Multiply by the prime
  }

  return hash.toString(16);
}
