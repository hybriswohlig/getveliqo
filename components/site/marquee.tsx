const services = ["SEO", "GEO", "Product Marketing", "Amazon FBA", "VELIQO"];

export function Marquee() {
  return (
    <div className="overflow-hidden bg-lime py-5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {[...services, ...services, ...services, ...services].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-lg font-bold tracking-[0.22em] text-lime-ink"
          >
            {item}
            <span aria-hidden className="text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
