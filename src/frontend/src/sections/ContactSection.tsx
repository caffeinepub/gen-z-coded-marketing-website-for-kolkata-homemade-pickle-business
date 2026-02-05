import { useState } from 'react';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useContactForm } from '@/hooks/useQueries';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const { mutate: submitForm, isPending, isSuccess, isError, error } = useContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent rapid duplicate submissions (within 3 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 3000) {
      return;
    }

    setLastSubmitTime(now);

    submitForm(
      { name, email, message },
      {
        onSuccess: () => {
          setName('');
          setEmail('');
          setMessage('');
        },
      }
    );
  };

  return (
    <Section id="contact" className="bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Questions? Custom orders? Just want to chat about pickles? We're here for it all.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us what's on your mind..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={isPending}
              rows={5}
            />
          </div>

          {isSuccess && (
            <Alert className="bg-chart-2/10 border-chart-2">
              <CheckCircle2 className="h-4 w-4 text-chart-2" />
              <AlertDescription className="text-chart-2">
                Thanks for reaching out! We'll get back to you soon.
              </AlertDescription>
            </Alert>
          )}

          {isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Oops! Something went wrong. Please try again. {error?.message}
              </AlertDescription>
            </Alert>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </div>
    </Section>
  );
}
