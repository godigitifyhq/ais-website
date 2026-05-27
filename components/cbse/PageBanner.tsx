export function PageBanner() {
  return (
    <div
      style={{ background: 'var(--color-primary)', position: 'relative', overflow: 'hidden' }}
      className="w-full flex items-center min-h-[180px] lg:min-h-[240px]"
    >
      {/* SVG dot-grid overlay */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08, pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="cbse-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cbse-dots)" />
      </svg>

      {/* Decorative open-book SVG — right side */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 160"
        style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(120px, 18vw, 200px)',
          opacity: 0.15,
          pointerEvents: 'none',
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Book spine */}
        <rect x="96" y="20" width="8" height="120" rx="2" fill="white" />
        {/* Left page */}
        <path d="M96 30 C80 28 40 30 20 40 L20 140 C40 132 80 130 96 132 Z" fill="white" />
        {/* Left page lines */}
        <line x1="32" y1="60" x2="84" y2="56" stroke="#c0272d" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="32" y1="72" x2="84" y2="68" stroke="#c0272d" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="32" y1="84" x2="84" y2="80" stroke="#c0272d" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="32" y1="96" x2="84" y2="92" stroke="#c0272d" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="32" y1="108" x2="84" y2="104" stroke="#c0272d" strokeWidth="2" strokeOpacity="0.6" />
        {/* Right page */}
        <path d="M104 30 C120 28 160 30 180 40 L180 140 C160 132 120 130 104 132 Z" fill="white" />
        {/* Right page lines */}
        <line x1="116" y1="56" x2="168" y2="60" stroke="#c0272d" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="116" y1="68" x2="168" y2="72" stroke="#c0272d" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="116" y1="80" x2="168" y2="84" stroke="#c0272d" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="116" y1="92" x2="168" y2="96" stroke="#c0272d" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="116" y1="104" x2="168" y2="108" stroke="#c0272d" strokeWidth="2" strokeOpacity="0.6" />
        {/* Graduation cap */}
        <polygon points="100,8 130,22 100,36 70,22" fill="#E8622A" opacity="0.9" />
        <rect x="118" y="22" width="3" height="18" fill="white" />
        <circle cx="121" cy="42" r="4" fill="#E8622A" opacity="0.9" />
      </svg>

      {/* Left content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <p
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}
        >
          Alliance International School
        </p>

        <h1 style={{ lineHeight: 1.05, marginBottom: '0.6rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.75rem, 7vw, 5rem)',
              fontWeight: 800,
              color: '#ffffff',
              display: 'inline',
            }}
          >
            CBSE
          </span>
          <span
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(2.75rem, 7vw, 5rem)',
              fontWeight: 600,
              fontStyle: 'italic',
              color: 'var(--color-primary-light)',
              display: 'inline',
              marginLeft: '0.35em',
            }}
          >
            Corner
          </span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.82)',
          }}
        >
          Compliance, Curriculum &amp; Resources
        </p>
      </div>
    </div>
  )
}
