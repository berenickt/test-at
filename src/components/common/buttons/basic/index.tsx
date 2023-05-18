import styled from '@emotion/styled'
import { Button } from 'antd'

import { useMoveToPage } from '../../../../common/hooks/useMoveToPage'

const MyButton = styled(Button)`
  display: flex;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: bold;
  color: var(--color-black);
  background-color: var(--color-main);
`

export default function MainButton(props: any) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <MyButton type={props.type} onClick={onClickMoveToPage(`${props.movePage}`)}>
      {props.name}
    </MyButton>
  )
}
