import React, { forwardRef } from "react";

interface InputProps {
  title?: string;
  readonly?: boolean;
  isRequired?: boolean;
}

const TextareaField = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ title, readonly = false, isRequired = false }, ref) => {
    return (
      <div className="flex flex-col gap-1 text-sm w-full">
        {title && <div className="font-bold tracking-wide">{title} {isRequired && <span className="font-normal text-xs text-gray-400">(required)</span>} </div>}
        <div className="flex flex-row items-center py-3 bg-white border border-secondary w-full">
          <textarea
            readOnly= {readonly}
            rows={5}
            ref={ref} // Attach the ref here
            className="outline-none px-2 bg-transparent text-primary w-full"
          />
        </div>
      </div>
    );
  }
);

export default TextareaField;
