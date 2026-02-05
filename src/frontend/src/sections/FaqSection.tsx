import Section from '@/components/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long do the pickles last?',
    answer:
      'Our pickles stay fresh for 6-8 months when stored properly in a cool, dry place. Once opened, keep them refrigerated and use within 2-3 months for best taste.',
  },
  {
    question: 'Do you ship outside Kolkata?',
    answer:
      "Yes! We ship across India. We pack everything carefully to ensure your achar reaches you in perfect condition. Shipping usually takes 3-5 business days depending on your location.",
  },
  {
    question: 'Are there any preservatives?',
    answer:
      'Absolutely not! We use traditional preservation methods with salt, oil, and spices. No artificial preservatives, colors, or flavors—just the way our grandmothers made it.',
  },
  {
    question: 'How spicy is "Hot"?',
    answer:
      'Our "Hot" pickles are legit spicy—made for people who can handle the heat. If you\'re not sure, start with "Mild" or "Medium" and work your way up!',
  },
  {
    question: 'Can I customize my order?',
    answer:
      "For sure! Hit us up through the contact form and let us know what you're looking for. We can do custom combos or adjust spice levels for bulk orders.",
  },
];

export default function FaqSection() {
  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
