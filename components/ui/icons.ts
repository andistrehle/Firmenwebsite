import {
  Check,
  EyeOff,
  FileSignature,
  FileUp,
  Inbox,
  LayoutDashboard,
  LayoutTemplate,
  Mail,
  Scale,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** Icons, die in lib/content.ts per Name referenziert werden können. */
export const ICONS = {
  check: Check,
  eyeOff: EyeOff,
  fileSignature: FileSignature,
  upload: FileUp,
  inbox: Inbox,
  dashboard: LayoutDashboard,
  layout: LayoutTemplate,
  mail: Mail,
  scale: Scale,
  shield: ShieldCheck,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
