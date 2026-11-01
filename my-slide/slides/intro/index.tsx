import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
} from '@open-slide/core';
import type { ReactNode } from 'react';

export const design: DesignSystem = {
  palette: { bg: '#F3EEE4', text: '#1A1714', accent: '#0064A4' },
  fonts: {
    display:
      '"Iowan Old Style", Palatino, "Palatino Linotype", "Times New Roman", Times, serif',
    body: '"Iowan Old Style", Palatino, "Palatino Linotype", "Times New Roman", Times, serif',
  },
  typeScale: { hero: 168, body: 36 },
  radius: 0,
};

const muted = '#6A6358';

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';
const HOLD = [{ opacity: 1 }, { opacity: 1 }];

export const transition: SlideTransition = {
  duration: 240,
  exit: { duration: 240, easing: EASE_IN, keyframes: HOLD },
  enter: {
    duration: 240,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

const fill = {
  width: '100%',
  height: '100%',
  position: 'relative' as const,
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  padding: '112px 140px 148px',
  boxSizing: 'border-box' as const,
};

const Frame = ({ children }: { children: ReactNode }) => {
  const { current } = useSlidePageNumber();
  return (
    <div style={fill}>
      {children}
      <footer
        style={{
          position: 'absolute',
          left: 140,
          right: 140,
          bottom: 48,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          borderTop: '1px solid var(--osd-text)',
          paddingTop: 14,
          fontSize: 22,
          lineHeight: 1.3,
        }}
      >
        <span>I-Chau Wang</span>
        <span style={{ color: muted }}>{String(current).padStart(2, '0')}</span>
      </footer>
    </div>
  );
};

const Rule = () => (
  <div style={{ height: 1, background: 'var(--osd-text)', margin: '22px 0 28px' }} />
);

const Ico = ({ size = 32, children }: { size?: number; children: ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {children}
  </svg>
);

const ProblemIcon = () => (
  <Ico>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v5" />
    <path d="M12 16.5h.01" />
  </Ico>
);

const ActionIcon = () => (
  <Ico>
    <path d="M4 20l4.2-.8L19.2 8.2 15.8 4.8 4.8 15.8 4 20z" />
    <path d="M13.5 7l3.5 3.5" />
  </Ico>
);

const ResultIcon = () => (
  <Ico>
    <circle cx="12" cy="12" r="8" />
    <path d="M8.2 12.2l2.5 2.5 5-5.2" />
  </Ico>
);

const SkillsIcon = () => (
  <Ico>
    <path d="M12 3l8 4.2L12 11.4 4 7.2 12 3z" />
    <path d="M4 12l8 4.2L20 12" />
    <path d="M4 16.2L12 20.4 20 16.2" />
  </Ico>
);

const CodeIcon = () => (
  <Ico size={26}>
    <path d="M8 8L4 12l4 4" />
    <path d="M16 8l4 4-4 4" />
  </Ico>
);

const NodesIcon = () => (
  <Ico size={26}>
    <circle cx="6" cy="12" r="2" />
    <circle cx="17" cy="6.5" r="2" />
    <circle cx="17" cy="17.5" r="2" />
    <path d="M8 12h7M8 11.2L15.2 7.2M8 12.8l7.2 3.8" />
  </Ico>
);

const LayersIcon = ({ size = 26 }: { size?: number }) => (
  <Ico size={size}>
    <path d="M12 3.5l8 4L12 11.5l-8-4 8-4z" />
    <path d="M4 12l8 4 8-4" />
    <path d="M4 16l8 4 8-4" />
  </Ico>
);

const CloudIcon = () => (
  <Ico size={26}>
    <path d="M7 18h10a3.5 3.5 0 0 0 .4-7 4.5 4.5 0 0 0-8.6-1.2A3.2 3.2 0 0 0 7 18z" />
  </Ico>
);

const BoxIcon = ({ size = 26 }: { size?: number }) => (
  <Ico size={size}>
    <path d="M12 3.5l8 4v9l-8 4-8-4v-9l8-4z" />
    <path d="M12 12.2l8-4M12 12.2v8.3M12 12.2L4 8.2" />
  </Ico>
);

const EyeIcon = ({ size = 26 }: { size?: number }) => (
  <Ico size={size}>
    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
    <circle cx="12" cy="12" r="2.2" />
  </Ico>
);

const DetectIcon = ({ size = 26 }: { size?: number }) => (
  <Ico size={size}>
    <path d="M8 4H4v4M16 4h4v4M20 16v4h-4M4 16v4h4" />
    <rect x="8" y="8" width="8" height="8" />
  </Ico>
);

const PhoneIcon = ({ size = 26 }: { size?: number }) => (
  <Ico size={size}>
    <rect x="7" y="3" width="10" height="18" rx="1.5" />
    <path d="M11 18h2" />
  </Ico>
);

const BranchIcon = () => (
  <Ico size={26}>
    <circle cx="6" cy="6" r="2" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="12" r="2" />
    <path d="M6 8v8" />
    <path d="M6 12h10" />
  </Ico>
);

const PinIcon = () => (
  <Ico size={26}>
    <path d="M12 21s6-5 6-10a6 6 0 1 0-12 0c0 5 6 10 6 10z" />
    <circle cx="12" cy="11" r="1.8" />
  </Ico>
);

const BoltIcon = () => (
  <Ico size={26}>
    <path d="M13 2.5L5.5 13H12l-1 8.5L18.5 11H12l1-8.5z" />
  </Ico>
);

const WindowIcon = () => (
  <Ico size={26}>
    <rect x="3" y="5" width="18" height="14" />
    <path d="M3 9h18" />
  </Ico>
);

const ServerIcon = () => (
  <Ico size={26}>
    <rect x="3" y="4" width="18" height="6" />
    <rect x="3" y="14" width="18" height="6" />
    <path d="M7 7h.01M7 17h.01" />
  </Ico>
);

const MailIcon = () => (
  <Ico size={26}>
    <rect x="3" y="5" width="18" height="14" />
    <path d="M4 7l8 6 8-6" />
  </Ico>
);

const PersonIcon = () => (
  <Ico size={26}>
    <circle cx="12" cy="8" r="3" />
    <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
  </Ico>
);

const MarkIcon = ({ size = 26 }: { size?: number }) => (
  <Ico size={size}>
    <circle cx="12" cy="12" r="8" />
    <path d="M8 12.2l2.4 2.3L16 9.5" />
  </Ico>
);

const OutIcon = () => (
  <Ico size={18}>
    <path d="M7 17L17 7" />
    <path d="M9 7h8v8" />
  </Ico>
);

const TextLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{
      color: 'var(--osd-accent)',
      textDecoration: 'underline',
      textUnderlineOffset: 5,
      textDecorationThickness: 1,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
    }}
  >
    {children}
    <OutIcon />
  </a>
);

const ContactLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: 'var(--osd-text)',
      textDecoration: 'none',
      fontSize: 32,
      lineHeight: 1.3,
    }}
  >
    <span style={{ color: 'var(--osd-accent)', display: 'flex' }}>{icon}</span>
    {children}
  </a>
);

