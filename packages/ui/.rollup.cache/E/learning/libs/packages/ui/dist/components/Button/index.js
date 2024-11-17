import { jsx as _jsx } from "react/jsx-runtime";
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
export const Button = ({ variant = 'primary', size = 'md', onClick, children, label, ...props }) => {
    // ... 组件实现
    return _jsx("button", { onClick: onClick, children: label ? label : children });
};
//# sourceMappingURL=index.js.map