import * as S from './main styles'
import { haedItem } from '../../../common/dummyData/post'
import { useMoveToPage } from '../../../common/hooks/useMoveToPage'
import { getNumberComma } from '../../../common/libraries/utils'
import { TruncatedText } from '../../../common/styles/UI/util.styles'
import { Colors } from '../../../common/styles/colors'
import { BodyText } from '../../../common/styles/globalStyles'
import DarkButton from '../../common/buttons/dark'
import { FlexColumnContainer, InfoSectionContainer } from '../../common/customComponent.styles'

export default function MainView() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Body>
      {haedItem.map(item => (
        <S.StyledCard
          key={item.id}
          cover={<S.CardThumbnailImg src={item.image} alt="포스트 썸네일 이미지" onClick={onClickMoveToPage(`/`)} />}>
          <FlexColumnContainer gap={'0.5rem'} onClick={onClickMoveToPage(`/`)}>
            <S.CardTitle>{item.title}</S.CardTitle>
            <BodyText color={Colors.gray1}>
              <TruncatedText lines={4}>{item.contents}</TruncatedText>
            </BodyText>
            <InfoSectionContainer>
              <S.Price>${getNumberComma(item.price)}</S.Price>
              <DarkButton name={'구매'} />
            </InfoSectionContainer>
          </FlexColumnContainer>
        </S.StyledCard>
      ))}
    </S.Body>
  )
}
