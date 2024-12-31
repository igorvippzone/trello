import cn from 'clsx'
import type {ButtonHTMLAttributes, ComponentProps, FC, PropsWithChildren} from "react";

interface IButton extends ComponentProps<'button'> {

}

export const Button: FC<IButton> = ({
                                        children,
                                        className,
                                        ...rest
                                    }) => {
    return <button
        className={cn(
            'linear rounded-lg bg-transparent border border-primary py-2 px-7 text-base font-medium text-white transition hover:bg-primary active:bg-brand-700', className
        )}
        {...rest}
    >
        {children}
    </button>
}
