import { IButtonProps } from '../../interface/index';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IButtonProps>, {
    type: string;
    size: string;
    iconLeft: null;
    iconRight: null;
    value: string;
    disabled: boolean;
    loading: boolean;
    loadingIcon: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IButtonProps>, {
    type: string;
    size: string;
    iconLeft: null;
    iconRight: null;
    value: string;
    disabled: boolean;
    loading: boolean;
    loadingIcon: undefined;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    type: "main" | "secondary" | "text" | "normal";
    iconRight: any;
    iconLeft: any;
    value: string;
    disabled: boolean;
    loading: boolean;
    loadingIcon: object;
}, {}>, {
    default?(_: {
        class: string;
    }): any;
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
