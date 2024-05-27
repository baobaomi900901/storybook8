declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    router: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "tab-click": (...args: any[]) => void;
    "tab-remove": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    router: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onTab-click"?: ((...args: any[]) => any) | undefined;
    "onTab-remove"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    modelValue: string;
    position: string;
    router: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
