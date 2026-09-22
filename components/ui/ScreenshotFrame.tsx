import Image from "next/image";

export default function ScreenshotFrame({
  src,
  alt,
  caption,
  width,
  height,
  withBar,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  withBar?: boolean;
}) {
  return (
    <figure className="m-0 flex flex-col gap-3.5">
      <div className="bg-surface border border-hairline rounded-xl p-2 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.9)] transition-[transform,box-shadow,border-color] duration-[240ms] ease-out hover:-translate-y-[3px] hover:border-accent hover:shadow-[0_30px_56px_-26px_rgba(0,0,0,0.95)]">
        {withBar && (
          <div className="flex items-center gap-1.5 px-2 pt-1.5 pb-2.5">
            <span className="w-[7px] h-[7px] rounded-full bg-hairline" />
            <span className="w-[7px] h-[7px] rounded-full bg-hairline" />
            <span className="w-[7px] h-[7px] rounded-full bg-hairline" />
          </div>
        )}
        <Image src={src} alt={alt} width={width} height={height} className="block w-full h-auto rounded-[7px]" />
      </div>
      <figcaption className="font-mono text-[11px] leading-[1.6] tracking-[0.04em] text-muted max-w-[70ch]">
        {caption}
      </figcaption>
    </figure>
  );
}
