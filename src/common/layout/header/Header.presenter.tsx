import { useState } from 'react'

import * as S from './Header.styles'
import { useMoveToPage } from '../../hooks/useMoveToPage'

export default function LayoutHeaderUI() {
  const { onClickMoveToPage } = useMoveToPage()

  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  const toggleSide = () => setIsOpen(prev => !prev)

  return (
    <S.Header>
      <S.Container>
        <S.Logo src="/favicon.ico" onClick={onClickMoveToPage('/')} />
        <S.Nav>
          <div>메뉴</div>
          <div>메뉴</div>
          <div>메뉴</div>
          <div>메뉴</div>
        </S.Nav>
        <S.LoginMenu>
          <S.UserIcon />
          <S.SearchIcon />
          <S.CartIcon />
          <S.MenuIcon onClick={toggleSide} />
        </S.LoginMenu>
      </S.Container>
      {isOpen && (
        <S.Side>
          asdasd
          <div>ddd</div>
        </S.Side>
      )}
    </S.Header>
  )
}
