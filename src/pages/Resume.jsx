import { motion } from 'framer-motion'
import { Download, FileText, Award, Briefcase, GraduationCap, Code2 } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { PageTransition } from '../components/layout/PageTransition'

export default function Resume() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h2 className="text-lg font-semibold text-text">Resume</h2>
            <p className="text-sm text-text-secondary mt-1">Download my full resume in PDF format</p>
          </div>
          <Button icon={<Download size={16} />} onClick={() => {}}>
            Download PDF
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-border bg-surface p-6 md:p-8 space-y-8"
        >
          <div className="flex items-center gap-3 pb-6 border-b border-border">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-xl font-bold text-white">JD</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text">John Doe</h3>
              <p className="text-sm text-text-secondary">Senior Software Engineer</p>
            </div>
          </div>

          <div className="space-y-6">
            <Section icon={Briefcase} title="Professional Summary">
              <p className="text-sm text-text-secondary leading-relaxed">
                Results-driven software engineer with 4+ years of experience building modern web applications.
                Proven track record in leading frontend architecture, mentoring teams, and delivering scalable solutions.
                Passionate about AI/ML, open source, and creating exceptional user experiences.
              </p>
            </Section>

            <Section icon={Briefcase} title="Experience">
              <div className="space-y-4">
                <ExpItem
                  role="Senior Software Engineer"
                  company="TechCorp Inc."
                  period="Jan 2024 - Present"
                  description="Leading frontend architecture and mentoring junior developers."
                />
                <ExpItem
                  role="Full Stack Developer"
                  company="StartupXYZ"
                  period="Mar 2022 - Dec 2023"
                  description="Built and maintained full-stack features for SaaS platform."
                />
                <ExpItem
                  role="Frontend Developer"
                  company="WebAgency Pro"
                  period="Jun 2021 - Feb 2022"
                  description="Created responsive web applications for diverse clients."
                />
              </div>
            </Section>

            <Section icon={GraduationCap} title="Education">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-text">B.Tech in Computer Science</p>
                    <p className="text-xs text-text-secondary">University of Technology</p>
                  </div>
                  <span className="text-xs text-text-secondary">2020 - 2024</span>
                </div>
              </div>
            </Section>

            <Section icon={Code2} title="Skills">
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'TensorFlow', 'Docker', 'AWS', 'PostgreSQL'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </Section>

            <Section icon={Award} title="Certifications">
              <div className="flex flex-wrap gap-3">
                {['AWS Solutions Architect', 'Google Cloud Engineer', 'CompTIA Security+'].map((cert) => (
                  <div
                    key={cert}
                    className="px-3 py-2 rounded-lg bg-surface-hover border border-border text-sm text-text-secondary"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}

function Section({ icon: Icon, title, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} className="text-primary" />
        <h4 className="text-sm font-semibold text-text">{title}</h4>
      </div>
      {children}
    </div>
  )
}

function ExpItem({ role, company, period, description }) {
  return (
    <div className="relative pl-4 border-l border-border">
      <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-text">{role}</p>
          <p className="text-xs text-primary">{company}</p>
        </div>
        <span className="text-xs text-text-secondary">{period}</span>
      </div>
      <p className="text-xs text-text-secondary mt-1">{description}</p>
    </div>
  )
}
