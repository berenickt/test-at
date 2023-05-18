import * as S from './Banner.styles'
import MainButton from '../../../components/common/buttons/basic'

export default function LayoutBanner2() {
  return (
    <S.Banner>
      <S.BannerTextWrapper>
        <p>Portable Wireless Speaker</p>
        <h1>Beats Pill</h1>
        <S.AvailableColors>Available Colors</S.AvailableColors>
        <S.SelectColor>
          <p>Find Your Color</p>
          <div>
            <S.WhiteColor />
            <S.RedColor />
            <S.BlackColor />
          </div>
        </S.SelectColor>
        <S.BannerPriceWrapper>
          <div>$299.95</div>
          <MainButton name={'구매'} />
        </S.BannerPriceWrapper>
        <S.PriceTextBottom>$60 Apple Music gift card with purchase of select Beats products.</S.PriceTextBottom>
      </S.BannerTextWrapper>
      <S.BannerImg src="/images/pill.png" />
    </S.Banner>
  )
}
