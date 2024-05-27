import { ISelectInputProps } from '../../interface/index';

declare function focus(): void;
declare function blur(): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ISelectInputProps>, {
    teleported: boolean;
    valueKey: string;
    multipleLimit: number;
    autocomplete: string;
    persistent: boolean;
}>, {
    focus: typeof focus;
    blur: typeof blur;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    clear: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "visible-change": (...args: any[]) => void;
    "remove-tag": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ISelectInputProps>, {
    teleported: boolean;
    valueKey: string;
    multipleLimit: number;
    autocomplete: string;
    persistent: boolean;
}>>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onRemove-tag"?: ((...args: any[]) => any) | undefined;
}, {
    valueKey: string;
    multipleLimit: number;
    autocomplete: string;
    teleported: boolean;
    persistent: boolean;
}, {}>, Readonly<Record<string, any>> & Record<string, any>>;
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
