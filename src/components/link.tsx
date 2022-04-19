import { FC } from 'react'
import { Center, LeftAligned, RightAligned } from './styles'

export const Link: FC<{ url: URL; title?: string; rightAligned?: boolean }> = ({
  url,
  title,
  rightAligned = true,
}) => {
  const { host, protocol, pathname } = url
  let icon
  let string: string | undefined

  if (protocol === 'tel:') {
    string = pathname
      .split('')
      .reverse()
      .filter((char) => Number(char) !== NaN)
      .reduce((prevous: string[], current: string, index: number) => {
        if (index > 9) {
          return prevous
        }

        prevous.push(current)
        if (index === 3) {
          prevous.push('-')
        }
        if (index === 6) {
          prevous.push(') ')
        }
        if (index === 9) {
          prevous.push('(')
        }
        return prevous
      }, [])
      .reverse()
      .join('')
    icon = <i className='fa-solid fa-phone'></i>
  } else if (protocol === 'mailto:') {
    string = pathname
    icon = <i className='fa-solid fa-envelope'></i>
  } else if (protocol === 'https:') {
    string = host + pathname
    if (host === 'github.com') {
      icon = <i className='fa-brands fa-github'></i>
    } else if (host === 'linkedin.com') {
      icon = <i className='fa-brands fa-linkedin'></i>
    }
  }
  if (title) {
    string = title
  }
  if (!string || !icon) {
    icon = <i className='fa-solid fa-link'></i>
  }
  const Aligned = rightAligned ? RightAligned : LeftAligned
  return (
    <a href={url.href} target='_blank'>
      <Aligned>
        <div style={{ padding: '0px 4px 0px 0px' }}>{string}</div>
        <Center>{icon}</Center>
      </Aligned>
    </a>
  )
}
