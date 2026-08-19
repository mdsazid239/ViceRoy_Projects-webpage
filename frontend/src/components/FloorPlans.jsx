// import { floorPlans } from '../data/siteData.js'

// export default function FloorPlans({ onEnquire }) {
//   return (
//     <section id="floor-plans">
//       <div className="container">
//         <span className="eyebrow">Layouts</span>
//         <h2 className="section-heading">Floor Plans</h2>
//         <p className="section-sub">From the master plan down to each configuration — request the detailed PDF set for dimensions.</p>

//         <div className="floorplan-grid">
//           {floorPlans.map((plan) => (
//             <div className="floorplan-card" key={plan.label + plan.image}>
//               <div className="floorplan-image">
//                 <img src={plan.image} alt={plan.label} />
//               </div>
//               <div className="floorplan-label">{plan.label}</div>
//               <button className="link-btn" onClick={onEnquire}>
//                 Know More
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import { floorPlans } from "../data/siteData.js";

export default function FloorPlans({ onEnquire }) {
  return (
    <section
      id="floor-plans"
      className="w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-block
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#77773f]

              sm:text-xs
              md:text-sm
            "
          >
            Layouts
          </span>

          <h2
            className="
              mt-2
              font-serif
              text-3xl
              font-normal
              leading-tight
              text-[#1d2723]

              sm:text-4xl
              md:text-5xl
              lg:text-[52px]
            "
          >
            Floor Plans
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-gray-600

              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            From the master plan down to each configuration — request the
            detailed PDF set for dimensions.
          </p>
        </div>

        {/* Floor Plans Grid */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-5

            sm:mt-10
            sm:grid-cols-2
            sm:gap-6

            lg:mt-12
            lg:grid-cols-3
            lg:gap-7

            xl:gap-8
          "
        >
          {floorPlans.map((plan) => (
            <article
              key={`${plan.label}-${plan.image}`}
              className="
                group
                min-w-0
                overflow-hidden
                rounded-xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  aspect-[4/3]
                  w-full
                  overflow-hidden
                  bg-gray-100

                  sm:aspect-[4/3]
                  md:aspect-[16/11]
                "
              >
                <img
                  src={plan.image}
                  alt={plan.label}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-contain
                    p-3
                    transition-transform
                    duration-500

                    sm:p-4
                    md:p-5

                    group-hover:scale-[1.02]
                  "
                />
              </div>

              {/* Card Content */}
              <div
                className="
                  flex
                  flex-col
                  gap-4
                  p-4

                  sm:p-5
                  md:p-6
                "
              >
                <h3
                  className="
                    min-w-0
                    break-words
                    text-base
                    font-semibold
                    leading-6
                    text-[#1d2723]

                    sm:text-lg
                    md:text-xl
                  "
                >
                  {plan.label}
                </h3>

                <button
                  type="button"
                  onClick={onEnquire}
                  className="
                    min-h-[46px]
                    w-full
                    rounded-md
                    border
                    border-[#77773f]
                    bg-[#77773f]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300

                    hover:bg-[#626233]
                    hover:shadow-md

                    active:scale-[0.98]

                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#77773f]/40
                    focus:ring-offset-2

                    sm:min-h-[48px]
                    sm:text-base
                  "
                >
                  Know More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}