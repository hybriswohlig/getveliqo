const companies = [
  "Northwind",
  "Acme Corp",
  "Lumina",
  "Statler",
  "Vertex Labs",
  "Osmo",
];

export function LogoCloud() {
  return (
    <section className="border-y border-white/8 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-mist">
          Trusted by teams at
        </p>
        <div className="mt-7 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold tracking-wide text-white/35 transition-colors hover:text-white/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
