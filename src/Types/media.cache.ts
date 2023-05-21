import NodeCache from 'node-cache'
export interface MediaCache {
	get<T>(key: NodeCache.Key): Promise<T>
	set(key: unknown, value: unknown, ttl?: unknown): Promise<boolean>
}