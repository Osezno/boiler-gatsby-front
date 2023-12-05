// We use assets as modules with Webpack, so we need to tell Typescript what these imports mean

type SvgrComponent = React.FC<
  React.SVGProps<SVGSVGElement> & {
    /** SVG accessible name provided by `title` tag */
    title?: string
    onClick?:()=> void
  }
>

declare module '*.svg' {
  export const ReactComponent: SvgrComponent
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.webp' {
  const value: string
  export default value
}

declare module '*.woff2' {
  const value: string
  export default value
}

declare module '*.mp4' {
  const value: string
  export default value
}

declare module '*.pdf' {
  const value: string
  export default value
}

declare module '*.mp3' {
  const src: string
  export default src
}

declare module 'react-lottie-player'


