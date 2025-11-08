import { useState } from "react";
import KabaryHeader from "@/components/KabaryHeader";
import TableOfContents from "@/components/TableOfContents";
import KabaryContent from "@/components/KabaryContent";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const tocItems = [
  { id: 'alasarona', title: 'Alasarona', color: '#8B5CF6' },
  { 
    id: 'kabary-panambadiana', 
    title: 'Kabary am-panambadiana', 
    color: '#3B82F6',
    subsections: [
      { id: 'fialan-tsiny', title: 'Fialan-tsiny' },
      { id: 'ohatra-voalohany', title: 'Ohatra voalohany' },
      { id: 'ohatra-faharoa', title: 'Ohatra faharoa' },
      { id: 'fiarahabana', title: 'Fiarahabana' },
      { id: 'ranjan-kabary', title: 'Ranjan-kabary' }
    ]
  },
  { id: 'dontany-kapotandroka', title: 'Dontany sy kapotandroka', color: '#10B981' },
  { id: 'fanaladiana', title: 'Fanaladiana (famangiana mana-manjo)', color: '#F97316' },
  { id: 'kabary-pandevenana', title: 'Kabary am-pandevenana', color: '#F43F5E' },
  { id: 'lahateny-fanao-fanasana', title: 'Lahateny fanao amin\'ny fanasana', color: '#06B6D4' },
  { id: 'lahateny-fanao-jobily', title: 'Lahateny fanao amin\'ny jobily', color: '#EC4899' }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const handleSectionClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <KabaryHeader onMenuClick={() => setMobileMenuOpen(true)} />
      
      <div className="flex">
        <div className="hidden md:block">
          <TableOfContents 
            items={tocItems}
            activeSection={activeSection}
            onItemClick={handleSectionClick}
          />
        </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="w-72 p-0">
            <TableOfContents 
              items={tocItems}
              activeSection={activeSection}
              onItemClick={handleSectionClick}
            />
          </SheetContent>
        </Sheet>

        <main className="flex-1 overflow-auto">
          <KabaryContent />
        </main>
      </div>
    </div>
  );
}
