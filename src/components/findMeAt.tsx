import { FC } from 'react'
import { Link } from './link'

export const FindMeAt: FC<{ urls: URL[] }> = ({ urls }) => {
  return <div>{...urls.map((url) => <Link url={url} />)}</div>
}
