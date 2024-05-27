import { VxeColumnProps } from 'vxe-table';

interface KTableColumnProps extends VxeColumnProps {
    desc?: string;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<KTableColumnProps>, {
    visible: boolean;
    filterMultiple: boolean;
    desc: string;
    width: undefined;
    minWidth: undefined;
    resizable: undefined;
    align: undefined;
    headerAlign: undefined;
    footerAlign: undefined;
    showOverflow: undefined;
    showHeaderOverflow: undefined;
    showFooterOverflow: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<KTableColumnProps>, {
    visible: boolean;
    filterMultiple: boolean;
    desc: string;
    width: undefined;
    minWidth: undefined;
    resizable: undefined;
    align: undefined;
    headerAlign: undefined;
    footerAlign: undefined;
    showOverflow: undefined;
    showHeaderOverflow: undefined;
    showFooterOverflow: undefined;
}>>>, {
    desc: string;
    width: import("vxe-table").VxeColumnPropTypes.Width;
    visible: boolean;
    align: import("vxe-table").VxeColumnPropTypes.Align;
    headerAlign: import("vxe-table").VxeColumnPropTypes.Align;
    footerAlign: import("vxe-table").VxeColumnPropTypes.Align;
    showOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
    showHeaderOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
    showFooterOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
    resizable: boolean;
    minWidth: import("vxe-table").VxeColumnPropTypes.MinWidth;
    filterMultiple: boolean;
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
