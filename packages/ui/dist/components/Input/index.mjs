import { j as jsxRuntimeExports } from '../../_virtual/jsx-runtime.mjs';

/**
 * 通用Input组件
 *
 * @example
 * ```tsx
 * <Input variant="primary" size="md">
 *   Click me
 * </Input>
 * ```
 */ const Input = ({ type = 'text', size = 'md', onClick, ...props })=>{
    // ... 组件实现
    return jsxRuntimeExports.jsx("input", {
        type: type,
        onClick: onClick,
        ...props
    });
};

export { Input };
