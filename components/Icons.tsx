import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} className="h-10 w-10" {...props}>
      <path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16z" />
      <path d="M4 20L14 10" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} className="h-10 w-10" {...props}>
      <path d="M20.8 8.6a5.4 5.4 0 00-9-2.4l-.4.4-.4-.4a5.4 5.4 0 00-7.6 7.6l7.6 7.6a.6.6 0 00.8 0l7.6-7.6a5.4 5.4 0 001.4-5.2z" />
    </svg>
  );
}

export function BowlIcon(props: IconProps) {
  return (
    <svg {...base} className="h-10 w-10" {...props}>
      <path d="M3 11h18" />
      <path d="M4 11a8 8 0 0016 0" />
      <path d="M12 4c-1 1-1 2 0 3s1 2 0 3" />
    </svg>
  );
}

export function CapsuleIcon(props: IconProps) {
  return (
    <svg {...base} className="h-10 w-10" {...props}>
      <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)" />
      <path d="M9.5 6.5l8 8" />
    </svg>
  );
}

export function ManIcon(props: IconProps) {
  return (
    <svg {...base} className="h-10 w-10" {...props}>
      <circle cx="12" cy="6" r="3" />
      <path d="M6 21v-4a6 6 0 0112 0v4" />
    </svg>
  );
}

export function AtomIcon(props: IconProps) {
  return (
    <svg {...base} className="h-10 w-10" {...props}>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" />
    </svg>
  );
}

export function HairIcon(props: IconProps) {
  return (
    <svg {...base} className="h-10 w-10" {...props}>
      <path d="M4 14a8 8 0 0116 0" />
      <path d="M4 14v6M8 14v6M12 14v7M16 14v6M20 14v6" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} className="h-10 w-10" {...props}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      <path d="M19 17l.9 2.1L22 20l-2.1.9L19 23l-.9-2.1L16 20l2.1-.9L19 17z" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base} className="h-10 w-10" {...props}>
      <rect x="3" y="10" width="18" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 018 0v3" />
      <path d="M12 14v3" />
    </svg>
  );
}