const headingStyle = {
  margin: 0,
  fontFamily: 'var(--osd-font-display)',
  fontWeight: 600,
  lineHeight: 1.05,
  letterSpacing: '-0.02em',
} as const;

const Beat = ({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) => (
  <div style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
    <div style={{ color: 'var(--osd-accent)', flex: '0 0 auto', marginTop: 2 }}>{icon}</div>
    <div style={{ flex: '1 1 auto', minWidth: 0 }}>
      <div style={{ fontSize: 22, lineHeight: 1.3, color: muted }}>{label}</div>
      <div style={{ marginTop: 6, fontSize: 'var(--osd-size-body)', lineHeight: 1.35 }}>{children}</div>
    </div>
  </div>
);

const Skill = ({ icon, name }: { icon: ReactNode; name: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <span style={{ color: 'var(--osd-accent)', display: 'flex' }}>{icon}</span>
    <span style={{ fontSize: 26, lineHeight: 1.2 }}>{name}</span>
  </div>
);

const StoryHead = ({ title, role, when }: { title: string; role: string; when?: string }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 40 }}>
      <h2 style={{ ...headingStyle, fontSize: 64 }}>{title}</h2>
      {when ? (
        <div style={{ fontSize: 26, lineHeight: 1.3, color: muted, whiteSpace: 'nowrap' }}>{when}</div>
      ) : null}
    </div>
    <p style={{ margin: '12px 0 0', fontSize: 28, lineHeight: 1.3, fontStyle: 'italic', color: muted }}>{role}</p>
  </div>
);

