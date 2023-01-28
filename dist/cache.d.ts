export declare class CacheService {
    private nodeCache;
    constructor();
    getOrSet<T>(key: string, fallback: () => Promise<T>, ttlSeconds: number): Promise<T>;
}
