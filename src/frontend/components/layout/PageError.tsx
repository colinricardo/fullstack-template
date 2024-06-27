"use client";

import { Button } from "@/frontend/components/ui/button";
import { useEffect } from "react";
export default ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Something went wrong!
          </h3>
          <p className="text-sm text-muted-foreground">
            We apologize for the inconvenience. Please try again.
          </p>
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </div>
    </>
  );
};
