export interface IDaliDataConsumption {
    beacon: number;
    css: number;
    fetch: number;
    img: number;
    other: number;
    script: number;
    total: number;
    xmlhttprequest: number;
}
export interface IDaliNavigationTiming {
    fetchTime?: number;
    workerTime?: number;
    totalTime?: number;
    downloadTime?: number;
    timeToFirstByte?: number;
    headerSize?: number;
    dnsLookupTime?: number;
    tcpTime?: number;
    whiteTime?: number;
    domTime?: number;
    loadTime?: number;
    parseDomTime?: number;
}
export declare type EffectiveConnectionType = '2g' | '3g' | '4g' | '5g' | 'slow-2g' | 'lte';
export interface IDaliNetworkInformation {
    downlink?: number;
    effectiveType?: EffectiveConnectionType;
    onchange?: () => void;
    rtt?: number;
    saveData?: boolean;
}
export declare type IDaliData = number | IDaliNavigationTiming | IDaliNetworkInformation;
export interface INavigatorInfo {
    deviceMemory?: number;
    hardwareConcurrency?: number;
    isLowEndDevice?: boolean;
    isLowEndExperience?: boolean;
    serviceWorkerStatus?: 'controlled' | 'supported' | 'unsupported';
}
export declare type IVitalsScore = 'good' | 'needsImprovement' | 'poor' | null;
export interface IAnalyticsTrackerOptions {
    metricName: string;
    data: IDaliData;
    eventProperties: object;
    navigatorInformation: INavigatorInfo;
    vitalsScore: IVitalsScore;
}
export interface IDaliOptions {
    captureError?: boolean;
    resourceTiming?: boolean;
    elementTiming?: boolean;
    isResourceTiming?: boolean;
    analyticsTracker?: (options: IAnalyticsTrackerOptions) => void;
    maxMeasureTime?: number;
    logUrl?: string;
}
export interface IReportData {
    sendToAnalytics(level: AskPriority, body: string): void;
}
/**
 * @param isResourceTiming - 是否开启资源数据
 * @param isElementTiming - 是否开启性能数据
 * @param analyticsTracker - 最大请求时间
 * @param analyticsTracker - void方法参数IAnalyticsTrackerOptions
 * @param maxTime - 自定义分析工具
 * @interface 系统配置接口
 * @public
 */
export interface IDaliConfig {
    reportData: IReportData;
    isResourceTiming: boolean;
    isElementTiming: boolean;
    analyticsTracker?: (options: IAnalyticsTrackerOptions) => void;
    maxTime: number;
}
export interface IPerfObservers {
    [measureName: string]: any;
}
export declare type IPerformanceObserverType = 'first-input' | 'largest-contentful-paint' | 'layout-shift' | 'longtask' | 'measure' | 'navigation' | 'paint' | 'element' | 'resource';
export declare type IPerformanceEntryInitiatorType = 'beacon' | 'css' | 'fetch' | 'img' | 'other' | 'script' | 'xmlhttprequest';
export declare interface IPerformanceEntry {
    decodedBodySize?: number;
    duration: number;
    entryType: IPerformanceObserverType;
    initiatorType?: IPerformanceEntryInitiatorType;
    loadTime: number;
    name: string;
    renderTime: number;
    startTime: number;
    hadRecentInput?: boolean;
    value?: number;
    identifier?: string;
}
export interface IMetricMap {
    [measureName: string]: boolean;
}
export interface PerformanceEventTiming extends PerformanceEntry {
    processingStart: DOMHighResTimeStamp;
    target?: Node;
}
export declare enum AskPriority {
    URGENT = 1,
    IDLE = 2
}
//# sourceMappingURL=types.d.ts.map