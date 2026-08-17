// import React from "react";
// const About = () => {
//   return (
//     <section
//       id="about"
//       className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-24"
//     >
//       <div className="mx-auto max-w-7xl">
//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b18a4a]">
//             About Us
//           </p>

//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
//             Discover a Life of
//             <span className="block text-[#b18a4a]">
//               Elegance & Comfort
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
//             Viceroy Projects brings together thoughtful design, premium
//             craftsmanship and modern living to create spaces that feel
//             timeless, comfortable and truly exceptional.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
//           {/* Left Content */}
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
//               Designed for the way you want to live.
//             </h3>

//             <p className="mt-5 leading-7 text-gray-600">
//               Every Viceroy project is thoughtfully planned with attention to
//               architecture, functionality and aesthetics. From carefully
//               designed residences to thoughtfully planned amenities, every
//               detail is created to elevate everyday living.
//             </p>

//             <p className="mt-4 leading-7 text-gray-600">
//               Our vision is to create developments that combine contemporary
//               lifestyles with enduring value, giving residents a place they
//               can proudly call home.
//             </p>

//             {/* Features */}
//             <div className="mt-8 grid gap-6 sm:grid-cols-2">
//               <div className="border-l-2 border-[#b18a4a] pl-4">
//                 <h4 className="font-semibold text-gray-900">
//                   Thoughtful Design
//                 </h4>
//                 <p className="mt-1 text-sm leading-6 text-gray-500">
//                   Spaces designed around comfort, functionality and elegance.
//                 </p>
//               </div>

//               <div className="border-l-2 border-[#b18a4a] pl-4">
//                 <h4 className="font-semibold text-gray-900">
//                   Premium Quality
//                 </h4>
//                 <p className="mt-1 text-sm leading-6 text-gray-500">
//                   Quality materials and attention to every detail.
//                 </p>
//               </div>

//               <div className="border-l-2 border-[#b18a4a] pl-4">
//                 <h4 className="font-semibold text-gray-900">
//                   Modern Living
//                 </h4>
//                 <p className="mt-1 text-sm leading-6 text-gray-500">
//                   Contemporary spaces created for today's lifestyle.
//                 </p>
//               </div>

//               <div className="border-l-2 border-[#b18a4a] pl-4">
//                 <h4 className="font-semibold text-gray-900">
//                   Lasting Value
//                 </h4>
//                 <p className="mt-1 text-sm leading-6 text-gray-500">
//                   Developments built with long-term value in mind.
//                 </p>
//               </div>
//             </div>

//             {/* Button */}
//             <button
//               type="button"
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               className="mt-9 inline-flex items-center rounded-full bg-[#b18a4a] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#967337]"
//             >
//               Get In Touch
//               <span className="ml-2">→</span>
//             </button>
//           </div>

//           {/* Right Stats */}
//           <div className="relative">
//             <div className="rounded-2xl bg-[#f7f4ee] p-8 sm:p-10 lg:p-12">
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="rounded-xl bg-white p-6 shadow-sm">
//                   <div className="text-3xl font-bold text-[#b18a4a]">
//                     10+
//                   </div>
//                   <p className="mt-2 text-sm text-gray-600">
//                     Years of Experience
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-white p-6 shadow-sm">
//                   <div className="text-3xl font-bold text-[#b18a4a]">
//                     15+
//                   </div>
//                   <p className="mt-2 text-sm text-gray-600">
//                     Projects Delivered
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-white p-6 shadow-sm">
//                   <div className="text-3xl font-bold text-[#b18a4a]">
//                     500+
//                   </div>
//                   <p className="mt-2 text-sm text-gray-600">
//                     Happy Families
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-white p-6 shadow-sm">
//                   <div className="text-3xl font-bold text-[#b18a4a]">
//                     100%
//                   </div>
//                   <p className="mt-2 text-sm text-gray-600">
//                     Commitment
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import { useEffect, useRef, useState } from "react";

