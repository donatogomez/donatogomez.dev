import { ogSize, renderOgImage } from "../../lib/og-image";

export const alt = "Donato Gómez, iOS developer";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("en");
}
