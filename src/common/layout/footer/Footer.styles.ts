import styled from '@emotion/styled'

import { breakPoints } from '../../styles/media'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 20rem;
  background-color: var(--color-navy);
  color: var(--color-white);

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
  width: 83rem;
  padding-top: 2rem;

  @media ${breakPoints.tablet} {
    align-items: center;
    flex-direction: column;
    width: 60rem;
  }

  @media ${breakPoints.mobile} {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`

export const Logo = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
`

// **** 푸터
export const FooterMenuWrapper = styled.div`
  @media ${breakPoints.tablet} {
    align-items: center;
    flex-direction: column;
    width: 60rem;
  }

  @media ${breakPoints.mobile} {
    align-items: center;
    flex-direction: column;
    margin-left: 2rem;
    width: 100%;
  }
`

export const FooterTitle = styled.div`
  margin: 0.7rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`

export const FooterMenu = styled.div`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: var(--color-gray-2);
`

export const SNSIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`

export const SNSIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  color: var(--color-black);
  background-color: var(--color-white);
`

export const Copyright = styled.div`
  margin: 2rem;
  color: var(--color-gray-2);
`
