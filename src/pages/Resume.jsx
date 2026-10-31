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
              <span className="text-xl font-bold text-white">JK</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text">J Sree Karnika</h3>
              <p className="text-sm text-text-secondary">AI & ML Undergraduate | Computer Vision | NLP | Automation</p>
            </div>
          </div>

          <div className="space-y-6">
            <Section icon={Briefcase} title="Professional Summary">
              <p className="text-sm text-text-secondary leading-relaxed">
                AIML final-year undergraduate with hands-on experience building end-to-end machine learning and AI
                systems across Computer Vision, OCR/NLP, Edge AI, and Automation. Currently an AI Automation
                Engineering Intern at QuantumReady, contributing to AI-enabled messaging workflows and LLM-assisted
                features. Proficient in Python, SQL, TensorFlow, Keras, OpenCV, and applied AI development.
              </p>
            </Section>

            <Section icon={Briefcase} title="Experience">
              <div className="space-y-4">
                <ExpItem
                  role="AI Automation Engineering Intern"
                  company="QuantumReady"
                  period="Sep 2026 - Present"
                  description="Remote — contributing to AI-enabled messaging workflows, LLM-assisted features, and end-to-end testing for a microlearning platform."
                />
              </div>
            </Section>

            <Section icon={GraduationCap} title="Education">
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm font-medium text-text">B.E. in Artificial Intelligence and Machine Learning</p>
                    <p className="text-xs text-text-secondary">Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad</p>
                  </div>
                  <span className="text-xs text-text-secondary whitespace-nowrap">2023 - 2027 (Expected) · CGPA 8.62</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm font-medium text-text">Intermediate (MPC)</p>
                    <p className="text-xs text-text-secondary">Sri Chaitanya College, Hyderabad</p>
                  </div>
                  <span className="text-xs text-text-secondary whitespace-nowrap">98.2%</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm font-medium text-text">SSC</p>
                    <p className="text-xs text-text-secondary">Sri Chaitanya School, Hyderabad</p>
                  </div>
                  <span className="text-xs text-text-secondary whitespace-nowrap">CGPA 10.0</span>
                </div>
              </div>
            </Section>

            <Section icon={Code2} title="Skills">
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'TensorFlow', 'Keras', 'OpenCV', 'NLP', 'Computer Vision', 'OCR', 'LLMs', 'Power BI', 'Git', 'Raspberry Pi'].map(
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
                {['OCI AI Foundations Associate', 'IBM AI Fundamentals'].map((cert) => (
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
