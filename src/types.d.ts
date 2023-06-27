export = fetcher;

/**
 * 
 * @param url The URL to use http(s) GET or POST
 * @param method Either "GET" or "POST"
 * @param headers Pairs of string: string objects
 * @param body same as headers
 * @returns the object delivered by the fetch request, but already parsed as object. Returns the error if occured.
 */
declare function fetcher(url: string, method: "GET" | "POST", headers: Record<string, string>, body?: Record<string, any>): Promise<any>;