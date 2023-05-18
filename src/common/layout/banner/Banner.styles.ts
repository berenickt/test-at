import styled from '@emotion/styled'

import { breakPoints } from '../../styles/media'

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--color-white);
  background-color: var(--color-navy);
  margin-bottom: 8rem;

  @media ${breakPoints.tablet} {
    flex-direction: column;
  }

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`

export const BannerImg = styled.img`
  width: 45rem;
  margin-bottom: -8rem;
  @media ${breakPoints.tablet} {
    width: auto;
    height: 28rem;
    margin-bottom: 0;
  }

  @media ${breakPoints.mobile} {
    width: auto;
    height: 20rem;
    margin-bottom: 0;
  }
`

export const BannerTextWrapper = styled.div`
  background-color: var(--color-navy);
  color: var(--color-white);
  @media ${breakPoints.tablet} {
    text-align: center;
  }

  @media ${breakPoints.mobile} {
    text-align: center;
  }

  p {
    margin: 1rem 0;
  }
  h1 {
    margin: 2rem 0;
  }
`

export const PriceTextBottom = styled.p`
  margin-top: 1rem;
  color: var(--color-main);
`

export const BannerPriceWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  font-size: 2rem;

  @media ${breakPoints.tablet} {
    justify-content: flex-start;
  }

  @media ${breakPoints.mobile} {
    margin-left: 2rem;
    justify-content: flex-start;
  }
`
