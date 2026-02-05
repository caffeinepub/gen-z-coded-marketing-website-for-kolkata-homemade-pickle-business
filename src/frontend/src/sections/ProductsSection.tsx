import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';

const products = [
  {
    name: 'Dalle ko achar',
    description: 'Fiery round chili pickle that brings the heat. A bold, authentic taste that packs a punch.',
    spiceLevel: 'Hot' as const,
  },
  {
    name: 'Aam ko achar',
    description: 'Classic mango pickle with mustard oil and traditional spices. The OG that hits different.',
    spiceLevel: 'Medium' as const,
  },
  {
    name: 'Mula ko achar',
    description: 'Tangy radish pickle with a perfect crunch. A refreshing twist on traditional flavors.',
    spiceLevel: 'Mild' as const,
  },
  {
    name: 'Bhaisi ko achar',
    description: 'Rich buffalo meat pickle slow-cooked with aromatic spices. For the true achar connoisseur.',
    spiceLevel: 'Hot' as const,
  },
  {
    name: 'Chicken ko achar',
    description: 'Tender chicken pickle marinated in traditional spices. Comfort food in every bite.',
    spiceLevel: 'Medium' as const,
  },
];

export default function ProductsSection() {
  return (
    <Section id="products" className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Flavors</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every jar is made with authentic recipes passed down through generations. No shortcuts, no preservatives—just
          pure, homemade goodness.
        </p>
      </div>
      <div className="relative mb-12">
        <img
          src="/assets/generated/product-set-1.dim_800x800.png"
          alt="Our collection of homemade pickles"
          className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </Section>
  );
}
