export interface FigmaNode {
  id: string
  name: string
  type: string
  children?: FigmaNode[]
}

export interface FigmaStyle {
  spacing?: {
    padding?: string
    margin?: string
  }
  colors?: {
    fill?: string
    stroke?: string
    background?: string
    text?: string
  }
  typography?: {
    fontSize?: string
    lineHeight?: string
    fontFamily?: string
  }
  layout?: {
    borderRadius?: string
    boxShadow?: string
  }
}

export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}
