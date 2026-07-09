'use client';

import { email, phone, phoneDisplay, socialMedia, contact } from '@/data/content';
import { useClockRef } from '@/lib/useClock';

const flinkClass =
  'bg-[linear-gradient(#111110,#111110)] bg-left-bottom bg-no-repeat bg-[length:0_2px] pb-0.5 text-inherit no-underline [transition:background-size_0.28s_cubic-bezier(0.2,0.7,0.2,1),letter-spacing_0.28s_ease] hover:bg-[length:100%_2px] hover:tracking-[0.09em]';

const Contact = () => {
  const { title } = contact;
  const clockRef = useClockRef<HTMLSpanElement>();
  const github = socialMedia.find(s => s.name === 'GitHub');
  const linkedin = socialMedia.find(s => s.name === 'Linkedin');

  return (
    <section id="contact" className="border-t-2 border-ink bg-accent px-[34px] pt-[110px] pb-10 max-thone:px-5 max-thone:pt-16 max-thone:pb-8 text-ink">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-[18px] font-mono text-[13px] tracking-[0.16em] uppercase">{'{ 05 — LET’S TALK }'}</div>
        <h2
          className="m-0 text-[clamp(48px,9vw,150px)] leading-[0.84] font-extrabold tracking-[-0.045em] text-ink uppercase"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="mt-[46px] flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="inline-block bg-ink px-[30px] py-[18px] font-mono font-semibold text-cream shadow-[7px_7px_0_#111110] [transition:transform_0.2s_cubic-bezier(0.34,1.3,0.4,1),box-shadow_0.2s_cubic-bezier(0.34,1.3,0.4,1),color_0.2s_ease] hover:text-accent hover:shadow-[0_0_0_#111110] hover:[transform:translate(7px,7px)] text-[clamp(15px,1.6vw,19px)] no-underline">
            {email} ↘
          </a>
          <a
            href={`tel:${phone}`}
            className="inline-block border-2 border-ink bg-transparent px-7 py-[18px] font-mono font-semibold text-ink shadow-[6px_6px_0_#111110] [transition:transform_0.2s_cubic-bezier(0.34,1.3,0.4,1),box-shadow_0.2s_cubic-bezier(0.34,1.3,0.4,1),background_0.2s_ease,color_0.2s_ease] hover:bg-ink hover:text-accent hover:[transform:translate(6px,6px)] hover:shadow-[0_0_0_#111110] text-[clamp(15px,1.6vw,19px)] no-underline">
            {phoneDisplay}
          </a>
        </div>
        <div className="mt-[70px] flex flex-wrap items-center gap-7 border-t-2 border-ink pt-[22px] font-mono text-[13px] font-medium tracking-[0.04em] uppercase">
          {github && (
            <a href={github.url} target="_blank" rel="nofollow noopener noreferrer" className={flinkClass}>
              GitHub ↗
            </a>
          )}
          {linkedin && (
            <a href={linkedin.url} target="_blank" rel="nofollow noopener noreferrer" className={flinkClass}>
              LinkedIn ↗
            </a>
          )}
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={flinkClass}>
            {'{ Back to top }'}
          </a>
          <span className="ml-auto opacity-70">
            New Delhi — <span ref={clockRef}>--:--</span> IST · © {new Date().getFullYear()} Sumit Bhardwaj
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
