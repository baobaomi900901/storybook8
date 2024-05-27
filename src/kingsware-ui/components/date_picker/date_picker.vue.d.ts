import { IDatePicker } from '../../interface/index';

declare function focus(): void;
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IDatePicker>, {
    clearable: boolean;
    editable: boolean;
    rangeSeparator: string;
    teleported: boolean;
}>, {
    focus: typeof focus;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "visible-change": (...args: any[]) => void;
    "calendar-change": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IDatePicker>, {
    clearable: boolean;
    editable: boolean;
    rangeSeparator: string;
    teleported: boolean;
}>>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onCalendar-change"?: ((...args: any[]) => any) | undefined;
}, {
    clearable: boolean;
    teleported: boolean;
    rangeSeparator: string;
    editable: boolean;
}, {}>;
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
