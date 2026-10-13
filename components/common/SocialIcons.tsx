import React from 'react';
import { footerSocialLinks } from '@/data/navigation';

export const socialIcons = {
  instagram: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  facebook: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  linkedin: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
} as const;

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
};

export function SocialLinks({
  className = 'flex items-center gap-4',
  iconClassName = 'w-6 h-6',
  linkClassName = 'text-gray-400 hover:text-gray-900 transition-colors',
  labelClassName = 'text-xs font-semibold text-gray-500 mb-3 block',
  showLabel = false,
}: SocialLinksProps) {
  return (
    <div>
      {showLabel && <span className={labelClassName}>Our Socials:</span>}
      <div className={className}>
        {footerSocialLinks.map((social) => {
          const Icon = socialIcons[social.icon];
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={linkClassName}
            >
              <Icon className={iconClassName} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
