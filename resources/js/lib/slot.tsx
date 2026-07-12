import React from "react"

// ponytail: minimal Slot, replaces radix-ui Slot.Root
export const Slot = {
  Root: React.forwardRef<HTMLElement, { children: React.ReactNode; [key: string]: unknown }>(
    ({ children, className, ...props }, ref) => {
      if (React.isValidElement(children)) {
        const childProps = children.props as Record<string, unknown>
        return React.cloneElement(children, {
          ...props,
          className: [className as string | undefined, childProps.className as string | undefined].filter(Boolean).join(" "),
          ref,
        } as Record<string, unknown>)
      }
      return null
    },
  ),
}

Slot.Root.displayName = "Slot"
