type HttpMethod =
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'PATCH'
    | 'DELETE'
    | 'OPTIONS'
    | 'HEAD'

type RequestBody = BodyInit | Record<string, any> | null | undefined

export default function useApi() {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiUrl + '/minha-grana-api'

    async function request<T = unknown>(
        path: string,
        method: HttpMethod,
        requestData?: RequestBody | Record<string, unknown>
    ): Promise<T> {
        if (!baseURL) {
            throw new Error('API_URL is not configured.')
        }

        const upperMethod = method.toUpperCase() as HttpMethod
        const lowerMethod = upperMethod.toLowerCase() as Lowercase<HttpMethod>

        return await $fetch<T>(path, {
            baseURL,
            method: lowerMethod,
            ...(upperMethod === 'GET'
                ? { query: requestData as Record<string, unknown> }
                : { body: requestData as RequestBody })
        })
    }

    return {
        request
    }
}
