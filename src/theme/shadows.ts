


export type Shadows = {
  [size: string]: string
}

export function createShadows(): Shadows {
  return {
    default:`0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)`,
    xs: `0 0 1px #f6f6ff,
    0 0 1px 1px #f6f6ff
    `,
    sm: `0 1px 8px 0 #f6f6ff, 
    0 1px 3px 0 #f6f6ff,
    0 2px 3px -2px #f6f6ff`,
    md: `0 1px 10px 0 #f6f6ff, 
    0 6px 12px 0 #f6f6ff,
    0 6px 15px -2px #f6f6ff`,
    lg: `0 1px 10px 0 #f6f6ff, 
    0 15px 22px 0 #f6f6ff,
    0 15px 25px -2px #f6f6ff`,
    xl: `0 1px 10px 0 #f6f6ff, 
    0 25px 35px 0 #f6f6ff,
    0 25px 40px -2px #f6f6ff`
  }
}

export const shadows = createShadows()