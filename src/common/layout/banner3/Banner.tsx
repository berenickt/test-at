import * as S from './Banner.styles'

export default function LayoutBanner3() {
  return (
    <S.Banner>
      <S.Container>
        <h2>Hear it first</h2>
        <p>Get updates on product drops, collaborations and all things Beats.</p>
        <input placeholder="Enter your email" />
        <button>Sign up</button>
      </S.Container>
    </S.Banner>
  )
}
