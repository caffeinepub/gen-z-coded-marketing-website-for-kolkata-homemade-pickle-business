import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BrandBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
  className?: string;
}

export default function BrandBadge({ children, variant = 'default', className }: BrandBadgeProps) {
  return (
    <Badge variant={variant} className={cn('font-semibold tracking-wide', className)}>
      {children}
    </Badge>
  );
}
