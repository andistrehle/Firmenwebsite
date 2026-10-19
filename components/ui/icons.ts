import {
  Check,
  EyeOff,
  FileSignature,
  FileUp,
  LayoutDashboard,
  LayoutTemplate,
  Mail,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/** Icons, die in lib/content.ts per Name referenziert werden können. */
export const ICONS = {
  check: Check,
  eyeOff: EyeOff,
  fileSignature: FileSignature,
  upload: FileUp,
  dashboard: LayoutDashboard,
  layout: LayoutTemplate,
  mail: Mail,
  scale: Scale,
  shield: ShieldCheck,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
