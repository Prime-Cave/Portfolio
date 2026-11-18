import Image from "next/image";

// Shared caption style for screenshots, videos and figure groups.
export const CAPTION = "text-[14px] leading-[1.55] text-muted max-w-[64ch] text-pretty";

export default function ScreenshotFrame({
  src,
  alt,
  caption,
  width,
  height,
  sizes = "(max-width: 1000px) 100vw, 888px",
  withBar,
}: {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  sizes?: string;
  withBar?: boolean;
}) {
  return (
    <figure className="m-0 flex flex-col gap-4">
      <div className="bg-surface rounded-2xl p-1.5 ring-1 ring-inset ring-white/[0.05] shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)]">
        {withBar && (
          <div className="flex items-center gap-1.5 px-2 pt-1.5 pb-2.5">
            <span className="w-2 h-2 rounded-full bg-hairline" />
            <span className="w-2 h-2 rounded-full bg-hairline" />
            <span className="w-2 h-2 rounded-full bg-hairline" />
          </div>
        )}
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className="block w-full h-auto rounded-[11px]" />
      </div>
      {caption && (
        <figcaption className={CAPTION}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
