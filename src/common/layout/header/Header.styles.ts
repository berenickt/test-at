import styled from '@emotion/styled'

import { breakPoints } from '../../styles/media'
import { UserOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  z-index: 1;
  background-color: var(--color-navy);
  color: var(--color-white);
  position: fixed;
  opacity: 0.8;

  @media ${breakPoints.tablet} {
    padding: 1rem;
  }

  @media ${breakPoints.mobile} {
    padding: 1rem;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 83rem;
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    width: 60rem;
    padding: 0 1rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0 1rem;
  }
`

// **** 헤더 왼쪽
export const Logo = styled.img`
  width: 2.8rem;
  cursor: pointer;
`

// **** 헤더 중간
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 27rem;
  font-size: 1rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`

// **** 헤더 오른쪽
export const LoginMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`

export const UserIcon = styled(UserOutlined)`
  padding: 0 0.5rem;
  font-size: 1.5rem;
  color: var(--color-primary);
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const SearchIcon = styled(SearchOutlined)`
  padding: 0 0.5rem;
  font-size: 1.5rem;
  color: var(--color-primary);
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const CartIcon = styled(ShoppingCartOutlined)`
  padding: 0 0.5rem;
  font-size: 1.5rem;
  color: var(--color-primary);
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: none;
  }
`

export const MenuIcon = styled(MenuOutlined)`
  padding: 0 0.5rem;
  font-size: 1.5rem;
  color: var(--color-primary);
  cursor: pointer;
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
  }
`

export const Side = styled.div`
  height: 100%;
  width: 55%;
  z-index: 999;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`
