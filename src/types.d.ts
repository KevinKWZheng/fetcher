declare module fetcher {
    export function fetcher(url: string, method: "GET" | "POST", headers: Record<string, string>, body?: Record<string, any>):Promise<any>;
}