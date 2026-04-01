import AnimatedSection from "./AnimatedSection";

const rows = [
  { label: "Location", old: "You drive to them", cw: "Done in your garage" },
  { label: "Scheduling", old: "You remember & book", cw: "Automatic every week" },
  { label: "Wait time", old: "15–45 min in line", cw: "Washed while you sleep" },
  {
    label: "Consistency",
    old: "Varies by location",
    cw: "Same team, every time",
  },
  {
    label: "Cost clarity",
    old: "One-off charges add up",
    cw: "Flat monthly membership",
  },
  {
    label: "Water usage",
    old: "Hundreds of gallons per wash",
    cw: "Eco-friendly, minimal water",
  },
  {
    label: "Your effort",
    old: "Drive, wait, pay, repeat",
    cw: "Literally nothing",
  },
];

export default function Comparison() {
  return (
    <section
      className="relative py-16 md:py-[120px]"
      style={{
        background: "#F8FAFF",
        backgroundImage: "var(--gradient-mesh)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-[2rem] md:text-[3rem] font-bold leading-[1.15] tracking-[-0.02em] text-dark-900 mb-4">
            There&apos;s a Better Way to{" "}
            <span className="text-primary">Keep Your Car Clean</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="overflow-x-auto -mx-5 px-5">
            <table
              className="w-full min-w-[360px]"
              style={{
                borderCollapse: "separate",
                borderSpacing: 0,
                borderRadius: "20px",
                overflow: "hidden",
                background: "var(--glass-bg)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--glass-border)",
                boxShadow: "var(--glass-shadow)",
              }}
            >
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 md:py-4.5 md:px-6 text-xs md:text-[0.9375rem] font-bold text-dark-900 border-b border-[rgba(4,57,217,0.06)]">
                    &nbsp;
                  </th>
                  <th className="text-center py-3 px-3 md:py-4.5 md:px-6 text-xs md:text-[0.9375rem] font-bold text-[var(--color-text-muted)] border-b border-[rgba(4,57,217,0.06)]">
                    Traditional Car Wash
                  </th>
                  <th
                    className="text-center py-3 px-3 md:py-4.5 md:px-6 text-xs md:text-[0.9375rem] font-bold text-primary border-b border-[rgba(4,57,217,0.06)]"
                    style={{ background: "rgba(4, 57, 217, 0.04)" }}
                  >
                    CarWash365
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label}>
                    <td
                      className={`text-left py-3 px-3 md:py-4.5 md:px-6 text-xs md:text-sm font-semibold text-dark-900 ${
                        i < rows.length - 1
                          ? "border-b border-[rgba(4,57,217,0.06)]"
                          : ""
                      }`}
                    >
                      {row.label}
                    </td>
                    <td
                      className={`text-center py-3 px-3 md:py-4.5 md:px-6 text-xs md:text-sm text-[var(--color-text-muted)] ${
                        i < rows.length - 1
                          ? "border-b border-[rgba(4,57,217,0.06)]"
                          : ""
                      }`}
                    >
                      {row.old}
                    </td>
                    <td
                      className={`text-center py-3 px-3 md:py-4.5 md:px-6 text-xs md:text-sm font-semibold text-primary ${
                        i < rows.length - 1
                          ? "border-b border-[rgba(4,57,217,0.06)]"
                          : ""
                      }`}
                      style={{ background: "rgba(4, 57, 217, 0.04)" }}
                    >
                      {row.cw}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
