import React from "react";

// packages/ui/src/components/Button.tsx
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
export const Button = ({ variant = 'primary', size = 'md', onClick, children, label, ...props }: ButtonProps) => {
  // ... 组件实现
  return <button onClick={onClick}>{label ? label : children}</button>;
};