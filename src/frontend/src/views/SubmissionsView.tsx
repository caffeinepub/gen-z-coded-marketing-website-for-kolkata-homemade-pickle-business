import { useGetAllSubmissions } from '@/hooks/useQueries';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function SubmissionsView() {
  const { data: submissions, isLoading, isError, error } = useGetAllSubmissions();

  return (
    <div className="container max-w-6xl py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contact Form Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          )}

          {isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>Failed to load submissions. {error?.message}</AlertDescription>
            </Alert>
          )}

          {submissions && submissions.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No submissions yet.</p>
          )}

          {submissions && submissions.length > 0 && (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id.toString()}>
                      <TableCell className="font-medium">{submission.id.toString()}</TableCell>
                      <TableCell>{submission.name}</TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell className="max-w-md truncate">{submission.message}</TableCell>
                      <TableCell>{new Date(Number(submission.timestamp) / 1000000).toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
