import { floorPlans } from '../data/siteData.js'

export default function FloorPlans({ onEnquire }) {
  return (
    <section id="floor-plans">
      <div className="container">
        <span className="eyebrow">Layouts</span>
        <h2 className="section-heading">Floor Plans</h2>
        <p className="section-sub">From the master plan down to each configuration — request the detailed PDF set for dimensions.</p>

        <div className="floorplan-grid">
          {floorPlans.map((plan) => (
            <div className="floorplan-card" key={plan.label + plan.image}>
              <div className="floorplan-image">
                <img src={plan.image} alt={plan.label} />
              </div>
              <div className="floorplan-label">{plan.label}</div>
              <button className="link-btn" onClick={onEnquire}>
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