const Cover: Page = () => (
  <Frame>
    <div style={{ paddingTop: 64 }}>
      <h1 style={{ ...headingStyle, fontSize: 'var(--osd-size-hero)' }}>I-Chau Wang</h1>
      <Rule />
      <p style={{ margin: 0, fontSize: 40, lineHeight: 1.3, fontStyle: 'italic' }}>Master of Computer Science</p>
      <p style={{ margin: '10px 0 0', fontSize: 'var(--osd-size-body)', lineHeight: 1.35, color: 'var(--osd-accent)' }}>
        University of California, Irvine
      </p>
      <p style={{ margin: '36px 0 0', fontSize: 28, lineHeight: 1.45, color: muted }}>
        Irvine, California
        <br />
        September 2026 – December 2027
      </p>
      <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <ContactLink href="mailto:ichauwang712@gmail.com" icon={<MailIcon />}>
          ichauwang712@gmail.com
        </ContactLink>
        <ContactLink href="https://linkedin.com/in/ichauwang" icon={<PersonIcon />}>
          linkedin.com/in/ichauwang
        </ContactLink>
        <ContactLink href="https://github.com/YChaoWang" icon={<BranchIcon />}>
          github.com/YChaoWang
        </ContactLink>
      </div>
    </div>
  </Frame>
);

const Chengchi: Page = () => (
  <Frame>
    <h2 style={{ ...headingStyle, fontSize: 64 }}>National Chengchi University</h2>
    <Rule />
    <p style={{ margin: 0, fontSize: 40, lineHeight: 1.3, fontStyle: 'italic' }}>Bachelor of Computer Science</p>
    <p style={{ margin: '10px 0 0', fontSize: 28, lineHeight: 1.45, color: muted }}>
      Taipei, Taiwan
      <br />
      September 2021 – June 2025
    </p>
    <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 22 }}>
      <p style={{ margin: 0, fontSize: 'var(--osd-size-body)', lineHeight: 1.35 }}>
        Data structures, algorithms, operating systems, databases.
      </p>
      <p style={{ margin: 0, fontSize: 'var(--osd-size-body)', lineHeight: 1.35 }}>
        Distributed systems and computer programming.
      </p>
      <p style={{ margin: 0, fontSize: 'var(--osd-size-body)', lineHeight: 1.35 }}>
        Deep learning, natural language processing, web search and mining.
      </p>
    </div>
  </Frame>
);

const Advantech: Page = () => (
  <Frame>
    <StoryHead title="Advantech" role="Software Engineer Intern, Taipei" when="Feb 2025 – Aug 2025" />
    <Rule />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <Beat icon={<ProblemIcon />} label="The problem">
        Four marketing teams needed insights on 4,000+ SKUs. The data crossed 30+ APIs, and each stage repeated work.
      </Beat>
      <Beat icon={<ActionIcon />} label="What I did">
        I joined training, inference, and reranking into one pipeline, then shipped LangGraph agents and Bedrock batch
        inference on S3.
      </Beat>
      <Beat icon={<ResultIcon />} label="The result">
        End-to-end processing time fell by 80%.
      </Beat>
      <Beat icon={<SkillsIcon />} label="Skills">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 32px' }}>
          <Skill icon={<CodeIcon />} name="Python" />
          <Skill icon={<NodesIcon />} name="LangGraph" />
          <Skill icon={<LayersIcon />} name="Amazon Bedrock" />
          <Skill icon={<BoxIcon />} name="Amazon S3" />
          <Skill icon={<CloudIcon />} name="AWS" />
        </div>
      </Beat>
    </div>
  </Frame>
);

const HysonProblem: Page = () => (
  <Frame>
    <StoryHead title="Hyson Technology" role="AI Engineer Intern, New Taipei" when="Feb 2024 – Jan 2025" />
    <Rule />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <Beat icon={<ProblemIcon />} label="The problem">
        Forged seals on documents. Officers were still checking them by hand.
      </Beat>
      <Beat icon={<EyeIcon size={32} />} label="The photos">
        The seal is red, printed over black text, and the shot is often tilted or wrinkled.
      </Beat>
      <Beat icon={<BoxIcon size={32} />} label="The police database">
        536 images from Kaohsiung City Police, compared in 58,000 pairs.
      </Beat>
    </div>
  </Frame>
);

