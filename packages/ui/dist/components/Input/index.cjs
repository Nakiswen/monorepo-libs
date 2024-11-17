'use strict';

var jsxRuntime = require('../../_virtual/jsx-runtime.cjs');

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
    return jsxRuntime.jsxRuntimeExports.jsx("input", {
        type: type,
        onClick: onClick,
        ...props
    });
};

exports.Input = Input;
