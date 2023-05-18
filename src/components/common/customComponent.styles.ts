import styled from '@emotion/styled'
import { Button } from 'antd'

import { Colors } from '../../common/styles/colors'

// Ant design Overrides
export const MyButton = styled(Button)`
  padding: 1rem;
  display: flex;
  border-radius: 1rem;
`

// Customization styles
export const FlexColumnContainer = styled.div<{ gap: string }>`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap};
`

export const InfoSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  img {
    height: 1.5rem;
  }
`
export const ProfileContainer = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const ProfileTextDataContainer = styled.span`
  display: flex;
  flex-direction: column;
`

export const ReactionsContainer = styled.span`
  display: flex;
  gap: 1rem;
  color: ${Colors.gray1};
`

export const ReactionContainer = styled.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`

export const PriceContainer = styled.span`
  word-break: keep-all;
`
