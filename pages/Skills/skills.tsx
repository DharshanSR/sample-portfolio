import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>

        {/* Programming Languages */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Programming Languages</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg">JavaScript</li>
            <li className="text-lg">TypeScript</li>
            <li className="text-lg">Python</li>
            <li className="text-lg">Java</li>
            <li className="text-lg">C++</li>
            <li className="text-lg">C#</li>
            <li className="text-lg">Ruby</li>
            <li className="text-lg">Swift</li>
            <li className="text-lg">Kotlin</li>
            <li className="text-lg">PHP</li>
          </ul>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Tools & Technologies</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg">Next.js</li>
            <li className="text-lg">React</li>
            <li className="text-lg">Tailwind CSS</li>
            <li className="text-lg">Node.js</li>
            <li className="text-lg">Express.js</li>
            <li className="text-lg">GraphQL</li>
            <li className="text-lg">Firebase</li>
            <li className="text-lg">AWS</li>
            <li className="text-lg">Docker</li>
            <li className="text-lg">Kubernetes</li>
            <li className="text-lg">Git & GitHub</li>
            <li className="text-lg">CI/CD (Jenkins, GitLab CI)</li>
            <li className="text-lg">Redis</li>
            <li className="text-lg">PostgreSQL</li>
            <li className="text-lg">MongoDB</li>
            <li className="text-lg">Elasticsearch</li>
            <li className="text-lg">GraphQL</li>
            <li className="text-lg">Apollo</li>
          </ul>
        </div>

        {/* Design Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Design Skills</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg">UI/UX Design</li>
            <li className="text-lg">Adobe Photoshop</li>
            <li className="text-lg">Adobe Illustrator</li>
            <li className="text-lg">Figma</li>
            <li className="text-lg">Sketch</li>
            <li className="text-lg">InVision</li>
            <li className="text-lg">Wireframing & Prototyping</li>
            <li className="text-lg">Responsive Design</li>
            <li className="text-lg">Interaction Design</li>
            <li className="text-lg">Design Systems</li>
          </ul>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Other Skills</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg">Agile & Scrum Methodologies</li>
            <li className="text-lg">Problem-Solving</li>
            <li className="text-lg">Project Management</li>
            <li className="text-lg">Technical Writing</li>
            <li className="text-lg">Public Speaking</li>
            <li className="text-lg">Team Collaboration</li>
            <li className="text-lg">Leadership</li>
            <li className="text-lg">Data Analysis</li>
            <li className="text-lg">Machine Learning</li>
            <li className="text-lg">API Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
