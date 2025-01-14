import { cn } from "@/lib/utils";
import { Label } from "./label";

export default function CustomLabel({
  label,
  subLabel = "",
  isRequired = false,
  htmlFor = "",
  className = "",
}: {
  label: string;
  isRequired?: boolean;
  subLabel?: string;
  htmlFor?: string;
  className?: string;
}) {
  return (
    <>
      <Label htmlFor={htmlFor} className={cn(className)}>
        {label} {isRequired && <span className="text-red-500">*</span>}
        {subLabel && (
          <span className="block text-xs text-gray-500">{subLabel}</span>
        )}
      </Label>
    </>
  );
}
