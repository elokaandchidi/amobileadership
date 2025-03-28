import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp, FaCircleCheck } from "react-icons/fa6";

interface SelectProps {
  name?: string;
  value?: string | null;
  title?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  disabled?: boolean; // Added disabled prop
  recordList?: string[] | null;
  onChangeText?: (value: string) => void;
}

const SelectField: React.FC<SelectProps> = ({
  recordList = [],
  onChangeText,
  placeholder,
  title,
  value,
  disabled = false, // Default to false
  className,
}) => {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(value||null);

  const handleSelect = (value: string) => {
    if (disabled) return; // Prevent selection if disabled
    setSelectedValue(value);
    setShow(false);
    if (onChangeText) {
      onChangeText(value);
    }
  };

  useEffect(() => {
    setSelectedValue(value ?? null)
  }, [value]);

  return (
    <div className={`${className} flex flex-col relative`}>
      {title && <div className="pb-1 text-sm font-bold tracking-wide">{title}</div>}

      <div
        onClick={() => !disabled && setShow(!show)}
        className={`flex flex-row items-center py-2 pr-2 border w-full cursor-pointer ${
          disabled ? "bg-gray-300 border-gray-400 cursor-not-allowed" : "bg-white border-secondary"
        }`}
      >
        <input
          type="text"
          readOnly
          value={selectedValue || ""}
          placeholder={placeholder}
          className={`outline-none px-2 bg-transparent w-full ${
            disabled ? "text-gray-400 cursor-not-allowed" : "text-primary"
          }`}
          disabled={disabled}
        />
        {show ? <FaAngleUp /> : <FaAngleDown />}
      </div>

      {show && !disabled && (
        <div className="flex flex-col gap-1 bg-white shadow-2xl border border-gray-200 w-full max-h-[9rem] rounded-lg overflow-auto absolute top-[4.5rem] z-10">
          <div
            className={`flex flex-row capitalize justify-between items-center text-primary px-3 py-2 cursor-pointer hover:bg-blue-300`}
          >
            Select one option
          </div>
          {recordList && recordList.length === 0 ? (
            <div className="text-center text-gray-500 py-2">No options</div>
          ) : (
            recordList &&
            recordList.map((el) => (
              <div
                key={el}
                onClick={() => handleSelect(el)}
                className={`flex flex-row capitalize justify-between items-center text-primary px-3 py-2 cursor-pointer hover:bg-blue-300 ${
                  disabled ? "cursor-not-allowed text-gray-400" : ""
                }`}
              >
                {el}
                {selectedValue === el && !disabled && (
                  <FaCircleCheck className="text-green-500"/>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SelectField;
