import fetch from "node-fetch";

/**
 * 
 * @param url The URL to use http(s) GET or POST
 * @param method Either "GET" or "POST"
 * @param headers Pairs of string: string objects
 * @param body same as headers
 * @returns the object delivered by the fetch request, but already parsed as object. Returns the error if occured.
 */
export async function fetcher(url: string, method: "GET" | "POST", headers: Record<string, string>, body?: Record<string, any>) {
    // Use try/catch to handle errors
    try {
        // Stringify body if it is an object
        const bodyString = typeof body === "object" ? JSON.stringify(body) : undefined;
        // Create an options object with method, headers and bodyString
        const options = { method, headers, body: bodyString };
        // Call fetch with url and options
        const response = await fetch(url, options);
        let result = await response.json();
        // Check if response is ok
        if (response.ok) {
            // Return response as parsed object
            return JSON.parse(result as string);
        } else {
            // Throw an error with status text
            throw response.statusText;
        }
    } catch (error) {
        // Log or handle the error
        console.error(error);
        return error;
    }
}