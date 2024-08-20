export const fromHexString = (hexString: string): Uint8Array | undefined => {
  if (hexString === undefined) {
    return undefined;
  }
  const target = hexString.replace("0x", "").match(/.{1,2}/g);
  if (target == null) {
    return undefined;
  }
  return Uint8Array.from(target.map((byte) => parseInt(byte, 16)));
};

export const toHexString = (bytes: Uint8Array) => {
  return (
    "0x" +
    bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "")
  );
};
