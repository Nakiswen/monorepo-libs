import { jsx as _jsx } from "react/jsx-runtime";
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
export const Input = ({ type = 'text', size = 'md', onClick, ...props }) => {
    // ... 组件实现
    return _jsx("input", { type: type, onClick: onClick, ...props });
};
//# sourceMappingURL=index.js.map