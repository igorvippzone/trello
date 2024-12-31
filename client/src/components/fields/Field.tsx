import React, {type ChangeEventHandler, forwardRef} from "react";

interface InputFieldProps extends React.ComponentProps<'input'> {
    id: string
    label: string
    extra?: string
    variant?: string
    state?: 'error' | 'success'
    isNumber?: boolean
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    (props, ref) => {
        const {label, id, extra, type, placeholder, variant, state, disabled, isNumber, ...rest} = props;

        return (
            <div className={`${extra}`}>
                <label
                    htmlFor={id}
                    className={`text-sm text-navy-700 dark:text-white ${
                        variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
                    }`}
                >
                    {label}
                </label>
                <input
                    ref={ref}
                    disabled={disabled}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                        disabled === true
                            ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                            : state === "error"
                                ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                                : state === "success"
                                    ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                                    : "border-gray-200 dark:!border-white/10 dark:text-white"
                    }`}

                    onKeyDown={(event) => {
                        if(
                            isNumber &&
                            !/[0-9]/.test(event.key) &&
                            event.key !== "Backspace" &&
                            event.key !== "Tab" &&
                            event.key !== "Enter" &&
                            event.key !== "ArrowLeft" &&
                            event.key !== "ArrowRight"
                        ) {
                            event.preventDefault();
                        }
                    }}
                    {...rest}
                />
            </div>
        );
    }
)

InputField.displayName = "field";