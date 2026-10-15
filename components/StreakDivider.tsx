/** Divisor-assinatura: estria de placa (streak plate). */
export default function StreakDivider() {
  return (
    <div className="wrap" aria-hidden="true">
      <svg viewBox="0 0 1080 54" width="100%" height="54" preserveAspectRatio="none" style={{ display: "block", overflow: "visible" }}>
        <g fill="none" stroke="var(--teal)" strokeLinecap="round">
          <g strokeWidth="1.6" opacity="0.9">
            <path d="M40 40 L95 14" />
            <path d="M70 44 L130 12" />
            <path d="M100 42 L165 16" />
            <path d="M135 46 L200 14" />
          </g>
          <g strokeWidth="1.3" opacity="0.6">
            <path d="M250 42 L320 16" />
            <path d="M300 44 L380 14" />
            <path d="M360 40 L440 18" />
          </g>
          <g strokeWidth="1.1" opacity="0.4">
            <path d="M520 40 L610 18" />
            <path d="M590 42 L690 16" />
          </g>
          <g strokeWidth="1" opacity="0.28">
            <path d="M780 38 L880 20" />
            <path d="M980 34 L1030 24" />
          </g>
        </g>
        <g fill="var(--stain)">
          <circle cx="905" cy="22" r="2.1" opacity="0.5" />
          <circle cx="1012" cy="28" r="1.7" opacity="0.4" />
          <circle cx="840" cy="30" r="1.5" opacity="0.35" />
        </g>
      </svg>
    </div>
  );
}
