import {
  CalendarDays,
  Clock,
  FileUp,
  ClipboardList,
  EyeOff,
  FileSignature,
  LayoutDashboard,
  LayoutTemplate,
  Monitor,
  Phone,
  Plug,
  Scale,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/** Icons, die in lib/content.ts per Name referenziert werden können. */
export const ICONS = {
  calendar: CalendarDays,
  clock: Clock,
  clipboard: ClipboardList,
  upload: FileUp,
  eyeOff: EyeOff,
  fileSignature: FileSignature,
  dashboard: LayoutDashboard,
  layout: LayoutTemplate,
  monitor: Monitor,
  phone: Phone,
  plug: Plug,
  scale: Scale,
  server: Server,
  shield: ShieldCheck,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
