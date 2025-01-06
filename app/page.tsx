import ExperienceCard, { ExperienceList } from "@/components/ExperienceCard";
import InfoCard from "@/components/InfoCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="flex flex-col space-y-20 items-center">
      <div className="fixed flex space-x-3 items-center bg-zinc-900 p-3 rounded-lg">
        <img src="stairway.jpg" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-bold">Koriel Lopez</p>
          <p className="text-zinc-400">Software Engineer</p>
        </div>
      </div>
      <InfoCard
        id="About Me"
        title="About Me"
        subtitle="“It's hard to talk about yourself.” - Sugar Ray Leonard"
        pic="car.jpg"
        reverse={false}
        className="w-3/4"
      >
        <p>
          Was born and raised on Galveston Island, Texas into a Hispanic
          household while learning to be bilingual. Not much of my grade school
          education was unique, but loved being a technician in theatre. My
          loving family gave me the opportunity to get me in higher education,
          earning my Bachelors in Computer Science from UTRGV.
        </p>
        <p>
          Gaming of all sorts is how I like to spend my free time; with my
          bigger interests being Magic The Gathering, Kickstarter board games to
          discover, and some RPGs or platformers on the Switch. Other projects I
          spend on my free time are researching and working on cars that can
          race. Discipline, respect, and leadership are qualities I've picked up
          while I was a Martial Arts instructor for 5 years.
        </p>
        <p>
          In my future, I plan on getting years of industry experience as a
          Software Engineer. Expanding my skills and keeping up with new
          technology is what will empower me into a Full Stack position.
          Including a DevOps culture and techniques, I believe to be able to fit
          into an software architectural role. After making an impact in
          industry, I want to make an impact in young adult lives by becoming a
          professor at the undergrad level. Never having guidance when I was an
          first generation undergrad made it tough navigating life's bigger
          decisions, which is why I want to provide that guidance to those in a
          similar position.
        </p>
      </InfoCard>
      <InfoCard
        id="Experience"
        title="Experience"
        subtitle='"We are not what we know but what we are willing to learn." - Mary Catherine Bateson'
        pic="fly.jpg"
        reverse={false}
        className="w-3/4"
      >
        <ExperienceCard
          position="Software Engineer Intern"
          where="Pacific Northwest National Laboratory"
          when="Aug 2023 - Nov 2024"
          reverse={false}
          skills={[
            "React",
            "API Design",
            "App Testing",
            "Version Control",
            "JavaScript",
            "TypeScript",
            "CI/CD Pipelines",
            "Docker",
            "Linux",
          ]}
        >
          <ExperienceList
            title="Data Next"
            items={[
              "created site components for the frontend using ReactJS",
              "made an easy to use control center for researchers to manage projects and data",
              "designed RESTful API using OpenAPI Specification in Python",
              "connected these two components together, making a functional site for researchers and scientists",
            ]}
          />
          <ExperienceList
            title="DataHub"
            items={[
              "used Cypress with JavaScript to create unit and integration tests for site quality assurance",
            ]}
          />
          <ExperienceList
            title="Other"
            items={[
              "learned how to work with Ansible to manage developer sites",
              "created pipelines in GitLab to test and create GitLab pages for web developing",
              "used tools like Insomnia, Docker, and WSL for projects",
            ]}
          />
        </ExperienceCard>
        <ExperienceCard
          position="School of Medicine - Work Study"
          where="University of Texas Rio Grande Valley"
          when="Jun 2024 - Aug 2024"
          reverse={false}
          skills={[
            "UX/UI Design",
            "API Data Fetching",
            "Reverse Engineering",
            "Python",
            "Log Generation",
            "AGILE Principles",
          ]}
        >
          <p>
            Here my main job was to assist in making sure there weren't any
            errors or missing information within the learning outcomes database.
            When this incorrect information is found, it would be my job to find
            it within course syllabi to correct it.
          </p>
          <p>
            Now the problem I encountered was how tedious and repetitive
            accomplishing the above was. Every time it would take at least 3-4
            clicks to even check if something was missing alone. Imagine doing
            this 100 times more just for a single course or even a module, that
            amount of time adds up.
          </p>
          <p>
            To solve this, I researched into One45 (the database software the
            school was using) and found an API I could hit. Once getting access
            from our admin, I investigated the structure of our data to map out
            their relationships and how I can leverage the API to reach them.
            The end result of this investigation resulted in a python script
            that could generate gap reports. To make this script accessible to
            users not familiar with programming, I created a UI and packaged it
            as an executable. Throughout the UI design process and creating its
            functionality, I consulted my clients in short sprints to ensure it
            would be what they needed to improve efficiency.
          </p>
        </ExperienceCard>
        <ExperienceCard
          position="Web Development - Teacher Assistant"
          where="University of Texas Rio Grande Valley"
          when="Jan 2025 - May 2025"
          reverse={false}
          skills={[]}
        >
          <p className="text-xl italic text-zinc-400">
            ~ CURRENTLY IN PROGRESS ~
          </p>
        </ExperienceCard>
        <ExperienceCard
          position="Physics - Supplemental Instructor"
          where="Galveston College - STEM Honors"
          when="Nov 2022 - Aug 2023"
          reverse={false}
          skills={["Communication", "Problem Solving", "Teamwork"]}
        >
          <ExperienceList
            items={[
              "Broke down problems into understandable parts",
              "Kept up with student's content by meeting with their professor regularly",
              "Considered student availability to accommodate meeting times",
            ]}
          />
        </ExperienceCard>
        <ExperienceCard
          position="Camp Counselor - Engineering"
          where="Galveston College - Summer Kids Camp"
          when="Jun 2023 - Jul 2023"
          reverse={false}
          skills={["Curriculum Planning", "Project Research", "Management"]}
        >
          <ExperienceList
            items={[
              "Taught all ages of kids what it means to be an engineer and what paths exist",
              "We participated in planned projects for fun and to learn",
              "Managed a classroom on my own for a 2 week program",
            ]}
          />
        </ExperienceCard>
        <ExperienceCard
          position="Customer Service Representative"
          where="Galveston College - Bookstore"
          when="Jan 2023 - Aug 2023"
          reverse={false}
          skills={[
            "Customer Service",
            "Communication",
            "Organization",
            "Problem Solving",
            "Independence",
            "Teamwork",
          ]}
        >
          <ExperienceList
            items={[
              "Helped students with their needs",
              "Helped cover shifts when needed",
              "Cleaned store regularly",
              "Cashiered on weekends",
              "Kept up with stock",
            ]}
          />
        </ExperienceCard>
        <ExperienceCard
          position="Customer Service Representative"
          where="Circle K"
          when="Jan 2022 - Jul 2022"
          reverse={false}
          skills={[
            "Customer Service",
            "Communication",
            "Organization",
            "Problem Solving",
            "Independence",
            "Teamwork",
          ]}
        >
          <ExperienceList
            items={[
              "Helped cover shifts when needed",
              "Entrusted with store alone",
              "Cleaned store regularly",
              "Cashiered on weekends",
              "Kept up with stock",
            ]}
          />
        </ExperienceCard>
      </InfoCard>
      <InfoCard
        id="Projects"
        title="Projects"
        subtitle="subtitle"
        pic="pi.jpg"
        reverse={false}
        className="w-3/4"
      >
        <ExperienceList
          items={[
            "Pi NAS",
            "Portfolio Website",
            "Minesweeper",
            "One45 Reporter",
            "Discord Bot",
            "Web Dev Projects",
            "Software Engineering Projects",
            "Senior Project",
          ]}
        />
        <ProjectCard
          title="Pi VPN"
          purp="A Virtual Private Network that helps connect to my devices from anywhere. It also provides me a quick and secure way to be on public WiFi through encryption and sending packets using UDP"
          impl="Using a Raspberry Pi board, I installed PiVPN with a Wireguard configuration. After this, I just needed to keep a consistent IP address and port forward the server through my ISP's router. Once I've shared keys with trusted devices, I could now connect to my home lab from anywhere."
          learn={["Linux", "SSH", "Router Config"]}
        />
      </InfoCard>
      <InfoCard
        id="Contact Me"
        title="Contact Me"
        subtitle='"Great communication begins with connection." - Oprah'
        pic="grad.jpg"
        reverse={false}
        className="w-3/4"
      >
        <div className="w-fit flex outline">
          <div className="w-fit place-items-end p-3 space-y-3 font-bold">
            <p>Email</p>
            <p>Phone</p>
            <p>LinkedIn</p>
            <p>GitHub</p>
          </div>
          <div className="w-fit place-items-start p-3 space-y-3">
            <p>koriellopez03@gmail.com</p>
            <p>+1 (409) 354-7518</p>
            <p>
              <a
                className="text-yellow-300 hover:text-white hover:decoration-yellow-200 hover:underline"
                href="https://www.linkedin.com/in/koriel-lopez/"
                target="_blank"
              >
                koriel-lopez
              </a>
            </p>
            <p>
              <a
                className="text-yellow-300 hover:text-white hover:decoration-yellow-200 hover:underline"
                href="https://www.github.com/lopezkor000"
                target="_blank"
              >
                lopezkor000
              </a>
            </p>
          </div>
        </div>
      </InfoCard>
    </main>
  );
}
