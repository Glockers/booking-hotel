import {RouteObject} from "react-router";

type MapObject<S = any> = {
    [Key in keyof S]: () => RouteObject[]
}

export function combineRoutes<S>(object: MapObject<S>) : RouteObject[] {
    const result: RouteObject[] = [];
    for (let objectKey in object) {
        result.push(...object[objectKey]())
    }
    return result
}
