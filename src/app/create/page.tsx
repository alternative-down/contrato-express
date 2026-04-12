'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

function CreateContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.toString();
  router.push(query ? `/templates?${query}` : '/templates');
  return null;
}

export default function CreatePage() {
  return (
    <Suspense fallback={null}>
      <CreateContent />
    </Suspense>
  );
}
