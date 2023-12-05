export const breakpoints = {
  xs: '320px',
  sm: '567px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
}

export type BreakPointType = typeof breakpoints;

const generateMediaQueries = (points: BreakPointType): BreakPointType & { hover: string } => ({
  xs: `@media (min-width: ${points.xs})`,
  sm: `@media (min-width: ${points.sm})`,
  md: `@media (min-width: ${points.md})`,
  lg: `@media (min-width: ${points.lg})`,
  xl: `@media (min-width: ${points.xl})`,
  hover: '@media (hover: hover)'
})


export type MediaQueryTypes = BreakPointType & {
  hover: string;
  cb: () => string;
}

const cbstring = () => ''

const media = (points: BreakPointType, cb = cbstring): BreakPointType & { hover: string } => ({
  xs: `@media (min-width: ${points.xs}) { ${ cb } }`,
  sm: `@media (min-width: ${points.sm})`,
  md: `@media (min-width: ${points.md})`,
  lg: `@media (min-width: ${points.lg})`,
  xl: `@media (min-width: ${points.xl})`,
  hover: '@media (hover: hover)'
})


export { generateMediaQueries }
