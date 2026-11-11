import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import { caseStudies, getCaseStudy } from '@/data/work';

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const title = `${study.title} — Case study | Sumit Bhardwaj`;
  return {
    title,
    description: study.tagline,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title, description: study.tagline, type: 'article', url: `/work/${study.slug}` },
  };
}

const labelBase = 'font-mono text-[13px] tracking-[0.16em] uppercase';
const label = `${labelBase} text-accent-deep`;
const prose = 'm-0 max-w-[820px] text-[clamp(18px,1.7vw,22px)] font-medium leading-[1.55]';

const SECTIONS = ['Problem', 'Approach', 'What I built', 'Outcome'] as const;
type Section = (typeof SECTIONS)[number];
const sectionLabel = (name: Section) => `{ ${String(SECTIONS.indexOf(name) + 1).padStart(2, '0')} — ${name} }`;

const Block = ({ name, children }: { name: Section; children: ReactNode }) => (
  <div className="grid grid-cols-[260px_1fr] gap-10 border-t-2 border-ink py-12 max-tablet:grid-cols-1 max-tablet:gap-5 max-thone:py-9">
    <h2 className={`m-0 font-medium ${label}`}>{sectionLabel(name)}</h2>
    <div className="min-w-0">{children}</div>
  </div>
);

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const total = caseStudies.length;
  const prev = caseStudies[(index - 1 + total) % total];
  const next = caseStudies[(index + 1) % total];
  let count = 0;
  const built = study.built.map(item =>
    typeof item === 'string' ? { text: item, n: ++count, heading: undefined } : { ...item, text: '', n: 0 },
  );
  const meta = [
    { name: 'Role', value: study.role },
    { name: 'Company', value: study.company },
    { name: 'When', value: study.period },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="px-[34px] pt-12 pb-16 max-thone:px-5 max-thone:pt-9 max-thone:pb-11">
          <div className="mx-auto max-w-[1500px]">
            <Link
              href="/#work"
              className="inline-block bg-[linear-gradient(#111110,#111110)] bg-left-bottom bg-no-repeat bg-[length:0_2px] pb-0.5 font-mono text-[12.5px] font-bold tracking-[0.08em] text-ink uppercase no-underline [transition:background-size_0.28s_cubic-bezier(0.2,0.7,0.2,1)] hover:bg-[length:100%_2px]">
              ← All work
            </Link>
            <div className={`mt-12 animate-rise max-thone:mt-9 ${label}`}>
              {`{ CASE STUDY ${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')} }`}
            </div>
            <h1 className="m-0 mt-[18px] animate-rise text-[clamp(34px,9.5vw,160px)] leading-[0.86] [overflow-wrap:anywhere] font-extrabold tracking-[-0.045em] text-ink uppercase [animation-delay:60ms]">
              {study.title}
            </h1>
            <p className="m-0 mt-8 max-w-[900px] animate-rise text-[clamp(19px,2.1vw,28px)] font-medium leading-[1.35] text-[#1c1b18] [animation-delay:120ms]">
              {study.tagline}
            </p>
            <dl className="m-0 mt-12 grid animate-rise grid-cols-3 border-2 border-ink [animation-delay:180ms] max-thone:grid-cols-1">
              {meta.map(({ name, value }) => (
                <div
                  key={name}
                  className="px-[22px] py-5 not-last:border-r-2 not-last:border-ink max-thone:not-last:border-r-0 max-thone:not-last:border-b-2">
                  <dt className="font-mono text-[11px] tracking-[0.14em] text-[#6b685f] uppercase">{name}</dt>
                  <dd className="m-0 mt-1.5 text-[17px] font-bold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t-2 border-b-2 border-ink bg-accent px-[34px] py-10 text-ink max-thone:px-5 max-thone:py-8">
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-end gap-x-9 gap-y-3">
            <div className="text-[clamp(56px,10vw,150px)] leading-[0.84] font-extrabold tracking-[-0.045em] uppercase">
              {study.metric}
            </div>
            <div className="pb-2 font-mono text-[clamp(12.5px,1.2vw,15px)] font-bold tracking-[0.08em] uppercase">
              {study.metricLabel}
            </div>
          </div>
        </section>

        <section className="px-[34px] pt-16 pb-8 max-thone:px-5 max-thone:pt-10 max-thone:pb-4">
          <div className="mx-auto max-w-[1500px]">
            <Block name="Problem">
              <p className={`${prose} text-[#1c1b18]`}>{study.problem}</p>
            </Block>
            <Block name="Approach">
              <p className={`${prose} text-[#1c1b18]`}>{study.approach}</p>
            </Block>
            <Block name="What I built">
              <ol className="m-0 list-none border-t-2 border-ink p-0">
                {built.map((item, i) =>
                  item.heading ? (
                    <li
                      key={i}
                      className="border-b-2 border-ink px-1 pt-7 pb-3 font-mono text-[11px] tracking-[0.14em] text-[#6b685f] uppercase first:pt-4">
                      {item.heading}
                    </li>
                  ) : (
                    <li
                      key={i}
                      className="grid grid-cols-[44px_1fr] gap-4 border-b-2 border-ink px-1 py-[18px] text-[clamp(17px,1.5vw,20px)] font-bold leading-[1.4] text-ink">
                      <span className="pt-0.5 font-mono text-[15px] text-accent-deep">{String(item.n).padStart(2, '0')}</span>
                      <span>{item.text}</span>
                    </li>
                  ),
                )}
              </ol>
            </Block>
          </div>
        </section>

        <section className="bg-ink px-[34px] py-24 text-cream max-thone:px-5 max-thone:py-14">
          <div className="mx-auto max-w-[1500px]">
            <h2 className={`m-0 font-medium text-accent ${labelBase}`}>{sectionLabel('Outcome')}</h2>
            <p className="m-0 mt-5 max-w-[1200px] text-[clamp(26px,3.6vw,54px)] leading-[1.08] font-extrabold tracking-[-0.03em]">
              {study.outcome}
            </p>
            <div className="mt-14 border-t-2 border-rule pt-7">
              <div className="font-mono text-[11px] tracking-[0.14em] text-[#a7a499] uppercase">Built with</div>
              <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0 font-mono text-[11.5px] tracking-[0.04em] uppercase">
                {study.tech.map(t => (
                  <li key={t} className="rounded-full border-[1.5px] border-current px-[11px] py-[5px]">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <nav aria-label="More case studies" className="grid grid-cols-2 bg-cream max-thone:grid-cols-1">
          {[
            { study: prev, dir: '← Previous', align: '' },
            { study: next, dir: 'Next →', align: 'text-right max-thone:text-left' },
          ].map(({ study: other, dir, align }) => (
            <Link
              key={dir}
              href={`/work/${other.slug}`}
              className={`group px-[34px] py-12 text-ink no-underline not-last:border-r-2 not-last:border-ink max-thone:px-5 max-thone:py-8 max-thone:not-last:border-r-0 max-thone:not-last:border-b-2 [transition:background_0.3s_cubic-bezier(0.2,0.7,0.2,1),color_0.3s_cubic-bezier(0.2,0.7,0.2,1)] hover:bg-ink hover:text-cream focus-visible:bg-ink focus-visible:text-cream focus-visible:outline-none ${align}`}>
              <div className="font-mono text-[12.5px] font-bold tracking-[0.1em] text-accent-deep uppercase group-hover:text-accent group-focus-visible:text-accent">
                {dir}
              </div>
              <div className="mt-3 text-[clamp(26px,3.6vw,54px)] leading-[0.95] font-extrabold tracking-[-0.03em]">
                {other.title}
              </div>
              <div className="mt-3 font-mono text-[12px] tracking-[0.05em] uppercase opacity-80">
                {other.metric} · {other.metricLabel}
              </div>
            </Link>
          ))}
        </nav>
      </main>
      <Contact label="{ LET’S TALK }" />
    </>
  );
}
