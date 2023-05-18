import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import * as S from './Footer.styles'
import { useMoveToPage } from '../../hooks/useMoveToPage'

export default function LayoutFooter() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Footer>
      <S.Container>
        <S.Logo src="/favicon.ico" onClick={onClickMoveToPage('/')} />
        <S.FooterMenuWrapper>
          <S.FooterTitle>제품</S.FooterTitle>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
        </S.FooterMenuWrapper>
        <S.FooterMenuWrapper>
          <S.FooterTitle>지원</S.FooterTitle>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
        </S.FooterMenuWrapper>
        <S.FooterMenuWrapper>
          <S.FooterTitle>회사</S.FooterTitle>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
          <S.FooterMenu>메뉴</S.FooterMenu>
        </S.FooterMenuWrapper>
        <S.FooterMenuWrapper>
          <S.FooterTitle>팔로우</S.FooterTitle>
          <S.SNSIconWrapper>
            <S.SNSIcon>
              <FaInstagram />
            </S.SNSIcon>
            <S.SNSIcon>
              <FaFacebookF />
            </S.SNSIcon>
            <S.SNSIcon>
              <FaTwitter />
            </S.SNSIcon>

            <S.SNSIcon>
              <FaWhatsapp />
            </S.SNSIcon>
          </S.SNSIconWrapper>
        </S.FooterMenuWrapper>
      </S.Container>
      <S.Copyright>저작권</S.Copyright>
    </S.Footer>
  )
}
