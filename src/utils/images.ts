/**
 * As imagens do layout são geradas em SVG (data URI) para que o projeto
 * funcione sem depender de assets externos. Para usar as fotos exportadas
 * do Figma, basta trocar os valores de `thumb`, `cover` e `image` em
 * `src/data/restaurants.ts` pelos caminhos dos arquivos importados.
 */
type Palette = [string, string]

export const palettes: Record<string, Palette> = {
  japonesa: ['#F4A28C', '#C74B4B'],
  italiana: ['#F0B27A', '#B03A48'],
  asiatica: ['#F2C078', '#B9522F'],
  francesa: ['#EFA6A6', '#A63D5F'],
  brasileira: ['#E88D5A', '#8E3B2E'],
  arabe: ['#F1BE7C', '#9C4A2F']
}

const encode = (svg: string) =>
  `data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}`

const foodSvg = (emoji: string, [from, to]: Palette, width: number, height: number) => {
  const size = Math.min(width, height)

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${from}" />
          <stop offset="1" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <circle cx="${width * 0.18}" cy="${height * 0.12}" r="${size * 0.5}" fill="#FFFFFF" fill-opacity="0.08" />
      <circle cx="${width * 0.86}" cy="${height * 0.92}" r="${size * 0.45}" fill="#000000" fill-opacity="0.08" />
      <circle cx="${width / 2}" cy="${height / 2}" r="${size * 0.33}" fill="#FFFFFF" fill-opacity="0.16" />
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="${size * 0.38}">${emoji}</text>
    </svg>
  `
}

export const foodImage = (
  emoji: string,
  palette: Palette,
  width = 304,
  height = 167
) => encode(foodSvg(emoji, palette, width, height))

/** Textura usada como fundo do cabeçalho da home. */
export const headerPattern = () =>
  encode(`
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
      <rect width="240" height="240" fill="#FFEBD9" />
      <g font-size="34" opacity="0.16">
        <text x="18" y="60">🍕</text>
        <text x="120" y="42">🍣</text>
        <text x="70" y="130">🍜</text>
        <text x="170" y="120">🥗</text>
        <text x="20" y="205">🍔</text>
        <text x="130" y="220">🍰</text>
      </g>
    </svg>
  `)
