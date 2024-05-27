import { ITooltipProps } from '../../interface/index';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ITooltipProps>, {
    type: undefined;
    color: string;
    textColor: string;
    trigger: string;
    width: number;
    placement: string;
    showArrow: boolean;
    hideAfter: number;
    teleported: boolean;
    persistent: boolean;
    visible: undefined;
    offset: number;
    iconSize: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ITooltipProps>, {
    type: undefined;
    color: string;
    textColor: string;
    trigger: string;
    width: number;
    placement: string;
    showArrow: boolean;
    hideAfter: number;
    teleported: boolean;
    persistent: boolean;
    visible: undefined;
    offset: number;
    iconSize: string;
}>>>, {
    type: "normal" | "danger" | "warning" | "primary";
    color: string;
    textColor: string;
    iconSize: string;
    width: string | number;
    teleported: boolean;
    persistent: boolean;
    visible: boolean;
    trigger: "click" | "hover";
    placement: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end " | "right" | "right-start" | "right-end";
    offset: number;
    showArrow: boolean;
    hideAfter: number;
}, {}>, {
    default?(_: {}): any;
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
