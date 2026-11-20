import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const IslandLandscape: React.FC<SvgProps> = ({
  className = 'w-full h-auto',
  ...props
}) => (
  <svg
    viewBox="0 0 840 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Soft sky atmosphere */}
    <rect width="840" height="500" fill="#F8FAFC" rx="4" />

    {/* Sun Disc */}
    <circle cx="680" cy="110" r="42" fill="#FEF3C7" />
    <circle cx="680" cy="110" r="28" fill="#FDE68A" />

    {/* Distant Flying Birds */}
    <path d="M540 68C545 64 550 67 554 68C558 67 563 64 568 68" stroke="#64748B" strokeWidth="1.75" strokeLinecap="round" />
    <path d="M570 82C574 79 578 81 581 82C584 81 588 79 592 82" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M596 64C600 61 603 62 606 64C609 62 612 61 615 64" stroke="#64748B" strokeWidth="1.25" strokeLinecap="round" />

    {/* Distant Modern City Skyline (Soft neutral ash silhouette) */}
    <g opacity="0.35">
      <rect x="220" y="160" width="28" height="100" fill="#CBD5E1" />
      <rect x="252" y="130" width="34" height="130" fill="#94A3B8" />
      <rect x="290" y="150" width="22" height="110" fill="#CBD5E1" />
      <rect x="316" y="115" width="38" height="145" fill="#94A3B8" />
      <polygon points="335,95 325,115 345,115" fill="#64748B" />
      <line x1="335" y1="80" x2="335" y2="95" stroke="#64748B" strokeWidth="2" />
      <rect x="358" y="145" width="26" height="115" fill="#CBD5E1" />
      <rect x="388" y="125" width="32" height="135" fill="#94A3B8" />
      <rect x="424" y="165" width="24" height="95" fill="#CBD5E1" />
    </g>

    {/* Lake Water Surface Horizon */}
    <rect x="0" y="250" width="840" height="250" fill="#E2E8F0" />
    <rect x="0" y="275" width="840" height="225" fill="#CBD5E1" fillOpacity="0.4" />
    <line x1="0" y1="250" x2="840" y2="250" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.5" />

    {/* Midground Water Ripples */}
    <path d="M40 270C120 266 200 274 280 270" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M340 265C420 262 500 268 580 265" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M640 275C700 272 760 277 820 275" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />

    {/* Main Lush Island Foundation */}
    <path
      d="M100 400C160 300 320 265 520 265C700 265 800 320 840 400C840 450 720 480 500 480C280 480 120 450 100 400Z"
      fill="#E5E7EB"
    />
    {/* Shoreline Sand Fringe */}
    <path
      d="M140 395C190 310 340 280 520 280C680 280 770 330 800 395C760 440 650 465 500 465C330 465 190 440 140 395Z"
      fill="#F1F5F9"
      stroke="#D1D5DB"
      strokeWidth="1.5"
    />

    {/* Island Main Greenery Mound */}
    <path
      d="M180 385C230 300 360 275 520 275C660 275 750 315 780 385C740 425 630 445 500 445C350 445 220 425 180 385Z"
      fill="#0D2F1D"
    />
    <path
      d="M230 375C280 310 390 290 520 290C630 290 700 325 730 375C690 410 600 425 500 425C380 425 270 410 230 375Z"
      fill="#165B33"
    />

    {/* Premium Resort Architectural Complex (Right side of island) */}
    <g transform="translate(540, 175)">
      {/* Villa Block 1 (Modern 3-Story Eco Resort Suite) */}
      <rect x="0" y="35" width="130" height="95" rx="3" fill="#FFFFFF" stroke="#0D2F1D" strokeWidth="2.5" />
      {/* Pitched modern roof */}
      <polygon points="-8,35 65,8 138,35" fill="#0D2F1D" stroke="#0D2F1D" strokeWidth="2" />
      {/* Balconies & Glass Window Panels */}
      {/* Level 3 */}
      <rect x="14" y="44" width="46" height="20" fill="#E0F2FE" stroke="#0D2F1D" strokeWidth="1.5" />
      <rect x="70" y="44" width="46" height="20" fill="#E0F2FE" stroke="#0D2F1D" strokeWidth="1.5" />
      {/* Level 2 with Balcony Railing */}
      <rect x="14" y="72" width="46" height="22" fill="#E0F2FE" stroke="#0D2F1D" strokeWidth="1.5" />
      <rect x="70" y="72" width="46" height="22" fill="#E0F2FE" stroke="#0D2F1D" strokeWidth="1.5" />
      <line x1="10" y1="94" x2="120" y2="94" stroke="#D97706" strokeWidth="2.5" />
      {/* Ground Floor entrance terrace */}
      <rect x="14" y="102" width="30" height="28" fill="#F8FAFC" stroke="#0D2F1D" strokeWidth="1.5" />
      <rect x="52" y="102" width="64" height="28" fill="#E0F2FE" stroke="#0D2F1D" strokeWidth="1.5" />
      
      {/* Villa Block 2 (Adjacent Wing) */}
      <rect x="115" y="55" width="105" height="75" rx="3" fill="#F8FAFC" stroke="#0D2F1D" strokeWidth="2" />
      <polygon points="108,55 167,30 226,55" fill="#165B33" stroke="#0D2F1D" strokeWidth="2" />
      <rect x="128" y="65" width="36" height="18" fill="#E0F2FE" stroke="#0D2F1D" strokeWidth="1.5" />
      <rect x="172" y="65" width="36" height="18" fill="#E0F2FE" stroke="#0D2F1D" strokeWidth="1.5" />
      <rect x="128" y="92" width="80" height="22" fill="#E0F2FE" stroke="#0D2F1D" strokeWidth="1.5" />
      <line x1="120" y1="114" x2="215" y2="114" stroke="#D97706" strokeWidth="2" />

      {/* Overwater Boardwalk Promenade */}
      <rect x="-30" y="130" width="270" height="10" rx="2" fill="#FFFFFF" stroke="#0D2F1D" strokeWidth="2" />
      <line x1="-15" y1="140" x2="-15" y2="175" stroke="#0D2F1D" strokeWidth="2.5" />
      <line x1="45" y1="140" x2="45" y2="178" stroke="#0D2F1D" strokeWidth="2.5" />
      <line x1="110" y1="140" x2="110" y2="180" stroke="#0D2F1D" strokeWidth="2.5" />
      <line x1="175" y1="140" x2="175" y2="178" stroke="#0D2F1D" strokeWidth="2.5" />
      <line x1="230" y1="140" x2="230" y2="172" stroke="#0D2F1D" strokeWidth="2.5" />
    </g>

    {/* Primary Cluster of Tropical Palms (Center & Left) */}
    {/* Palm 1 - Main Tall Palm */}
    <g transform="translate(420, 110)">
      <path d="M50 250C40 180 55 100 80 30" stroke="#0D2F1D" strokeWidth="6" strokeLinecap="round" />
      {/* Palm fronds */}
      <path d="M80 30C40 -10 -30 10 -60 50" stroke="#165B33" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M80 30C70 -30 110 -50 160 -20" stroke="#165B33" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M80 30C30 10 -20 50 -30 90" stroke="#15803D" strokeWidth="4" strokeLinecap="round" />
      <path d="M80 30C130 10 180 40 190 80" stroke="#15803D" strokeWidth="4" strokeLinecap="round" />
      <path d="M80 30C90 -40 100 -60 110 -80" stroke="#165B33" strokeWidth="3.5" strokeLinecap="round" />
      {/* Coconuts */}
      <circle cx="76" cy="35" r="4" fill="#D97706" />
      <circle cx="84" cy="38" r="4" fill="#D97706" />
    </g>

    {/* Palm 2 - Leaning Palm */}
    <g transform="translate(360, 150)">
      <path d="M40 210C30 150 45 90 70 25" stroke="#0D2F1D" strokeWidth="5" strokeLinecap="round" />
      <path d="M70 25C30 -10 -20 10 -50 40" stroke="#165B33" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M70 25C60 -20 100 -40 140 -15" stroke="#165B33" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M70 25C20 10 -15 45 -25 75" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 25C110 10 150 35 160 70" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
    </g>

    {/* Palm 3 - Left Accent Palm */}
    <g transform="translate(260, 200)">
      <path d="M30 160C25 110 35 70 55 20" stroke="#0D2F1D" strokeWidth="4" strokeLinecap="round" />
      <path d="M55 20C25 -10 -15 5 -40 30" stroke="#165B33" strokeWidth="3" strokeLinecap="round" />
      <path d="M55 20C45 -15 80 -30 115 -10" stroke="#165B33" strokeWidth="3" strokeLinecap="round" />
      <path d="M55 20C15 5 -10 30 -20 55" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M55 20C90 5 125 25 135 50" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Foreground Water Ripple Reflections */}
    <path d="M80 435C220 425 380 445 540 435C660 428 750 442 820 435" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 465C180 455 350 472 530 462C680 455 770 468 830 465" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
