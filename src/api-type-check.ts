// in fact this module doesn't exist in runtime
import * as defs from '../api'

type AssertExtends<T extends R, R> = [T, R]

// correct api
import * as apiImpl from './api'
export type TypeCheckForApi = AssertExtends<typeof apiImpl, typeof defs>;

// bad api (hello not compatible)
import * as badApi from './api-bad'
export type TypeCheckForBadApi = AssertExtends<typeof badApi, typeof defs>;

// api missing VERSION
import * as missingApi from './api-missing'
export type TypeCheckForMissingApi = AssertExtends<typeof missingApi, typeof defs>;
