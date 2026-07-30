import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-12 w-full items-center justify-center gap-2 border border-border-600 font-mono text-sm text-fg-primary transition-colors hover:bg-fg-primary hover:text-ink disabled:cursor-not-allowed disabled:opacity-50 sm:w-44"
      disabled={pending}
    >
      {pending ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-fg-primary border-b-transparent" />
      ) : (
        <>
          <span aria-hidden>[</span>
          {text}
          <span aria-hidden className="text-link-500 group-hover:text-ink">
            ↵
          </span>
          <span aria-hidden>]</span>
        </>
      )}
    </button>
  );
}
