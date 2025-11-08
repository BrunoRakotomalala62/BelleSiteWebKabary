import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  title: string;
  color: string;
  subsections?: { id: string; title: string }[];
}

interface TableOfContentsProps {
  items: TOCItem[];
  activeSection?: string;
  onItemClick?: (id: string) => void;
}

export default function TableOfContents({ 
  items, 
  activeSection,
  onItemClick 
}: TableOfContentsProps) {
  return (
    <aside className="w-72 border-r bg-card">
      <ScrollArea className="h-screen py-6 px-4">
        <div className="space-y-4">
          <div className="px-3 py-2">
            <h2 className="mb-4 text-lg font-bold" data-testid="text-toc-title">
              TOROTAKILA
            </h2>
            <div className="space-y-1">
              {items.map((item, index) => (
                <div key={item.id}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start font-semibold hover-elevate",
                      activeSection === item.id && "bg-accent"
                    )}
                    style={{ 
                      borderLeft: `4px solid ${item.color}`,
                      paddingLeft: '0.75rem'
                    }}
                    onClick={() => onItemClick?.(item.id)}
                    data-testid={`button-toc-${item.id}`}
                  >
                    <span className="text-sm">
                      {index + 1}. {item.title}
                    </span>
                  </Button>
                  {item.subsections && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.subsections.map((subsection) => (
                        <Button
                          key={subsection.id}
                          variant="ghost"
                          className={cn(
                            "w-full justify-start text-xs hover-elevate",
                            activeSection === subsection.id && "bg-accent/50"
                          )}
                          onClick={() => onItemClick?.(subsection.id)}
                          data-testid={`button-toc-${subsection.id}`}
                        >
                          ○ {subsection.title}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}
