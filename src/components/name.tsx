import { FC } from 'react'
import { JobTitle, Name as NameStyled, Vertical } from './styles'

export const Name: FC<{ name: string; position: string; pronouns: string }> = ({
  name,
  position,
  pronouns,
}) => {
  return (
    <Vertical>
      <div>
        <NameStyled>{name}</NameStyled>({pronouns})
      </div>
      <JobTitle>{position}</JobTitle>
    </Vertical>
  )
}
