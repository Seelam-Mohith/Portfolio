import { EXPERIENCES } from '../constants'
import { Timeline } from '../components/Timeline'
import { PageTransition } from '../components/layout/PageTransition'

export default function Experience() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <Timeline experiences={EXPERIENCES} />
      </div>
    </PageTransition>
  )
}
