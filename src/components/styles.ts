import styled, { css } from 'styled-components'

const textSizes = [32, 18, 14]
const Flex = css`
  display: flex;
  justify-content: space-between;
`
const FlexVertical = css`
  ${Flex}
  flex-direction: column;
`
const FlexHorizontal = css`
  ${Flex}
`
const TextCSS = css`
  font-size: ${textSizes[2]}px;
`
export const Horizontal = styled.div`
  ${FlexHorizontal}
  ${TextCSS}
`
export const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const LeftAligned = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Center = styled.div`
  display: grid;
  place-items: center;
`
export const Vertical = styled.div`
  ${FlexVertical}
  ${TextCSS}
`
export const Name = styled.div`
  ${Flex}
  font-size: ${textSizes[0]}px;
  font-weight: bold;
  display: inline-block;
`
export const JobTitle = styled.div`
  ${Flex}
  font-size: ${textSizes[1]}px;
  font-weight: bold;
`
export const Title = styled.div`
  ${Flex}
  font-size: ${textSizes[1]}px;
  font-weight: bold;
  padding: 0px 0px 6px 0px;
`
export const Subtitle = styled.div`
  ${Flex}
  font-size: ${textSizes[2]}px;
  font-weight: bold;
`
export const Ul = styled.ul`
  margin: 0;
  padding-left: 20;
`
export const Padding = styled.div`
  padding: 6px;
`
export const BottomPadding = styled.div`
  padding: 0px 0px 6px 0px;
`
