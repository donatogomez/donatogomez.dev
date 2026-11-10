import { ogSize, renderOgImage } from "../lib/og-image";

export const alt = "Donato Gómez, desarrollador iOS";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("es");
}
