"use client";

import { counterAtom, incrementCounterAtom } from "@/frontend/stores/app";
import { useAtom } from "jotai";

export default () => {
  const [counter] = useAtom(counterAtom);
  const [, incrementCounter] = useAtom(incrementCounterAtom);

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <button
        onClick={incrementCounter}
        className="px-4 py-2 bg-primary text-white rounded"
      >
        Counter: {counter}
      </button>
    </div>
  );
};
