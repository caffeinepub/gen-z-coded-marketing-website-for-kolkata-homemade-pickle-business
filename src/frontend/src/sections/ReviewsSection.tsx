import Section from '@/components/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    initials: 'PS',
    location: 'Mumbai',
    text: "Bro, this achar hits different! Reminds me of my nani's recipe. Been ordering every month since I found them.",
    rating: 5,
  },
  {
    name: 'Rohan Thapa',
    initials: 'RT',
    location: 'Bangalore',
    text: 'Finally found authentic achar that actually tastes like home. The mirchi one is fire 🔥',
    rating: 5,
  },
  {
    name: 'Anjali Rai',
    initials: 'AR',
    location: 'Delhi',
    text: "Living away from Kolkata was tough until I found Achar Ghar. Now my hostel room smells like ma's kitchen!",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <Section id="reviews" className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
        <p className="text-lg text-muted-foreground">Real reviews from real people missing home</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.name}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">{review.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
