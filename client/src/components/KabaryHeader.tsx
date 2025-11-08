import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

interface KabaryHeaderProps {
  onMenuClick?: () => void;
}

export default function KabaryHeader({ onMenuClick }: KabaryHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4 px-4 md:px-8">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMenuClick}
          data-testid="button-menu-toggle"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent" data-testid="text-header-title">
            NY TENA KABARY
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground" data-testid="text-header-subtitle">
            Kabary Malagasy Tradisional
          </p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
