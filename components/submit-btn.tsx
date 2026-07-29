import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-12 w-full items-center justify-center gap-2 bg-brass-500 text-sm font-medium uppercase tracking-wide text-void transition-colors hover:bg-brass-300 disabled:cursor-not-allowed disabled:bg-steel-600 disabled:text-steel-400 sm:w-40"
      disabled={pending}
    >
      {pending ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-void border-b-transparent" />
      ) : (
        <>
          {text}
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </>
      )}
    </button>
  );
}
