import Link from 'next/link'

const posts = [
  {
    slug: 'new-town-buyers-guide',
    title: 'A practical buyer’s guide to New Town',
    excerpt: 'Understanding commute patterns and everyday conveniences in Kolkata’s newer residential hubs.',
  },
  {
    slug: 'how-to-compare-neighbourhoods',
    title: 'How to compare neighbourhoods without getting lost in the noise',
    excerpt: 'A simple checklist for evaluating access, convenience and long-term value.',
  },
  {
    slug: 'commercial-spaces-that-fit-growth',
    title: 'Choosing a commercial space that fits growth',
    excerpt: 'What to look for in a local business address beyond the headline price.',
  },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Insights</p>
      <h1 className="mt-2 font-display text-[3rem] tracking-[-0.05em] md:text-[5rem]">Kolkata property notes</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Article</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{post.title}</h2>
            <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
