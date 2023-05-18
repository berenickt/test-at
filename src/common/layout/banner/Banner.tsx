import MainButton from '../../../components/common/buttons/basic'
import * as S from './Banner.styles'

export default function LayoutBanner() {
  return (
    <S.Banner>
      <S.BannerImg src="/images/head.png" />
      <S.BannerTextWrapper>
        <p>Beats Studio3 Wireless</p>
        <h1>Experience your music like never before.</h1>
        <S.BannerPriceWrapper>
          <div>$299.95</div>
          <MainButton name={'구매'} />
        </S.BannerPriceWrapper>
        <S.PriceTextBottom>$60 Apple Music gift card with purchase of select Beats products.</S.PriceTextBottom>
      </S.BannerTextWrapper>
    </S.Banner>
  )
}
