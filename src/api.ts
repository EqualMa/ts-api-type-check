// re-export from internal implementations
// http://www.typescriptlang.org/docs/handbook/modules.html#re-exports
export { VERSION } from './some-sub-module/version'
export function hello(name: string) {
    return 'hello ' + name
}

// no longer module.exports = {...}
