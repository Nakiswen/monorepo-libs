import React from "react";
interface ButtonProps {
    /** 按钮类型 */
    variant?: 'primary' | 'secondary' | 'outline';
    /** 按钮大小 */
    size?: 'sm' | 'md' | 'lg';
    /** 是否禁用 */
    disabled?: boolean;
    /** 点击事件处理 */
    onClick?: () => void;
    label?: String;
    children?: React.ReactNode;
}
/**
 * 通用按钮组件
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */
export declare const Button: ({ variant, size, onClick, children, label, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map