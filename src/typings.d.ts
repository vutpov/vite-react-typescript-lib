/// <reference types="vite-plugin-svgr/client" />

/**
 * Default LESS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.less' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}
