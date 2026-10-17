import Image from "next/image";

// Navy line illustrations derived from the supplied vector packs (see /public/illustrations).
const sizes = {
  "crane-slab": [479, 509],
  welder: [375, 596],
  truck: [603, 462],
  frame: [857, 803],
  timber: [375, 504],
  blueprint: [190, 416],
  hardhat: [198, 157],
  engineers: [239, 413],
  crew: [900, 769],
} as const;

export type IllustrationName = keyof typeof sizes;

export default function Illustration({ name, className = "" }: { name: IllustrationName; className?: string }) {
  const [width, height] = sizes[name];
  return (
    <Image
      src={`/illustrations/${name}.png`}
      alt=""
      aria-hidden
      width={width}
      height={height}
      className={`pointer-events-none select-none ${className}`}
    />
  );
}
