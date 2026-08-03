import type { FacilityIcon } from "@/content/facilities";

type IconProps = {
  className?: string;
};

const iconClass = "h-7 w-7";

export function FacilityIconGraphic({ icon, className = iconClass }: IconProps & { icon: FacilityIcon }) {
  switch (icon) {
    case "fitness":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M6.5 8.5 4 11v2l2.5 2.5M17.5 8.5 20 11v2l-2.5 2.5M9 12h6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="10" width="3" height="4" rx="1" />
          <rect x="19" y="10" width="3" height="4" rx="1" />
        </svg>
      );
    case "pilates":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <circle cx="12" cy="5" r="2" />
          <path d="M8 20c0-4 2-6 4-6s4 2 4 6M6 12c2-1 4-1 6 0s4 1 6 0" strokeLinecap="round" />
        </svg>
      );
    case "crossfit":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <path d="M4 10h16v4H4zM7 7v10M17 7v10" strokeLinecap="round" />
          <circle cx="7" cy="12" r="2.5" />
          <circle cx="17" cy="12" r="2.5" />
        </svg>
      );
    case "table-tennis":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <ellipse cx="9" cy="10" rx="5" ry="7" transform="rotate(-35 9 10)" />
          <path d="M13 14l7 7" strokeLinecap="round" />
          <circle cx="20" cy="21" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "volleyball":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4c2 3 2 13 0 16M4 12h16M6.5 7.5c3 2 8 2 11 0M6.5 16.5c3-2 8-2 11 0" strokeLinecap="round" />
        </svg>
      );
    case "football":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4 8.5 8 12 12l3.5-4L12 4zM8.5 8 6 14l6 2 6-2-2.5-6" strokeLinejoin="round" />
        </svg>
      );
  }
}
