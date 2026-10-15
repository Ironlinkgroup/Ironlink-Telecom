import {
  ArrowDownRight,
  ArrowRight,
  BellRing,
  Camera,
  Check,
  ChevronRight,
  Cloud,
  Container,
  Fuel,
  Gauge,
  MapPin,
  Menu,
  RadioTower,
  Search,
  ShieldCheck,
  Smartphone,
  Snowflake,
  Truck,
  Wifi,
  Workflow,
} from "lucide-react";

const truckFeatures = [
  "North American / Canadian ELD",
  "Driving style coaching",
  "Fuel monitoring",
  "In-cab cameras",
  "Messaging and job management",
  "Navigation and in-cab scanning",
];

const reeferFeatures = [
  "Live tracking and unit alarms",
  "Temperature monitoring",
  "Door events",
  "Fuel and trailer-weight monitoring",
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#home" aria-label="Ironlink Telecommunications home">
      <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
      <span className="brand-name">IRONLINK<span> TELECOMMUNICATION</span></span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>;
}

function SectionHeading({ kicker, title, description }: { kicker: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="section-heading">
      <Eyebrow>{kicker}</Eyebrow>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main id="home">
      <div className="announcement"><span className="announcement-dot" />CONNECTED ASSET INTELLIGENCE <span className="announcement-separator">/</span> HARDWARE, DATA & CONTROL</div>

      <header className="site-header">
        <div className="container nav-wrap">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#platform">Platform</a>
            <a href="#solutions">Solutions</a>
            <a href="#hardware">Hardware</a>
            <a href="#company">About Ironlink</a>
          </nav>
          <a className="button button-dark nav-cta" href="#contact">Talk to our team <ArrowRight size={16} /></a>
          <a className="mobile-menu" href="#platform" aria-label="Explore the site"><Menu size={23} /></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy">
            <Eyebrow>Connecting the world’s assets</Eyebrow>
            <h1>Visibility for every asset.<br /><em>Control for every journey.</em></h1>
            <p className="hero-lede">Know where your assets are, understand how they’re performing, and keep your operations moving with connected telematics.</p>
            <div className="hero-actions">
              <a className="button button-red" href="#platform">Explore our platform <ArrowRight size={17} /></a>
              <a className="text-link" href="#solutions">Discover our solutions <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-proof"><span className="proof-icon"><RadioTower size={17} /></span><span>Hardware-connected <b>·</b> Cloud-hosted <b>·</b> Data-driven</span></div>
          </div>
          <div className="hero-interface" aria-label="Illustration of a connected fleet dashboard">
            <div className="interface-top"><span className="live-dot" /> FLEET OVERVIEW <span className="interface-live">LIVE SYSTEM</span></div>
            <div className="interface-map">
              <div className="map-grid" />
              <svg className="route-line" viewBox="0 0 420 190" preserveAspectRatio="none" aria-hidden="true"><path d="M 25 155 C 70 140, 78 75, 133 90 S 200 155, 235 105 S 300 40, 390 55" fill="none" stroke="#c61d3a" strokeWidth="3" strokeDasharray="7 7"/><circle cx="25" cy="155" r="6" fill="#c61d3a"/><circle cx="390" cy="55" r="7" fill="#c61d3a"/></svg>
              <div className="map-pin pin-one"><Truck size={19} /></div><div className="map-pin pin-two"><Container size={18} /></div><div className="map-pin pin-three"><Snowflake size={18} /></div>
              <div className="map-label label-one"><span>TRK-204</span><b>In transit</b></div>
              <div className="map-label label-two"><span>REEFER-18</span><b>Temperature normal</b></div>
            </div>
            <div className="interface-stats"><div><span>CONNECTED ASSETS</span><strong>1,248</strong><small><i /> System connected</small></div><div><span>ACTIVE ALERTS</span><strong>03</strong><small className="alert-small">Needs attention</small></div><div><span>DATA SYNC</span><strong>99.8%</strong><small>Last 24 hours</small></div></div>
            <div className="interface-footer"><span><Cloud size={14} /> ORBCOMM PLATFORM</span><span>ASSET MONITORING <ChevronRight size={13} /></span></div>
          </div>
          <div className="hero-index"><span>01</span><i /> CONNECTED ASSET VISIBILITY</div>
        </div>
        <div className="hero-bottom"><div className="container hero-bottom-inner"><span>BUILT FOR COMPLEX OPERATIONS</span><span>TRUCKS <i /> TRAILERS <i /> REEFERS <i /> CONTAINERS</span></div></div>
      </section>

      <section className="intro-section" id="company">
        <div className="container intro-grid">
          <div><Eyebrow>What we connect</Eyebrow><h2>Bring your assets into <span>one clear picture.</span></h2></div>
          <div className="intro-copy"><p>Ironlink Telecommunications connects physical assets to the information your operation needs. By bringing telematics hardware, communications and cloud-based monitoring together, we help teams see more, respond sooner and manage assets with greater confidence.</p><a className="inline-link" href="#platform">How the platform works <ArrowRight size={16} /></a></div>
        </div>
        <div className="container asset-strip">
          <div className="asset-type"><span className="asset-icon"><Truck /></span><span><b>Trucks</b><small>Fleet visibility</small></span><ArrowRight size={15} /></div>
          <div className="asset-type"><span className="asset-icon"><Container /></span><span><b>Trailers & containers</b><small>Location and status</small></span><ArrowRight size={15} /></div>
          <div className="asset-type"><span className="asset-icon"><Snowflake /></span><span><b>Refrigerated assets</b><small>Temperature monitoring</small></span><ArrowRight size={15} /></div>
          <div className="asset-type"><span className="asset-icon"><Workflow /></span><span><b>Transport systems</b><small>Connected data</small></span><ArrowRight size={15} /></div>
        </div>
      </section>

      <section className="platform-section" id="platform">
        <div className="container platform-layout">
          <div className="platform-copy"><Eyebrow>The ORBCOMM platform</Eyebrow><h2>All your asset data.<br /><span>Working together.</span></h2><p>A cloud-hosted telematics platform brings vehicle and trailer information into a shared operational view—helping teams track assets, review performance and act on important events.</p>
            <div className="platform-list"><div><span className="list-number">01</span><div><b>One operational view</b><p>Individual workspaces, asset categories and reporting in one place.</p></div></div><div><span className="list-number">02</span><div><b>Information when it matters</b><p>Search, alerts and scheduled reports help teams find and act on relevant data.</p></div></div><div><span className="list-number">03</span><div><b>Built for teams</b><p>Multi-user administration and controls support shared operational workflows.</p></div></div></div>
            <a className="button button-dark" href="#contact">Discuss your requirements <ArrowRight size={17} /></a>
          </div>
          <div className="platform-visual">
            <div className="platform-window">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>ORBCOMM / ASSET MANAGEMENT</span><span className="window-status">CONNECTED</span></div>
              <div className="dashboard-body"><aside className="dashboard-sidebar"><div className="sidebar-heading">ASSET GROUPS</div><div className="sidebar-item active"><Truck size={14} /> Trucks <b>86</b></div><div className="sidebar-item"><Container size={14} /> Trailers <b>214</b></div><div className="sidebar-item"><Snowflake size={14} /> Reefers <b>58</b></div><div className="sidebar-item"><Workflow size={14} /> Containers <b>137</b></div><div className="sidebar-rule"/><div className="sidebar-heading">WORKSPACE</div><div className="sidebar-item"><Search size={14} /> Asset search</div><div className="sidebar-item"><BellRing size={14} /> Alerts</div></aside>
                <div className="dashboard-main"><div className="dashboard-heading"><div><small>FLEET MONITORING</small><b>Asset activity</b></div><span>Last 24 hours⌄</span></div><div className="dashboard-map"><div className="map-roads road-a"/><div className="map-roads road-b"/><div className="map-roads road-c"/><div className="map-roads road-d"/><div className="dash-route"/><span className="dash-point dp1"><Truck size={13}/></span><span className="dash-point dp2"><Container size={13}/></span><span className="dash-point dp3"><Truck size={13}/></span><span className="map-city city-a">NORTH HUB</span><span className="map-city city-b">DISTRIBUTION</span></div><div className="dashboard-bottom"><div><small>ASSETS REPORTING</small><strong>495</strong><div className="mini-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div><div><small>OPEN ALERTS</small><strong className="red-text">03</strong><p><span className="tiny-red"/> Review required</p></div></div></div></div>
              <div className="window-footer"><span><ShieldCheck size={13}/> CLOUD-HOSTED PLATFORM</span><span>ILLUSTRATIVE DASHBOARD</span></div>
            </div>
            <div className="visual-caption"><span>FIG. 01</span><span>ASSET DATA, UNIFIED</span><span>IRONLINK TELECOMMUNICATIONS</span></div>
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solutions">
        <div className="container"><div className="solutions-heading"><SectionHeading kicker="Solutions" title={<>The right data for <span>every asset type.</span></>} description="From vehicle activity to temperature-sensitive freight, connect the information that matters to your operation."/><a className="inline-link desktop-inline" href="#contact">Talk to our team <ArrowRight size={16}/></a></div>
          <div className="solution-grid">
            <article className="solution-card solution-truck"><div className="solution-top"><span>01 / ROAD FLEET</span><Truck size={22}/></div><div className="solution-art truck-art"><div className="art-road"/><Truck size={106} strokeWidth={1.1}/><span className="art-signal"><Wifi size={17}/></span></div><h3>Trucks & fleet</h3><p>Bring driving, fuel, location and in-cab data together to support safer, more informed fleet operations.</p><div className="tag-row"><span>ELD</span><span>Fuel</span><span>Driver data</span></div></article>
            <article className="solution-card solution-reefer"><div className="solution-top"><span>02 / COLD CHAIN</span><Snowflake size={22}/></div><div className="solution-art reefer-art"><div className="art-road"/><Container size={108} strokeWidth={1.1}/><span className="art-snow"><Snowflake size={18}/></span></div><h3>Reefer trailers</h3><p>Monitor temperature, refrigeration-unit alarms, door events and other key trailer conditions.</p><div className="tag-row"><span>Temperature</span><span>Door events</span><span>Alarms</span></div></article>
            <article className="solution-card solution-container"><div className="solution-top"><span>03 / CARGO VISIBILITY</span><Container size={22}/></div><div className="solution-art container-art"><div className="art-road"/><Container size={108} strokeWidth={1.1}/><span className="art-pin"><MapPin size={18}/></span></div><h3>Dry trailers & containers</h3><p>Track location, trip activity, stops and asset status across moving and stationary equipment.</p><div className="tag-row"><span>Tracking</span><span>Trip replay</span><span>Asset status</span></div></article>
          </div>
        </div>
      </section>

      <section className="hardware-section" id="hardware">
        <div className="container hardware-layout"><div className="hardware-copy"><Eyebrow>Connected hardware</Eyebrow><h2>From the asset<br />to the <span>cloud.</span></h2><p>Telematics devices capture the signals and conditions that keep teams informed. Data is transmitted to a cloud platform for visibility, monitoring and reporting.</p><div className="hardware-points"><div><span><RadioTower size={18}/></span><div><b>Asset-mounted devices</b><small>Hardware options for supported vehicle and trailer use cases.</small></div></div><div><span><Smartphone size={18}/></span><div><b>In-cab connectivity</b><small>Driver-facing information and operational tools.</small></div></div><div><span><Cloud size={18}/></span><div><b>Cloud-based information</b><small>Connected data for platform views and reports.</small></div></div></div></div>
          <div className="hardware-board"><div className="hardware-board-head"><span>DEVICE ECOSYSTEM</span><span>HARDWARE OVERVIEW / 02</span></div><div className="device-grid"><div className="device-card device-large"><div className="device-product black-device"><span className="device-ring"/><span className="device-led"/></div><b>BT 504</b><small>Asset tracking device</small></div><div className="device-card"><div className="device-product gold-device"><span className="device-screen"/><span className="device-pins"/></div><b>BT 320</b><small>Telematics hardware</small></div><div className="device-card"><div className="device-product slim-device"><span/></div><b>GT 1200 / 1210</b><small>Tracking device family</small></div><div className="device-card"><div className="device-product tablet-device"><div/><i/><i/><i/></div><b>In-cab device</b><small>Driver interface</small></div></div><div className="hardware-board-foot"><span><Check size={14}/> HARDWARE + CONNECTIVITY</span><span>Device availability varies by configuration.</span></div></div>
        </div>
      </section>

      <section className="workflow-section" id="workflow"><div className="container"><SectionHeading kicker="How it connects" title={<>A connected path from <span>asset to insight.</span></>} description="A modular system connects field hardware with a central platform and the wider transport operation."/><div className="workflow"><div className="workflow-step"><div className="workflow-icon"><Truck size={24}/></div><span className="workflow-num">01</span><h3>Physical assets</h3><p>Trucks, trailers, reefers and containers.</p></div><div className="workflow-connector"><span/><ArrowRight size={18}/></div><div className="workflow-step"><div className="workflow-icon"><RadioTower size={24}/></div><span className="workflow-num">02</span><h3>Telematics devices</h3><p>Capture location, status and sensor data.</p></div><div className="workflow-connector"><span/><ArrowRight size={18}/></div><div className="workflow-step"><div className="workflow-icon"><Cloud size={24}/></div><span className="workflow-num">03</span><h3>Cloud platform</h3><p>Organize, visualize, search and report.</p></div><div className="workflow-connector"><span/><ArrowRight size={18}/></div><div className="workflow-step"><div className="workflow-icon"><Workflow size={24}/></div><span className="workflow-num">04</span><h3>Connected systems</h3><p>Share data with transport management systems.</p></div></div></div></section>

      <section className="capabilities-section"><div className="container capabilities-layout"><div><Eyebrow>Platform capabilities</Eyebrow><h2>More visibility.<br /><span>Less guesswork.</span></h2><p>Give teams the tools to find assets, understand events and keep the operation organized.</p><a className="inline-link" href="#contact">Explore a use case <ArrowRight size={16}/></a></div><div className="capability-grid"><div className="capability"><MapPin/><b>Live asset tracking</b><p>Location and movement visibility.</p></div><div className="capability"><Gauge/><b>Monitoring & metrics</b><p>Review operational signals and conditions.</p></div><div className="capability"><BellRing/><b>Alerts & schedules</b><p>Surface important events and planned reports.</p></div><div className="capability"><Search/><b>Search & categorization</b><p>Find assets using organized records and tags.</p></div><div className="capability"><Fuel/><b>Fuel monitoring</b><p>Access fuel data where supported.</p></div><div className="capability"><Camera/><b>In-cab tools</b><p>Support camera, messaging and scanning workflows.</p></div></div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-card"><div className="contact-orbit orbit-one"/><div className="contact-orbit orbit-two"/><div className="contact-copy"><Eyebrow>Let's connect</Eyebrow><h2>Make every asset<br /><span>part of the picture.</span></h2><p>Talk to Ironlink Telecommunications about connected asset visibility, telematics hardware and the ORBCOMM platform.</p></div><div className="contact-action"><a className="button button-red" href="mailto:info@ironlink.ng?subject=Ironlink%20Telecommunications%20Enquiry">Contact our team <ArrowRight size={17}/></a><span>Tell us about your operation.</span></div></div></section>

      <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><BrandMark light/><p>Connecting the world’s assets.</p></div><div className="footer-column"><b>Explore</b><a href="#platform">ORBCOMM platform</a><a href="#solutions">Solutions</a><a href="#hardware">Hardware</a></div><div className="footer-column"><b>Capabilities</b><a href="#platform">Asset visibility</a><a href="#solutions">Reefer monitoring</a><a href="#workflow">Connected data</a></div><div className="footer-column"><b>Contact</b><a href="https://ironlink.ng">ironlink.ng</a><a href="mailto:info@ironlink.ng">info@ironlink.ng</a><a href="#contact">Discuss a solution <ArrowRight size={13}/></a></div></div><div className="container footer-bottom"><span>© 2026 Ironlink Telecommunications. All rights reserved.</span><span>Connected asset visibility <i/> Telematics <i/> Cloud platform</span></div></footer>
    </main>
  );
}