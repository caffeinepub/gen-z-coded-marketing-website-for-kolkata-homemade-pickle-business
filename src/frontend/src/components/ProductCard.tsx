import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BrandBadge from './BrandBadge';
import { Flame } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  spiceLevel: 'Mild' | 'Medium' | 'Hot';
}

export default function ProductCard({ name, description, spiceLevel }: ProductCardProps) {
  const spiceColors = {
    Mild: 'bg-chart-2/20 text-chart-2 border-chart-2/30',
    Medium: 'bg-chart-4/20 text-chart-4 border-chart-4/30',
    Hot: 'bg-destructive/20 text-destructive border-destructive/30',
  };

  const spiceIcons = {
    Mild: 1,
    Medium: 2,
    Hot: 3,
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{name}</CardTitle>
          <BrandBadge variant="outline" className={spiceColors[spiceLevel]}>
            <div className="flex items-center gap-1">
              {Array.from({ length: spiceIcons[spiceLevel] }).map((_, i) => (
                <Flame key={i} className="h-3 w-3" />
              ))}
              <span className="ml-1">{spiceLevel}</span>
            </div>
          </BrandBadge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
