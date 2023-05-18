import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = css`
  :root {
    --color-main: #ffc700;
    --color-navy: #2b2836;
    --color-black: #17100a;
    --color-white: #ffffff;
    --color-gray-1: #7e7872;
    --color-gray-2: #a8a8a8;
    --color-gray-3: #d9d9d9;
    --color-gray-4: #f5f5f5;
    --color-red: #dd5656;

    --base-size: 16px;
    --font-family: 'Pretendard', sans-serif;
  }
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, 
  acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, 
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, 
  tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, 
  footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, input, textarea, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  html {
    font-size: var(--base-size);
    font-family: var(--font-family);
  }

  body {
    color: var(--color-black);
    background: var(--color-white);
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    outline: none;
    color: inherit;
    &:active,
    &:hover {
      text-decoration: none;
      color: inherit;
      outline: 0;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: none;
    padding: 0;
    user-select: none;
    cursor: pointer;
    white-space: nowrap;
    letter-spacing: inherit;
    font: inherit;
    color: inherit;
  }

  input {
    outline: none;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
  }

  h3 {
    font-size: 26px;
    font-weight: 700;
  }

  h4 {
    font-size: 22px;
    font-weight: 700;
  }

  h5 {
    font-size: 22px;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`

export const BodyTextSm = styled.span<{ color?: string; weight?: number }>`
  font-size: 12px;
  font-weight: ${props => props.weight};
  color: ${props => props.color};
`

export const BodyText = styled.span<{ color?: string; weight?: number }>`
  font-size: 14px;
  font-weight: ${props => props.weight};
  color: ${props => props.color};
`

export const BodyTextLg = styled.span<{ color?: string; weight?: number }>`
  font-size: 16px;
  font-weight: ${props => (props.weight ? props.weight : 600)};
  color: ${props => props.color};
`
