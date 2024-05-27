import { IInputNumberProps } from '../../interface/index';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IInputNumberProps>, {
    controls: boolean;
}>, {
    focus: () => void;
    blur: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    focus: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IInputNumberProps>, {
    controls: boolean;
}>>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    controls: boolean;
}, {}>, {
    "increase-icon"?(_: {}): any;
    "decrease-icon"?(_: {}): any;
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
