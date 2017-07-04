const registry = {}

export const registerDep = name => obj => registry[name] = obj

export const getDep = name => registry[name]

export default wrapper => (...args) => wrapper(registry)(...args)
