/** Logomarca VA — ligadura V+A (V apex embaixo, A apex em cima, traço do meio
 *  compartilhado), dentro de uma placa; ponto crimson = colônia. */
export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Victor Aragão"
      fill="none"
    >
      <circle cx="50" cy="50" r="47" fill="#12685E" />
      <circle cx="50" cy="50" r="42" stroke="#F2F5F3" strokeOpacity="0.35" strokeWidth="1.5" />
      <g stroke="#F2F5F3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 36 L42 68 L60 36 L78 68" />
        <path d="M51 52 L69 52" />
      </g>
      <circle cx="73" cy="33" r="3" fill="#C0426A" />
    </svg>
  );
}
