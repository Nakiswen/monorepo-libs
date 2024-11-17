'use strict';

var jsxRuntime = require('../../_virtual/jsx-runtime.cjs');

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
    return jsxRuntime.jsxRuntimeExports.jsx("button", {
        onClick: onClick,
        children: label ? label : children
    });
};

exports.Button = Button;
