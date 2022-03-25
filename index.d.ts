export default function(options: {host: string; port: number}): HandmadeLiveReloadWebpack;

declare interface HandmadeLiveReloadWebpack {
    path_to_client: string;
    plugin: new() => HandmadeLiveReload;
}

declare class HandmadeLiveReload {
    constructor();
    apply(compiler: import("webpack").Compiler): void;
}
