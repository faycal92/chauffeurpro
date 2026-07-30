import { ImageResponse } from "next/og";
import { BrandIcon } from "@/lib/og-image";

export const runtime = "edge";
export const contentType = "image/png";

export function generateImageMetadata() {
  return [
    { id: "192", size: { width: 192, height: 192 } },
    { id: "512", size: { width: 512, height: 512 } },
  ];
}

export default function Icon({ id }: { id: string }) {
  const size = Number(id);
  return new ImageResponse(<BrandIcon size={size} />, {
    width: size,
    height: size,
  });
}