const HysonMethod: Page = () => (
  <Frame>
    <StoryHead title="Three steps" role="Hyson Technology, with the police forensic lab" />
    <Rule />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <Beat icon={<DetectIcon size={32} />} label="Step 1. Lift the seal off the page">
        YOLOv8 crops it to 224×224. Rotation, scale, shift, and shear then straighten the photo.
      </Beat>
      <Beat icon={<LayersIcon size={32} />} label="Step 2. Narrow the database">
        VGG16 scores the global shape and keeps the closest seal group.
      </Beat>
      <Beat icon={<MarkIcon size={32} />} label="Step 3. Check the fine match">
        SuperGlue compares keypoints. Two seals match at 150 shared points.
      </Beat>
    </div>
  </Frame>
);

const HysonResult: Page = () => (
  <Frame>
    <StoryHead title="Seconds, not minutes" role="Hyson Technology" />
    <Rule />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <Beat icon={<ResultIcon />} label="The result">
        Official seals, 97% F1. Company seals, 92% F1. The three steps together stay in seconds.
      </Beat>
      <Beat icon={<ActionIcon />} label="What preprocessing changed">
        Official-seal F1 rose from 24% to 90% before any fine match.
      </Beat>
      <Beat icon={<PhoneIcon size={32} />} label="What an officer does">
        Sends one photo, then reviews the ten closest known seals.
      </Beat>
      <div style={{ paddingLeft: 54 }}>
        <TextLink href="https://www.mdpi.com/2673-4591/128/1/34">IEEE ICEIB 2025 Best Paper</TextLink>
      </div>
      <Beat icon={<SkillsIcon />} label="Skills">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 32px' }}>
          <Skill icon={<CodeIcon />} name="Python" />
          <Skill icon={<EyeIcon />} name="OpenCV" />
          <Skill icon={<DetectIcon />} name="YOLOv8" />
          <Skill icon={<LayersIcon />} name="VGG16" />
          <Skill icon={<MarkIcon />} name="SuperGlue" />
        </div>
      </Beat>
    </div>
  </Frame>
);

const NCCUPass: Page = () => (
  <Frame>
    <StoryHead title="NCCUPass" role="Google Developer Student Clubs" />
    <Rule />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <Beat icon={<ProblemIcon />} label="The problem">
        The same business logic was copied across 12 screens and 6 core features.
      </Beat>
      <Beat icon={<ActionIcon />} label="What I did">
        I moved that logic into 8 shared Flutter services, and I added GitLab CI on every merge request.
      </Beat>
      <Beat icon={<ResultIcon />} label="The result">
        Launched on iOS and Android. Used by 3,000+ students. Duplicate code down 40%.
        <div style={{ marginTop: 8 }}>
          <TextLink href="https://nccupass.com/">nccupass.com</TextLink>
        </div>
      </Beat>
      <Beat icon={<SkillsIcon />} label="Skills">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 32px' }}>
          <Skill icon={<PhoneIcon />} name="Flutter" />
          <Skill icon={<CodeIcon />} name="Dart" />
          <Skill icon={<BranchIcon />} name="GitLab CI" />
        </div>
      </Beat>
    </div>
  </Frame>
);

const RailMeet: Page = () => (
  <Frame>
    <StoryHead title="RailMeet" role="Multi-origin journey planner" />
    <Rule />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <Beat icon={<ProblemIcon />} label="The problem">
        People leaving from different cities had no fair way to pick one place to meet.
      </Beat>
      <Beat icon={<ActionIcon />} label="What I did">
        I ranked candidate cities on travel time, fairness, transfers, and how spread out the arrivals were.
      </Beat>
      <Beat icon={<ResultIcon />} label="The result">
        A Next.js and Fastify planner, with Redis, BullMQ, Docker, and a transactional outbox.
        <div style={{ marginTop: 8, display: 'flex', gap: 36 }}>
          <TextLink href="https://railmeet.ichauw.com">railmeet.ichauw.com</TextLink>
          <TextLink href="https://github.com/YChaoWang/RailMeet">GitHub</TextLink>
        </div>
      </Beat>
      <Beat icon={<SkillsIcon />} label="Skills">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 32px' }}>
          <Skill icon={<CodeIcon />} name="TypeScript" />
          <Skill icon={<WindowIcon />} name="Next.js" />
          <Skill icon={<ServerIcon />} name="Fastify" />
          <Skill icon={<PinIcon />} name="PostGIS" />
          <Skill icon={<BoltIcon />} name="Redis" />
          <Skill icon={<BoxIcon />} name="Docker" />
        </div>
      </Beat>
    </div>
  </Frame>
);

