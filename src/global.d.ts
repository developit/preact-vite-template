// CSS Modules
type Mapping = Record<string, string>;
declare module '*.module.css' {
	const mapping: Mapping;
	export default mapping;
}

// import.meta.env
declare interface ImportMeta {
	env: Record<string, string>;
}
