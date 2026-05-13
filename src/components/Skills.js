import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I've worked with a variety of technologies and tools to create amazing digital experiences. 
            Here's what I bring to the table.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-color to-secondary-color rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="text-2xl text-primary-color" />
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-color to-secondary-color rounded-full"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional <span className="gradient-text">Skills</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Responsive Design", "RESTful APIs", "GraphQL", "Webpack", "Git", "Docker",
              "AWS", "Firebase", "MongoDB", "PostgreSQL", "Redis", "Jest",
              "Cypress", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch",
              "Agile", "Scrum", "Jira", "Trello", "Slack", "Notion",
              "SEO", "Performance", "Accessibility", "Security", "Testing", "CI/CD"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-gray-50 rounded-xl p-4 text-center hover:bg-primary-color hover:text-white transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.02 }}
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-primary-color to-secondary-color rounded-2xl p-6 text-white">
              <h4 className="text-2xl font-bold mb-2">Frontend</h4>
              <p className="text-white/80">Modern web technologies and frameworks for creating responsive, interactive user interfaces.</p>
            </div>
            <div className="bg-gradient-to-r from-secondary-color to-accent-color rounded-2xl p-6 text-white">
              <h4 className="text-2xl font-bold mb-2">Backend</h4>
              <p className="text-white/80">Server-side development with focus on scalability, performance, and security.</p>
            </div>
            <div className="bg-gradient-to-r from-accent-color to-primary-color rounded-2xl p-6 text-white">
              <h4 className="text-2xl font-bold mb-2">AI/ML</h4>
              <p className="text-white/80">Machine learning algorithms and data science techniques for intelligent applications.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
