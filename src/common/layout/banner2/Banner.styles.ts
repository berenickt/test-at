import styled from '@emotion/styled'

import { breakPoints } from '../../styles/media'

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30rem;

  @media ${breakPoints.tablet} {
    margin: 10rem 0;
    flex-direction: column-reverse;
  }

  @media ${breakPoints.mobile} {
    margin: 10rem 0;
    flex-direction: column-reverse;
  }
`

export const BannerImg = styled.img`
  width: 45rem;
  @media ${breakPoints.tablet} {
    width: 35rem;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 1rem;
  }
`

export const BannerTextWrapper = styled.div`
  p {
    margin: 1rem 0;
  }
  h1 {
    margin: 2rem 0;
  }
`

export const PriceTextBottom = styled.p`
  margin-top: 1rem;
`

export const BannerPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  font-size: 2rem;
`

export const AvailableColors = styled.div`
  font-size: 2rem;
`

export const SelectColor = styled.div`
  div {
    display: flex;
    gap: 1rem;
    margin: 0 0 1rem 0;
  }
`

export const WhiteColor = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  border-radius: 50%;
  cursor: pointer;
  :hover {
    border: 2px solid var(--color-black);
  }
`

export const RedColor = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: red;
  border: 1px solid var(--color-black);
  border-radius: 50%;
  cursor: pointer;
  :hover {
    border: 2px solid var(--color-black);
  }
`

export const BlackColor = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: var(--color-black);
  border: 1px solid var(--color-black);
  border-radius: 50%;
  cursor: pointer;
  :hover {
    border: 2px solid var(--color-black);
  }
`
