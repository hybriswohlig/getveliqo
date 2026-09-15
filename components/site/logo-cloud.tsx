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
    <section className="bg-paper pt-14 pb-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-smoke">
          Trusted by teams at
        </p>
        <div className="mt-7 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold tracking-wide text-black/35 transition-colors hover:text-black/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
