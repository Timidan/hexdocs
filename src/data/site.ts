export interface SiteLink {
  label: string
  href: string
}

export type BrandPresetKey = 'primary' | 'secondary'

export interface BrandPalette {
  background: string
  card?: string
  foreground: string
  muted: string
  mutedForeground?: string
  border: string
  accent: string
  accentForeground: string
  accent2?: string
  accent2Foreground?: string
  input?: string
  sidebar?: string
  ring: string
  sidebarActiveBg: string
  sidebarActiveText: string
}

export interface BrandConfig {
  light: BrandPalette
  dark: BrandPalette
}

export interface OgImageConfig {
  /** Background gradient start color (hex). Defaults to dark background from brand. */
  backgroundStart?: string
  /** Background gradient end color (hex). Defaults to dark muted from brand. */
  backgroundEnd?: string
  /** Accent color for top bar and decorative orbs (hex). Defaults to dark accent from brand. */
  accent?: string
  /** Title text color (hex). Defaults to dark foreground from brand. */
  titleColor?: string
  /** Description text color (hex). */
  descriptionColor?: string
  /** Group label text color (hex). Defaults to accent. */
  groupColor?: string
  /** Domain text shown in the bottom bar (e.g. "docs.example.com"). Defaults to THALLY_SITE_URL hostname. */
  domain?: string
  /** Logo text displayed in the bottom bar. Defaults to site name. */
  logoText?: string
  /** Google Font family for the title. Defaults to "Inter". */
  fontFamily?: string
  /** Google Font weight for the title. Defaults to "700". */
  fontWeight?: string
}

export interface AnalyticsConfig {
  /** Google Analytics measurement ID (e.g. "G-XXXXXXXXXX"). */
  googleAnalyticsId?: string
  /** Plausible domain (e.g. "docs.example.com"). */
  plausibleDomain?: string
  /** Plausible script URL. Defaults to "https://plausible.io/js/script.js". */
  plausibleScriptUrl?: string
  /** PostHog project API key. */
  posthogKey?: string
  /** PostHog API host. Defaults to "https://us.i.posthog.com". */
  posthogHost?: string
}

export interface DocVersion {
  /** Version label displayed in the switcher (e.g. "v2.0", "Latest"). */
  label: string
  /** URL for this version. Use "/" for the current site, or a full URL for older versions hosted elsewhere. */
  href: string
  /** Whether this is the currently active version. Exactly one should be true. */
  current?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  repoUrl: string
  links: Array<SiteLink>
  brand: BrandConfig
  brandPreset: BrandPresetKey
  brandPresets: Record<BrandPresetKey, BrandConfig>
  /** Configuration for dynamic OG image generation. All fields are optional and fall back to brand colors. */
  ogImage?: OgImageConfig
  /** Analytics provider configuration. Leave undefined to disable analytics. */
  analytics?: AnalyticsConfig
  /** Doc versions for the version switcher. Leave undefined or empty to hide the switcher. */
  versions?: Array<DocVersion>
}

const brandPresets: Record<BrandPresetKey, BrandConfig> = {
  // A warm neutral foundation with restrained green and violet accents.
  // Hexkit's app palette: neutral greys with its blue accent.
  primary: {
    light: {
      background: '#FFFFFF',
      card: '#FFFFFF',
      foreground: '#0A0A0A',
      muted: '#F5F5F5',
      mutedForeground: '#737373',
      border: '#E5E5E5',
      accent: '#0066CD',
      accentForeground: '#FFFFFF',
      input: '#E5E5E5',
      sidebar: '#FAFAFA',
      ring: '#0066CD',
      sidebarActiveBg: '210 100% 40% / 0.10',
      sidebarActiveText: '#0066CD',
    },
    dark: {
      background: '#0A0A0A',
      card: '#101010',
      foreground: '#FAFAFA',
      muted: '#171717',
      mutedForeground: '#929292',
      border: '#262626',
      accent: '#0F92F7',
      accentForeground: '#0A0A0A',
      input: '#262626',
      sidebar: '#0A0A0A',
      ring: '#0F92F7',
      sidebarActiveBg: '206 94% 51% / 0.12',
      sidebarActiveText: '#0F92F7',
    },
  },
  // Alternate preset — violet. Still a first-class, ready-to-use accent.
  secondary: {
    light: {
      background: '#FFFFFF',
      foreground: '#0F172A',
      muted: '#F5F3FF',
      border: '#E4E4F7',
      accent: '#8B5CF6',
      accentForeground: '#F5F3FF',
      ring: '#A855F7',
      sidebarActiveBg: '262 83% 90% / 0.5',
      sidebarActiveText: '#312E81',
    },
    dark: {
      background: '#070B14',
      foreground: '#EDE9FE',
      muted: '#141129',
      border: '#1C1A2C',
      accent: '#C084FC',
      accentForeground: '#0B1220',
      ring: '#C084FC',
      sidebarActiveBg: '262 45% 32% / 0.3',
      sidebarActiveText: '#EDE9FE',
    },
  },
}

const brandPreset: BrandPresetKey = 'primary'

const templateSiteConfig: SiteConfig = {
  name: 'Documentation',
  description:
    'Clear, task-focused guidance for building with the product.',
  repoUrl: '',
  links: [
    { label: 'Get started', href: '/quickstart' },
    { label: 'Changelog', href: '/changelog' },
  ],
  brand: brandPresets[brandPreset],
  brandPreset,
  brandPresets,
}

// Managed by Thally Cloud onboarding.
export const siteConfig: SiteConfig = {
  ...templateSiteConfig,
  name: "Hexkit",
  description: "Decode, simulate and debug Vara program messages in your browser.",
  repoUrl: "https://github.com/Timidan/hexdocs",
  links: [
    { label: "Get started", href: "/quickstart" },
    { label: "Open Hexkit", href: "https://hexkit.app" },
    { label: "Report a docs issue", href: "https://github.com/Timidan/hexdocs/issues/new" },
  ],
  ogImage: {
    logoText: "Hexkit Docs",
  },
};
