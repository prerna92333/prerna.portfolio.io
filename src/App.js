import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="p-6 space-y-16 max-w-5xl mx-auto">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold">Prerna Reddy Ganga</h1>
        <p className="text-lg">
          Graduate Student | AI & Software Development | Machine Learning
        </p>
        <p className="text-sm text-gray-600">
          <a href="mailto:gprernareddy@gmail.com">gprernareddy@gmail.com</a> • +1 (716) 908-6684 • 
          <a href="https://linkedin.com/in/prerna-reddy-g-612b58344/" className="text-blue-600 underline" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </motion.div>

      <motion.section className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Research Intern</strong> – University of South Alabama
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>AI cybersecurity models (↑ detection 20%)</li>
              <li>Smart filters (↓ false alerts 15%)</li>
              <li>Efficiency +30%</li>
            </ul>
          </li>
          <li>
            <strong>Intern @ Accenture</strong>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>SQL optimized, performance ↑ 35%</li>
              <li>Workflow automation ↓ 40% manual effort</li>
            </ul>
          </li>
        </ul>
      </motion.section>

      <motion.section className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>M.S. Data Science – UB SUNY</strong> | GPA: 3.7 | Top 6%</li>
          <li><strong>B.S. CSE – Osmania University</strong> | GPA: 8.0/10</li>
        </ul>
      </motion.section>

      <motion.section className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
          <span>Python</span><span>SQL</span><span>Java</span><span>C++</span><span>PostgreSQL</span>
          <span>TensorFlow</span><span>AWS</span><span>GCP</span><span>Docker</span><span>ML/NLP</span>
        </div>
      </motion.section>

      <motion.section className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-semibold">Achievements</h2>
        <ul className="list-disc ml-5 text-sm text-gray-700">
          <li>AI Healthcare Model (IEEE): +15% accuracy</li>
          <li>Aviation Paper Published (Taylor & Francis)</li>
          <li>Led AI community impact for 500+ learners</li>
        </ul>
      </motion.section>
    </div>
  );
}
