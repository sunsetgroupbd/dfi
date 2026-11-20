import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const RouteIllustration: React.FC<SvgProps> = ({
  className = 'w-full h-auto',
  ...props
}) => (
  <svg
    viewBox="0 0 760 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Soft subtle city street grid underlay */}
    <rect width="760" height="380" fill="#F8FAFC" rx="4" />
    <path d="M60 0V380M180 0V380M300 0V380M440 0V380M580 0V380M700 0V380" stroke="#F1F5F9" strokeWidth="1.5" />
    <path d="M0 60H760M0 140H760M0 220H760M0 300H760" stroke="#F1F5F9" strokeWidth="1.5" />

    {/* River Buriganga / Canal curve underlay */}
    <path
      d="M360 380C390 280 430 200 480 120C510 70 540 30 560 0"
      stroke="#E2E8F0"
      strokeWidth="24"
      strokeLinecap="round"
    />
    <path
      d="M360 380C390 280 430 200 480 120C510 70 540 30 560 0"
      stroke="#BAE6FD"
      strokeWidth="12"
      strokeLinecap="round"
      strokeOpacity="0.6"
    />

    {/* Primary Transit Highway Corridor (Dhanmondi -> Bosila -> DFI) */}
    {/* Road Outer Shadow/Curb */}
    <path
      d="M650 310C610 260 520 220 460 250C420 270 380 250 330 190C280 130 330 90 370 120C410 150 490 200 535 190"
      stroke="#CBD5E1"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Road Surface */}
    <path
      d="M650 310C610 260 520 220 460 250C420 270 380 250 330 190C280 130 330 90 370 120C410 150 490 200 535 190"
      stroke="#165B33"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Center Dash */}
    <path
      d="M650 310C610 260 520 220 460 250C420 270 380 250 330 190C280 130 330 90 370 120C410 150 490 200 535 190"
      stroke="#FFFFFF"
      strokeWidth="1"
      strokeDasharray="4 4"
      strokeLinecap="round"
    />

    {/* Landmark 1: Sunset Group Office (Dhanmondi 27 Shaptak Square) */}
    <g transform="translate(650, 310)">
      <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="#165B33" strokeWidth="2.5" />
      <circle cx="0" cy="0" r="4.5" fill="#165B33" />
      <rect x="16" y="-12" width="125" height="24" rx="3" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
      <text x="78" y="4" textAnchor="middle" fontSize="10" fontWeight="700" fill="#111827" fontFamily="sans-serif">
        SHAPTAK SQUARE
      </text>
    </g>

    {/* Landmark 2: Parliament House Corridor */}
    <g transform="translate(370, 120)">
      <circle cx="0" cy="0" r="8" fill="#FFFFFF" stroke="#475569" strokeWidth="2" />
      <circle cx="0" cy="0" r="3.5" fill="#475569" />
      <rect x="-60" y="-32" width="120" height="22" rx="3" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
      <text x="0" y="-18" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#334155" fontFamily="sans-serif">
        PARLIAMENT HOUSE
      </text>
    </g>

    {/* Landmark 3: Bosila Bridge */}
    <g transform="translate(425, 260)">
      <circle cx="0" cy="0" r="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.75" />
      <circle cx="0" cy="0" r="2.5" fill="#0284C7" />
      <text x="0" y="16" textAnchor="middle" fontSize="9" fontWeight="600" fill="#0284C7" fontFamily="sans-serif">
        BOSILA BRIDGE
      </text>
    </g>

    {/* Landmark 4: Bosila CNG Stand */}
    <g transform="translate(485, 265)">
      <circle cx="0" cy="0" r="6" fill="#FFFFFF" stroke="#475569" strokeWidth="1.75" />
      <circle cx="0" cy="0" r="2.5" fill="#475569" />
      <text x="0" y="16" textAnchor="middle" fontSize="9" fontWeight="600" fill="#475569" fontFamily="sans-serif">
        BOSILA CNG STAND
      </text>
    </g>

    {/* Destination Pin: DHAKA FANTASY ISLAND */}
    <g transform="translate(535, 190)">
      {/* Outer Pulse Ring */}
      <circle cx="0" cy="0" r="24" fill="#DCFCE7" />
      {/* Pin Body */}
      <circle cx="0" cy="0" r="14" fill="#165B33" stroke="#FFFFFF" strokeWidth="2.5" />
      <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
      {/* Destination Callout Box */}
      <rect x="22" y="-18" width="155" height="36" rx="4" fill="#165B33" stroke="#165B33" strokeWidth="1" />
      <text x="100" y="-4" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFFFFF" fontFamily="sans-serif">
        DHAKA FANTASY ISLAND
      </text>
      <text x="100" y="9" textAnchor="middle" fontSize="8" fontWeight="500" fill="#86EFAC" fontFamily="sans-serif">
        (ECO HOTEL &amp; RESORT)
      </text>
    </g>
  </svg>
);
