import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.mjs';

/**
 * 通用按钮组件
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */ const Button = ({ variant = 'primary', size = 'md', onClick, children, label, ...props })=>{
    // ... 组件实现
    return jsxRuntimeExports.jsx("button", {
        onClick: onClick,
        children: label ? label : children
    });
};

export { Button };
