import { FC } from 'react'
import { resume } from '../resume'
import { FindMeAt } from './findMeAt'
import { Link } from './link'
import { Name } from './name'
import {
  Horizontal,
  Padding,
  RightAligned,
  Subtitle,
  Title,
  Ul,
  BottomPadding,
} from './styles'

const { education, experience, person, projects } = resume
const { name, position, contactInfo, summary, pronouns } = person
const { email, github, linkedIn, phoneNumber } = contactInfo

const SkillGroup = ({ type, names }: { type: string; names: string[] }) => {
  return (
    <>
      <Subtitle>{type}</Subtitle>
      <Ul>{...names.map((name) => <li>{name}</li>)}</Ul>
    </>
  )
}
const RightColumn: { title: string; body: JSX.Element }[] = [
  { title: 'Summary', body: <div>{summary}</div> },
  {
    title: 'Experience',
    body: (
      <>
        {...experience.map(
          ({ dateEnd, dateStart, organization, position, summary }) => (
            <div>
              <Horizontal>
                <div>
                  <Subtitle>{position}</Subtitle>
                  <i>{organization}</i>
                </div>
                <div>
                  {dateStart === dateEnd
                    ? dateEnd
                    : `${dateStart} - ${dateEnd}`}
                </div>
              </Horizontal>
              <div>{summary}</div>
            </div>
          ),
        )}
      </>
    ),
  },
  {
    title: 'Projects',
    body: (
      <>
        {...projects.map(
          ({ date, name, stack, summary, github, liveDemo, callToAction }) => {
            const Title = github ? (
              <Link url={github} title={name} />
            ) : (
              <div>{name}</div>
            )
            const LiveDemo = liveDemo ? (
              <Link url={liveDemo} title={callToAction} rightAligned={false} />
            ) : (
              <></>
            )
            return (
              <div>
                <Horizontal>
                  <div>
                    <Subtitle>{Title}</Subtitle>
                    <div>
                      <i>{LiveDemo}</i>
                    </div>
                  </div>
                  <RightAligned>{date}</RightAligned>
                </Horizontal>
                <div>{summary}</div>
                <i>
                  <div>{stack}</div>
                </i>
              </div>
            )
          },
        )}
      </>
    ),
  },
  {
    title: 'Education',
    body: (
      <>
        {...education.map(
          ({ dateEnd, dateStart, organization, position, summary }) => (
            <div>
              <Horizontal>
                <div>
                  <Subtitle>{position}</Subtitle>
                  <i>{organization}</i>
                </div>
                <div>
                  {dateStart === dateEnd
                    ? dateEnd
                    : `${dateStart} - ${dateEnd}`}
                </div>
              </Horizontal>
              <div>{summary}</div>
            </div>
          ),
        )}
      </>
    ),
  },
]

const LeftColumn = Object.entries(resume.skills).map(([type, names]) => {
  return <SkillGroup names={names} type={type} />
})

const Section: FC<{ title: string }> = ({ title, children }) => {
  return (
    <BottomPadding>
      <Title>{title}</Title>
      <div>{children}</div>
    </BottomPadding>
  )
}

export const Body = () => {
  return (
    <>
      <div style={{ borderBottom: '2px solid black' }}>
        <Padding>
          <Horizontal>
            <Name name={name} position={position} pronouns={pronouns} />
            <FindMeAt urls={[linkedIn, github, email, phoneNumber]} />
          </Horizontal>
        </Padding>
      </div>
      <Horizontal>
        <div style={{ paddingRight: '4px', flex: 2 }}>
          <Padding>
            <Title>Skills</Title>
            {...LeftColumn.map((i) => <>{i}</>)}
          </Padding>
        </div>
        <div
          style={{
            borderLeft: '2px solid black',
            paddingLeft: '4px',
            flex: 5,
          }}>
          <Padding>
            {...RightColumn.map((i) => (
              <Section title={i.title}>{i.body}</Section>
            ))}
          </Padding>
        </div>
      </Horizontal>
    </>
  )
}
