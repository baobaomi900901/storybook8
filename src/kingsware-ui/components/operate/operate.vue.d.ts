type ActionDataType = {
    label: string;
    action: () => any;
    params: Array<any>;
};
declare const _default: import('vue').DefineComponent<{
    dataSize: {
        type: NumberConstructor;
        default: () => string;
    };
    modelValue: {
        type: {
            (arrayLength: number): ActionDataType[];
            (...items: ActionDataType[]): ActionDataType[];
            new (arrayLength: number): ActionDataType[];
            new (...items: ActionDataType[]): ActionDataType[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => never[];
        reuired: boolean;
    };
    max: {
        type: NumberConstructor;
        default: () => number;
    };
    visible: {
        type: BooleanConstructor;
        default: () => boolean;
        reuired: boolean;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    run: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    dataSize: {
        type: NumberConstructor;
        default: () => string;
    };
    modelValue: {
        type: {
            (arrayLength: number): ActionDataType[];
            (...items: ActionDataType[]): ActionDataType[];
            new (arrayLength: number): ActionDataType[];
            new (...items: ActionDataType[]): ActionDataType[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => never[];
        reuired: boolean;
    };
    max: {
        type: NumberConstructor;
        default: () => number;
    };
    visible: {
        type: BooleanConstructor;
        default: () => boolean;
        reuired: boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onRun?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: ActionDataType[];
    max: number;
    dataSize: number;
    visible: boolean;
}, {}>;
export default _default;
