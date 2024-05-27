import { IDialogProps } from '../../interface/index';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IDialogProps>, {
    modal: boolean;
    width: string;
    title: string;
    openDelay: number;
    closeDelay: number;
    lockScroll: boolean;
    draggable: boolean;
    showClose: boolean;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    close: (...args: any[]) => void;
    closed: (...args: any[]) => void;
    open: (...args: any[]) => void;
    opened: (...args: any[]) => void;
    "open-auto-focus": (...args: any[]) => void;
    "close-auto-focus": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IDialogProps>, {
    modal: boolean;
    width: string;
    title: string;
    openDelay: number;
    closeDelay: number;
    lockScroll: boolean;
    draggable: boolean;
    showClose: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    "onOpen-auto-focus"?: ((...args: any[]) => any) | undefined;
    "onClose-auto-focus"?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    width: string;
    showClose: boolean;
    modal: boolean;
    lockScroll: boolean;
    openDelay: number;
    closeDelay: number;
    draggable: boolean;
}, {}>, {
    default?(_: {}): any;
    header?(_: {}): any;
    footer?(_: {}): any;
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