const Irvine: Page = () => (
  <Frame>
    <h2 style={{ ...headingStyle, fontSize: 72, color: 'var(--osd-accent)' }}>Irvine</h2>
    <Rule />
    <p style={{ margin: 0, fontSize: 40, lineHeight: 1.3, fontStyle: 'italic' }}>Master of Computer Science</p>
    <p style={{ margin: '10px 0 0', fontSize: 28, lineHeight: 1.4, color: muted }}>September 2026 – December 2027</p>
    <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <p style={{ margin: 0, fontSize: 'var(--osd-size-body)', lineHeight: 1.35 }}>Big Data Systems</p>
      <p style={{ margin: 0, fontSize: 'var(--osd-size-body)', lineHeight: 1.35 }}>
        Advanced Programming and Problem Solving
      </p>
    </div>
    <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <ContactLink href="mailto:ichauwang712@gmail.com" icon={<MailIcon />}>
        ichauwang712@gmail.com
      </ContactLink>
      <ContactLink href="https://linkedin.com/in/ichauwang" icon={<PersonIcon />}>
        linkedin.com/in/ichauwang
      </ContactLink>
      <ContactLink href="https://github.com/YChaoWang" icon={<BranchIcon />}>
        github.com/YChaoWang
      </ContactLink>
      <ContactLink href="tel:9496597565" icon={<PhoneIcon />}>
        949-659-7565
      </ContactLink>
    </div>
  </Frame>
);

