import { IInputProps } from '../../interface/index';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IInputProps>, {
    modelValue: string;
    disabled: boolean;
    clearable: boolean;
    readonly: boolean;
    showWordLimit: boolean;
    autosize: boolean;
    showPassword: boolean;
}>, {
    focus: () => void;
    blur: () => void;
    select: () => void;
    clear: () => void;
    resizeTextarea: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    clear: (...args: any[]) => void;
    focus: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IInputProps>, {
    modelValue: string;
    disabled: boolean;
    clearable: boolean;
    readonly: boolean;
    showWordLimit: boolean;
    autosize: boolean;
    showPassword: boolean;
}>>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string | number;
    clearable: boolean;
    readonly: boolean;
    showWordLimit: boolean;
    autosize: boolean | object;
    showPassword: boolean;
}, {}>, Readonly<{
    default?: any;
    prepend?: any;
    append?: any;
    prefix?: any;
    suffix?: any;
}> & {
    default?: any;
    prepend?: any;
    append?: any;
    prefix?: any;
    suffix?: any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
