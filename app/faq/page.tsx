const faqs = [
  ['What are the strongest areas to buy in Kolkata right now?', 'New Town, Rajarhat, and Salt Lake consistently remain popular for buyers looking for newer stock and practical access.'],
  ['Do you handle commercial and office spaces as well?', 'Yes. We cover residential, commercial and land requirements, with advice shaped around how each property is used.'],
  ['Can I ask for a shortlist before visiting?', 'Absolutely. We can narrow options to the properties that best fit your budget, location and practical needs.'],
  ['How do I list my property with S S Property?', 'Get in touch with a quick outline of the property, and we’ll talk through the next steps and positioning.'],
  ['Do you support renting and leasing in the same city?', 'Yes. We work across buy, rent and lease-led opportunities across Kolkata.'],
]

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">FAQ</p>
      <h1 className="mt-2 font-display text-[3rem] tracking-[-0.05em] md:text-[5rem]">Common questions</h1>

      <div className="mt-10 space-y-4">
        {faqs.map(([question, answer]) => (
          <div key={question} className="border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">{question}</h2>
            <p className="mt-3 text-base leading-8 text-[var(--text-secondary)]">{answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