export const notes: (string | undefined)[] = [
  `I'm I-Chau Wang, a master's student in computer science at UC Irvine. I finished my bachelor's at National Chengchi University in Taipei in 2025.

Before the master's I interned twice. At Advantech I cut an API-heavy pipeline's runtime by 80 percent and shipped a LangGraph system for four marketing teams. At Hyson I co-designed a three-step forged-seal matcher for the Kaohsiung City Police. Official seals reached 97 percent F1, company seals 92, in seconds rather than minutes. That paper won IEEE ICEIB 2025 Best Paper.

I also shipped NCCUPass, a Flutter app used by more than 3,000 students, and RailMeet, a planner for choosing a meeting city.

Short version: MSCS at Irvine, two internships in Taipei — an 80 percent faster recommendation pipeline, and a police document system that won a best paper — plus two products people can open.`,
  `The bachelor's is the foundation, not a project story. If they ask what I can build on, I name the courses in three groups: systems, including distributed systems and databases; machine learning and NLP; and web search. I don't stretch a class assignment into a STAR story.`,
  `At Advantech, in Taipei, I was a software engineer intern from February to August 2025. Four marketing teams needed campaign insights across more than 4,000 SKUs. The data moved through more than 30 APIs, and each stage repeated work the previous stage had already done.

My job was the path from that product data to a recommendation the teams could actually use.

I consolidated the flows into one pipeline for training, inference, and reranking, so a record was not reprocessed between stages. I built and deployed a LangGraph multi-agent system that wrote the campaign insights for those four teams. For the model calls I used Amazon Bedrock batch inference rather than real-time, with S3 holding the inputs, the outputs, and the recovery when a job failed. Batch fit the job: we needed throughput and cost, not a live reply.

End-to-end processing time fell by 80 percent.

Short version: 30-plus APIs and 4,000 SKUs were stuck repeating work. I made one pipeline, added LangGraph agents for four teams, and ran Bedrock in batch on S3. Runtime dropped 80 percent.

One line: I cut a 30-API recommendation pipeline by 80 percent and shipped the LangGraph system on top of it.`,
  `At Hyson Technology, in New Taipei, I was an AI engineer intern from February 2024 through January 2025. We worked with the Forensic Science Center at the Kaohsiung City Police Department on forged seals. Someone checking a seal by hand was slow, and the photos are awkward: the seal is red and printed over black text, and the shot is often tilted or wrinkled from thin paper.

The police database held 536 forged-seal images. Twelve official seals, 176 images. Seventy-two company seals, 360 images. Comparing them made 3,261 same-seal pairs and 55,210 different-seal pairs, about 58,000 pairs in total.

I co-designed the method with Tsung-Yueh Lai and Yin-Kuan Lee. The police co-authors curated the data. Lai, Lee, and I also wrote the paper. I don't claim the fraud-loss figures in the introduction. Those are national statistics, not my result.

Short version: Forged seals, checked by hand, on messy photos. A police database of 536 images and about 58,000 pairs. I co-designed the matcher. The police owned the data.

One line: I co-designed the forged-seal matcher used with the Kaohsiung City Police database.`,
  `The method is three steps, and the order is the whole point.

Step 1 lifts the seal off the page. We convert the photo to HIS so the red seal separates from the black text, binarize with Otsu, and YOLOv8 crops the seal to 224 by 224. The crop is still crooked, so a geometric transform — rotation, scale, translation, and shear — is fit by gradient descent against PSNR. That alignment is what I would point to if they ask about the geometric module on my résumé. Preprocessing alone moved official-seal F1 from 24 percent to 90 percent.

Step 2 narrows the database. VGG16's first three convolutional layers compare global shape, with cosine similarity and Euclidean distance, then an SVM picks the closest seal group. It is fast, a few seconds over all pairs, and it is not enough for company seals. Same-company-seal F1 at this stage was 0.

Step 3 is the fine match. SuperPoint finds the keypoints and SuperGlue matches them. We call two seals the same at 150 shared keypoints.

Short version: Crop and straighten with YOLOv8 and a geometric fit. Filter the database with VGG16. Confirm with SuperGlue at 150 keypoints.

One line: YOLOv8 crops the seal, VGG16 shortlists a group, SuperGlue confirms the match.`,
  `SuperGlue by itself was accurate and slow, on the order of minutes. VGG16 by itself was fast and, for company seals, wrong. Stacked, the three steps hold 97 percent F1 on official seals and 92 percent on company seals, and the run stays in seconds. The paper timed that on an Intel i7 with one 3080 Ti.

An officer uploads one photo — the system has a LINE interface for that — and reviews the ten closest seals in the matched group, with the related cases. Users can change how many images are searched and how many are returned. The deployed setting returns ten.

On authorship I stay specific. Lai, Lee, and I conceived the idea, did the methodology, and wrote the manuscript. I say co-authored. The paper won IEEE ICEIB 2025 Best Paper. If they have read it: the résumé says accuracy, and the tables are F1 at a threshold of 150.

Short version: 97 percent F1 on official seals, 92 on company seals, in seconds because VGG16 filters before SuperGlue. Officers get the ten closest cases. I co-wrote the paper.

One line: Three steps, seconds instead of minutes, 97 and 92 percent F1, and the IEEE best paper.`,
  `NCCUPass was a Google Developer Student Clubs project at National Chengchi University. I built the Flutter app for iOS and Android, and the same business logic was copied across 12 screens and 6 core features, so a change meant editing it in too many places.

I consolidated that logic into 8 shared services. That cut duplicate code by 40 percent. I also built a GitLab CI pipeline with two parallel jobs — formatting, static analysis, and unit tests — on every merge request. We launched it, and more than 3,000 students at NCCU used it. The site is nccupass.com.

I don't invent a campus-workflow story the résumé doesn't state. The engineering problem was the duplication, and the outcome was the launch plus the 40 percent.

Short version: Shared Flutter logic was copied across 12 screens. I pulled it into 8 services, added GitLab CI, and the app reached 3,000 students with 40 percent less duplicate code.

One line: I launched NCCUPass for 3,000 students and cut duplicate Flutter code by 40 percent.`,
  `I'm in the master's at Irvine from September 2026 through December 2027. The courses on the résumé right now are Big Data Systems and Advanced Programming and Problem Solving. I keep this page short: where I am, then how to reach me. I don't invent a five-year plan that isn't on the résumé.

If they ask why I'm here, I tie it to the work they just heard — pipelines, retrieval, and systems that have to run for someone else — and then I stop.`,
];

export const meta: SlideMeta = {
  title: 'I-Chau Wang',
  createdAt: '2026-10-14T23:51:18.980Z',
};

export default [Cover, Chengchi, Advantech, HysonProblem, HysonMethod, HysonResult, NCCUPass, Irvine] satisfies Page[];
