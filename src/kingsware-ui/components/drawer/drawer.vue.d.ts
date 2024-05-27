import { IDrawerProps } from '../../interface/index';

declare function handleClose(): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IDrawerProps>, {
    modal: boolean;
    lockScroll: boolean;
    showClose: boolean;
    withHeader: boolean;
}>, {
    handleClose: typeof handleClose;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    close: (...args: any[]) => void;
    closed: (...args: any[]) => void;
    open: (...args: any[]) => void;
    opened: (...args: any[]) => void;
    "open-auto-focus": (...args: any[]) => void;
    "close-auto-focus": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IDrawerProps>, {
    modal: boolean;
    lockScroll: boolean;
    showClose: boolean;
    withHeader: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    "onOpen-auto-focus"?: ((...args: any[]) => any) | undefined;
    "onClose-auto-focus"?: ((...args: any[]) => any) | undefined;
}, {
    showClose: boolean;
    modal: boolean;
    lockScroll: boolean;
    withHeader: boolean;
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