const about = [
  {
    title: "We walk every acre",
    body: "Before a listing goes live, an agent walks the property boundary in person — the whole parcel, not just the yard — and notes what photos won't show: drainage, tree health, road noise, cell signal.",
  },
  {
    title: "One phone, one person",
    body: "You get a direct line to the agent handling your file, not a call center or a rotating cast. If they're out mowing hay, they'll call you back that evening.",
  },
  {
    title: "Deeds you can read in one sitting",
    body: "We write disclosures and contracts in plain language first, then hand them to a lawyer to make them official — not the other way around.",
  },
];

const STEWARDS = [
  { name: "Marguerite Holt", role: "Broker & Co-founder", note: "Twenty years reading county tax maps for fun.", initials: "MH" },
  { name: "Owen Delacroix", role: "Land Steward", note: "Former forester; handles anything with a woodlot or a stream.", initials: "OD" },
  { name: "Priya Anand", role: "Farmhouse Specialist", note: "Restores one old house a year, on principle.", initials: "PA" },
  { name: "Sam Okafor", role: "Closing Coordinator", note: "Keeps every file honest and on schedule.", initials: "SO" },
];

const LEDGER = [
  { label: "Founded", value: "2011" },
  { label: "Counties served", value: "6" },
  { label: "Acres represented", value: "14,200+" },
  { label: "Avg. time to close", value: "41 days" },
];

