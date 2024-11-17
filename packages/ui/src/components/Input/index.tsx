import React from "react";

// packages/ui/src/components/Input.tsx
interface InputProps {
  /** input类型 */
  type: 'text' | 'password' | 'email' | 'file';
  /** 大小 */
  size?: 'sm' | 'md' | 'lg';
  /** 是否禁用 */
  disabled?: boolean;
  label?: string;
  error?: String;
  required?: boolean;
  placeholder?: string;
  value?: string;
  /** 点击处理 */
  onClick?: () => void;
}

/** 
 * 通用Input组件
 * 
 * @example
 * ```tsx
 * <Input variant="primary" size="md">
 *   Click me
 * </Input>
 * ```
 */
export const Input = ({ type = 'text', size = 'md', onClick, ...props }: InputProps) => {
  // ... 组件实现
  return <input type={type} onClick={onClick} {...props} />;
};