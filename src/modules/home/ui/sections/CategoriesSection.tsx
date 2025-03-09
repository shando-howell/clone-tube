"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { trpc } from "@/trpc/client";

interface CategoriesSectionProps {
    categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  )
}

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  return (
    <div>{JSON.stringify(categories)}</div>
  )
};
