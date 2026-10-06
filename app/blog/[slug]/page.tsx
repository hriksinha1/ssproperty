import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts: Record<string, { title: string; summary: string; body: string[] }> = {
  'new-town-buyers-guide': {
    title: 'A practical buyer’s guide to New Town',
    summary: 'A clear way to look at the right Kolkata address before you commit.',
    body: [
      'New Town works well for buyers that want planned roads, access to everyday services and a cleaner urban rhythm. The neighbourhood is often attractive to families and professionals because the layout feels easier to navigate and the daily commute can be more predictable.',
      'When comparing homes, look at access to schools, healthcare, daily essentials and the route you take to work. A property that feels good on paper still needs to fit your day-to-day routine and budget.',
      'The right choice is not simply the newest home or the most expensive address. It is the one that gives you the right balance of quality, practical access and long-term value in the local market.',
    ],
  },
  'how-to-compare-neighbourhoods': {
    title: 'How to compare neighbourhoods without getting lost in the noise',
    summary: 'A focused checklist for filtering the right part of the city.',
    body: [
      'Strong property decisions rely on a few practical questions: how easy is it to travel, what is the local infrastructure like, and how often do you need to be in other parts of the city?',
      'It also helps to balance short-term appeal with long-term confidence. A well-connected area can be a practical choice, but a less obvious location may still be the better fit if it matches your routine and budget more closely.',
      'A good shortlist should give you clarity, not confusion. Compare the essentials, not just the marketing language.',
    ],
  },
  'commercial-spaces-that-fit-growth': {
    title: 'Choosing a commercial space that fits growth',
    summary: 'Commercial decisions should be shaped by usage, visibility and logistics.',
    body: [
      'Many businesses focus on headline price without considering the practical rhythm of the space. The layout, frontage, internal flow and access all matter when a business is trying to grow in a local market.',
      'A commercial address should support the day-to-day reality of your team: parking, visibility, customer flow and the ease of receiving deliveries all influence how the space works over time.',
      'The best choice is often the one that supports the business model clearly, rather than simply the most prominent listing at the top of a search page.',
    ],
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-[760px] px-4 py-16 md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Insight</p>
      <h1 className="mt-2 font-display text-[3rem] tracking-[-0.05em] md:text-[5rem]">{post.title}</h1>
      <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">{post.summary}</p>
      <div className="mt-8 space-y-6 text-base leading-8 text-[var(--text-secondary)]">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Link href="/blog" className="mt-10 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
        Back to blog
      </Link>
    </article>
  )
}
