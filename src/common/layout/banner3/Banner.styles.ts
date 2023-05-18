import styled from '@emotion/styled'

import { breakPoints } from '../../styles/media'

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  width: 85rem;
  background-color: var(--color-gray-4);

  @media ${breakPoints.tablet} {
    width: 60rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 1rem;
  }

  p {
    margin: 1rem 0 2rem 0;
  }
  h2 {
    font-size: 2.8rem;
  }
  input {
    width: 30rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    color: var(--color-gray-1);
  }
  button {
    width: 30rem;
    padding: 0.5rem 0;
    margin-top: 1rem;
    border-radius: 2rem;
    background-color: var(--color-main);
    font-weight: bold;
  }
`
