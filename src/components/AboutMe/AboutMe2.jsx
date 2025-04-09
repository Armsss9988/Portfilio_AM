const AboutMe2 = ({ dataSource }) => {
  return (
    <section
      id="about"
      className="py-8 px-6 sm:px-10 md:px-10 lg:px-20 bg-[var(--color-background)] text-[var(--color-foreground)]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[var(--color-primary)] mb-6">
            About Me
          </h2>
          <p className="text-lg leading-relaxed">
            I'm a creative and detail-oriented{" "}
            <span className="text-[var(--color-primary)] font-semibold">
              Frontend Developer
            </span> {" "}
            about to graduate with a strong foundation in software development
            and a proactive mindset. Continuously sharpened skills in web
            technologies beyond the academic program through self-study and
            real-world practice. I’m a fast learner, adaptive, and take
            initiative in team environments. I’m committed to long-term growth,
            both personally and professionally, and aim to contribute
            meaningfully to the success of the company I grow with.
          </p>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-wide text-[var(--color-primary)] mb-6">
            My Tech Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {dataSource.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] hover:shadow-[0_0_15px] hover:shadow-[var(--color-primary)] transition duration-300"
              >
                <div style={{ color: tech.color }} className="text-3xl mb-2">
                  {tech.icon}
                </div>
                <p className="text-xs text-center">{tech.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe2;
