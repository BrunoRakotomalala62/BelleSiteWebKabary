import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface KabarySectionProps {
  id: string;
  title: string;
  color: string;
  children: React.ReactNode;
  subtitle?: string;
}

export default function KabarySection({ 
  id, 
  title, 
  color, 
  children,
  subtitle 
}: KabarySectionProps) {
  return (
    <section id={id} className="scroll-mt-20 mb-12" data-testid={`section-${id}`}>
      <Card className="overflow-hidden">
        <CardHeader 
          className="pb-4"
          style={{ 
            borderLeft: `6px solid ${color}`,
          }}
        >
          <h2 
            className="text-3xl font-bold mb-2" 
            style={{ color }}
            data-testid={`title-${id}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground italic">
              {subtitle}
            </p>
          )}
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none dark:prose-invert">
          {children}
        </CardContent>
      </Card>
    </section>
  );
}
