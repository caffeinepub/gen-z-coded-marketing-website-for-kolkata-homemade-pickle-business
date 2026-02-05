import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactFormSubmission } from '../backend';
import { toast } from 'sonner';

export function useContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, message }: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return await actor.submitContactForm(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
      toast.success('Message sent successfully!');
    },
    onError: (error) => {
      toast.error('Failed to send message. Please try again.');
      console.error('Contact form submission error:', error);
    },
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactFormSubmission[]>({
    queryKey: ['submissions'],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetSubmission(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<ContactFormSubmission>({
    queryKey: ['submission', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return await actor.getSubmission(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}
