export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="mb-4 leading-relaxed">
            I'm a software engineer with a passion for creating innovative
            solutions and building products that make a difference. With
            experience across the full stack, I enjoy tackling challenging
            problems and learning new technologies.
          </p>
          <p className="mb-4 leading-relaxed">
            My journey in software engineering has been driven by curiosity and
            a love for problem-solving. I believe in writing clean, maintainable
            code and collaborating with teams to deliver exceptional results.
          </p>
          <p className="leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
      </div>
    </section>
  );
}