export default function RealEstateAbout() {
  const pathRef = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="lm-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .lm-root {
          --paper: #EEEFE4;
          --paper-2: #E6E5D6;
          --ink: #211F19;
          --forest: #2B4736;
          --forest-2: #1D3226;
          --barn: #8B3A26;
          --gold: #A9843F;
          --line: #C7C0A6;
          --white: #FBFAF4;
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          background: var(--paper);
          color: var(--ink);
          line-height: 1.5;
        }
        .lm-root * { box-sizing: border-box; }
        .lm-root .serif { font-family: 'Newsreader', ui-serif, Georgia, serif; }
        .lm-root .mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .lm-root a { color: inherit; }
        .lm-root button:focus-visible,
        .lm-root a:focus-visible { outline: 2px solid var(--barn); outline-offset: 3px; }

        .lm-wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }

        /* ---- top bar ---- */
        .lm-topbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 26px 0; border-bottom: 1px solid var(--line);
        }
        .lm-mark { display: flex; align-items: center; gap: 10px; font-weight: 600; letter-spacing: 0.01em; }
        .lm-mark-glyph {
          width: 30px; height: 30px; border: 1.5px solid var(--forest);
          border-radius: 2px; position: relative; flex: none;
        }
        .lm-mark-glyph::after {
          content: ""; position: absolute; inset: 5px;
          border: 1px solid var(--forest); opacity: 0.5;
        }
        .lm-topnav { display: flex; gap: 28px; font-size: 14px; color: #5b5648; }
        .lm-topnav span:first-child { color: var(--ink); font-weight: 500; }
        @media (max-width: 720px) { .lm-topnav { display: none; } }

        /* ---- hero ---- */
        .lm-hero {
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px;
          align-items: center; padding: 72px 0 88px;
        }
        @media (max-width: 860px) { .lm-hero { grid-template-columns: 1fr; padding: 48px 0 56px; gap: 40px; } }
        .lm-eyebrow {
          font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--barn); margin-bottom: 18px;
        }
        .lm-h1 {
          font-size: clamp(34px, 4.6vw, 54px); font-weight: 500; line-height: 1.08;
          margin: 0 0 22px; letter-spacing: -0.01em;
        }
        .lm-h1 em { font-style: italic; color: var(--forest); }
        .lm-lede { font-size: 16.5px; color: #423f35; max-width: 46ch; margin: 0 0 30px; }
        .lm-cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .lm-btn {
          font-family: inherit; font-size: 14.5px; font-weight: 500; cursor: pointer;
          padding: 13px 22px; border-radius: 2px; border: 1px solid var(--ink);
          background: var(--ink); color: var(--white); text-decoration: none;
          display: inline-flex; align-items: center; transition: background 0.15s, color .15s;
        }
        .lm-btn:hover { background: var(--forest-2); border-color: var(--forest-2); }
        .lm-btn-ghost {
          background: transparent; color: var(--ink); border: 1px solid var(--line);
        }
        .lm-btn-ghost:hover { border-color: var(--ink); }

        .lm-plat { width: 100%; height: auto; overflow: visible; }
        .lm-plat-line {
          fill: none; stroke: var(--forest); stroke-width: 1.6;
          stroke-linejoin: round; stroke-dasharray: 900;
          stroke-dashoffset: ${drawn ? 0 : 900};
          transition: stroke-dashoffset 1.6s ease;
        }
        .lm-plat-dim { font-family: 'IBM Plex Mono', monospace; font-size: 11px; fill: var(--gold); opacity: ${drawn ? 1 : 0}; transition: opacity 0.5s ease 1s; }
        .lm-plat-house { fill: var(--barn); opacity: ${drawn ? 1 : 0}; transition: opacity 0.4s ease 1.3s; }
        .lm-plat-north { opacity: ${drawn ? 1 : 0}; transition: opacity 0.4s ease 1.5s; }
        @media (prefers-reduced-motion: reduce) {
          .lm-plat-line { transition: none; stroke-dashoffset: 0; }
          .lm-plat-dim, .lm-plat-house, .lm-plat-north { transition: none; opacity: 1; }
        }

        /* ---- ledger / stats strip ---- */
        .lm-ledger {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
        }
        @media (max-width: 640px) { .lm-ledger { grid-template-columns: repeat(2, 1fr); } }
        .lm-ledger-cell {
          padding: 22px 20px; border-left: 1px solid var(--line);
        }
        .lm-ledger-cell:first-child { border-left: none; }
        @media (max-width: 640px) { .lm-ledger-cell:nth-child(2n+1) { border-left: none; } .lm-ledger-cell:nth-child(n+3) { border-top: 1px solid var(--line); } }
        .lm-ledger-value { font-family: 'IBM Plex Mono', monospace; font-size: 22px; color: var(--forest); }
        .lm-ledger-label { font-size: 12.5px; color: #6b6656; margin-top: 4px; }

        /* ---- intro / pull quote ---- */
        .lm-intro { padding: 84px 0; display: grid; grid-template-columns: 1fr; gap: 24px; }
        .lm-pullquote {
          font-family: 'Newsreader', serif; font-style: italic; font-weight: 400;
          font-size: clamp(22px, 3vw, 30px); line-height: 1.4; max-width: 34ch;
          color: var(--forest-2);
        }
        .lm-pullquote::before { content: "\\201C"; color: var(--barn); font-style: normal; }
        .lm-pullquote::after { content: "\\201D"; color: var(--barn); font-style: normal; }

        /* ---- principles ---- */
        .lm-section { padding: 70px 0; }
        .lm-kicker {
          font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.08em;
          text-transform: uppercase; color: #7a7561; margin-bottom: 10px;
        }
        .lm-h2 { font-size: clamp(24px, 3vw, 32px); font-weight: 500; margin: 0 0 40px; letter-spacing: -0.01em; }

        .lm-principle-row {
          display: grid; grid-template-columns: 90px 1fr; gap: 24px;
          padding: 26px 0; border-top: 1px solid var(--line);
        }
        .lm-principle-row:last-child { border-bottom: 1px solid var(--line); }
        @media (max-width: 640px) { .lm-principle-row { grid-template-columns: 1fr; gap: 8px; } }
        .lm-principle-idx { font-family: 'IBM Plex Mono', monospace; color: var(--gold); font-size: 13px; padding-top: 4px; }
        .lm-principle-title { font-family: 'Newsreader', serif; font-size: 20px; margin: 0 0 6px; }
        .lm-principle-body { color: #4a4638; font-size: 15px; max-width: 60ch; margin: 0; }

        /* ---- stewards ---- */
        .lm-stewards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
        @media (max-width: 860px) { .lm-stewards { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .lm-stewards { grid-template-columns: 1fr; } }
        .lm-steward-avatar {
          width: 56px; height: 56px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Newsreader', serif; font-size: 18px; color: var(--white);
          margin-bottom: 14px;
        }
        .lm-steward-name { font-weight: 600; font-size: 15px; margin-bottom: 2px; }
        .lm-steward-role { font-size: 13px; color: var(--barn); margin-bottom: 10px; }
        .lm-steward-note { font-size: 13.5px; color: #5b5648; margin: 0; }

        /* ---- testimonial ---- */
        .lm-testimonial {
          background: var(--paper-2); border: 1px solid var(--line); border-radius: 2px;
          padding: 44px; position: relative; margin: 0 0 0;
        }
        @media (max-width: 640px) { .lm-testimonial { padding: 30px 24px; } }
        .lm-testimonial-quote {
          font-family: 'Newsreader', serif; font-style: italic; font-size: 20px;
          line-height: 1.55; margin: 0 0 18px; max-width: 62ch;
        }
        .lm-testimonial-attr { font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; color: #6b6656; }

        /* ---- contact / cta ---- */
        .lm-contact {
          background: var(--forest-2); color: var(--white); border-radius: 3px;
          padding: 56px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; align-items: center;
        }
        @media (max-width: 760px) { .lm-contact { grid-template-columns: 1fr; padding: 40px 28px; } }
        .lm-contact-h { font-family: 'Newsreader', serif; font-size: clamp(22px, 3vw, 30px); margin: 0 0 14px; font-weight: 500; }
        .lm-contact-p { color: #cfd6cc; font-size: 15px; max-width: 42ch; margin: 0; }
        .lm-contact-details { display: flex; flex-direction: column; gap: 14px; }
        .lm-contact-row { display: flex; justify-content: space-between; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.16); padding-bottom: 12px; }
        .lm-contact-row span:first-child { color: #9fab99; font-family: 'IBM Plex Mono', monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; }
        .lm-contact-row a { text-decoration: none; }
        .lm-contact-row a:hover { text-decoration: underline; }

        /* ---- footer ---- */
        .lm-footer {
          padding: 40px 0 60px; display: flex; justify-content: space-between;
          align-items: center; font-size: 13px; color: #6b6656; border-top: 1px solid var(--line); margin-top: 60px;
        }
        @media (max-width: 600px) { .lm-footer { flex-direction: column; gap: 10px; text-align: center; } }
      `}</style>

      <div className="lm-wrap">
        <div className="lm-topbar">
          <div className="lm-mark">
            <span className="lm-mark-glyph" aria-hidden="true" />
            Longmeadow Land Co.
          </div>
          <nav className="lm-topnav">
            <span>About</span>
            <span>Listings</span>
            <span>Stewards</span>
            <span>Contact</span>
          </nav>
        </div>

        <section className="lm-hero">
          <div>
            <div className="lm-eyebrow">Rural &amp; small-town real estate — since 2011</div>
            <h1 className="lm-h1">
              We still sell land the <em>old way</em> — on foot, in daylight, with a handshake at the end.
            </h1>
            <p className="lm-lede">
              Longmeadow was started by two former appraisers who got tired of listings written by algorithms.
              We work in the towns within an hour of home, and every property we represent gets walked,
              measured, and written up by someone who has actually stood on it.
            </p>
            <div className="lm-cta-row">
              <a className="lm-btn" href="#contact">Start a conversation</a>
              <a className="lm-btn lm-btn-ghost" href="#stewards">Meet the stewards</a>
            </div>
          </div>

          <div>
            <svg
              className="lm-plat"
              viewBox="0 0 380 320"
              role="img"
              aria-label="Illustrated survey plat of a land parcel with a house marker and dimension labels"
            >
              <polygon
                ref={pathRef}
                className="lm-plat-line"
                points="40,60 300,40 340,220 120,280 30,190"
              />
              <text className="lm-plat-dim" x="150" y="34">168&#39; — north line</text>
              <text className="lm-plat-dim" x="330" y="130" transform="rotate(80 330 130)">142&#39;</text>
              <text className="lm-plat-dim" x="200" y="290">acreage 4.1</text>
              <text className="lm-plat-dim" x="20" y="130" transform="rotate(-70 20 130)">96&#39;</text>
              <rect className="lm-plat-house" x="165" y="140" width="46" height="34" />
              <polygon className="lm-plat-house" points="160,140 216,140 188,120" />
              <g className="lm-plat-north" transform="translate(300,250)">
                <line x1="0" y1="18" x2="0" y2="-6" stroke="#8B3A26" strokeWidth="1.4" />
                <polygon points="0,-10 -4,0 4,0" fill="#8B3A26" />
                <text x="7" y="0" className="lm-plat-dim" fill="#8B3A26">N</text>
              </g>
            </svg>
          </div>
        </section>

        <div className="lm-ledger">
          {LEDGER.map((item) => (
            <div className="lm-ledger-cell" key={item.label}>
              <div className="lm-ledger-value">{item.value}</div>
              <div className="lm-ledger-label">{item.label}</div>
            </div>
          ))}
        </div>

        <section className="lm-intro">
          <p className="lm-pullquote">
            A house is easy to describe. A property — the well, the woodlot, the neighbor's fence line —
            takes longer, and we take the time.
          </p>
        </section>

        <section className="lm-section">
          <div className="lm-kicker">What guides us</div>
          <h2 className="lm-h2">Three things we won't shortcut</h2>
          {PRINCIPLES.map((p, i) => (
            <div className="lm-principle-row" key={p.title}>
              <div className="lm-principle-idx">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="lm-principle-title">{p.title}</h3>
                <p className="lm-principle-body">{p.body}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="lm-section" id="stewards">
          <div className="lm-kicker">Who you'll actually talk to</div>
          <h2 className="lm-h2">The stewards</h2>
          <div className="lm-stewards">
            {STEWARDS.map((s, i) => {
              const colors = ["#2B4736", "#8B3A26", "#A9843F", "#4C5B3E"];
              return (
                <div key={s.name}>
                  <div className="lm-steward-avatar" style={{ background: colors[i % colors.length] }}>
                    {s.initials}
                  </div>
                  <div className="lm-steward-name">{s.name}</div>
                  <div className="lm-steward-role">{s.role}</div>
                  <p className="lm-steward-note">{s.note}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="lm-section">
          <div className="lm-testimonial">
            <p className="lm-testimonial-quote">
              They found us a farmhouse with a barn the internet said didn't exist. Turned out the county
              map was thirty years out of date — Owen had already walked it and knew.
            </p>
            <div className="lm-testimonial-attr">KATHLEEN R. — bought 4 acres in Hartwell County, 2023</div>
          </div>
        </section>

        <section className="lm-section" id="contact">
          <div className="lm-contact">
            <div>
              <h2 className="lm-contact-h">Have land in mind, or land to sell?</h2>
              <p className="lm-contact-p">
                Start with a conversation, not a listing agreement. We'll tell you plainly if we're not
                the right fit for your property.
              </p>
            </div>
            <div className="lm-contact-details">
              <div className="lm-contact-row">
                <span>Phone</span>
                <a href="tel:16035550148">(603) 555-0148</a>
              </div>
              <div className="lm-contact-row">
                <span>Email</span>
                <a href="mailto:hello@longmeadowland.co">hello@longmeadowland.co</a>
              </div>
              <div className="lm-contact-row">
                <span>Office</span>
                <span>12 Mill Street, Hartwell, NH</span>
              </div>
            </div>
          </div>
        </section>

        <div className="lm-footer">
          <span>Longmeadow Land Co. — licensed real estate brokerage, New Hampshire.</span>
          <span>© 2026, all rights reserved.</span>
        </div>
      </div>
    </div>
  );
}