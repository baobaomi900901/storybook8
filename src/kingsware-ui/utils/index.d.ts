export declare function genRandomStr(bit: number): string;
export declare function getCompSize(size: string | undefined): "" | "large" | "default" | "small";
type emitterType = {
    name: string;
    callback: () => any;
};
export declare class Emitter {
    events: emitterType[];
    constructor();
    on(eventName: string, callback: () => any): void;
    emit(eventName: string, ...arg: any[]): void;
}
export {};
