import { fontData, experimental_getFontFileURL } from 'astro:assets';

const font = fontData['--font-jetbrains-mono'].find(
  (font) => font.weight == '500' && font.src.some((f) => f.format === 'truetype')
);

if (font === undefined) {
  throw new Error('Cannot find the font path.');
}

export const getFontSrc = async (url: URL) => {
  const fontPath = experimental_getFontFileURL(font.src[0]?.url, url);
  const fontSrc = await fetch(fontPath).then((res) => res.arrayBuffer());
  return fontSrc;
};
