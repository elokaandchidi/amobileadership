import { forwardRef } from "react";

interface InputProps {
  title?: string;
  type: string;
  readonly?: boolean;
  isRequired?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ title, type, readonly = false, isRequired = false }, ref) => {
    return (
      <div className="flex flex-col gap-1 text-sm w-full">
        {title && <div className="font-bold tracking-wide">{title} {isRequired && <span className="font-normal text-xs text-gray-400">(required)</span>} </div>}
        <div className="flex flex-row items-center py-3 bg-white border border-secondary w-full">
          <input
            type={type}
            readOnly= {readonly}
            ref={ref} // Attach the ref here
            className="outline-none px-2 bg-transparent w-full"
          />
        </div>
      </div>
    );
  }
);

export default InputField;
