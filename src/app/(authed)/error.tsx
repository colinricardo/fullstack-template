"use client";

import PageError from "@/frontend/components/layout/PageError";

export default ({ error, reset }: { error: Error; reset: () => void }) => {
  return <PageError error={error} reset={reset} />;
};
