import Experiences from "@/components/Experiences";
import { GithubProjects } from "@/components/GithubProjects";
import InfoCard from "@/components/InfoCard";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col space-y-20 items-center">
      <div className="fixed flex space-x-3 items-center bg-zinc-900 p-3 rounded-lg">
        <img src="stairway.webp" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-bold">Koriel Lopez</p>
          <p className="text-zinc-400">Software Engineer</p>
        </div>
      </div>
      <InfoCard
        id="About Me"
        title="About Me"
        subtitle="“It's hard to talk about yourself.” - Sugar Ray Leonard"
        pic="car.webp"
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
        pic="fly.webp"
      >
        <div>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="text-yellow-300 hover:text-white"
          >
            PDF Resume
          </Link>
        </div>
        <Experiences />
      </InfoCard>
      <InfoCard
        id="Projects"
        title="Projects"
        subtitle='"How does a project get to be a year late? One day at a time." - Fred Brooks'
        pic="pi.webp"
      >
        {/* <ExperienceList
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
        /> */}
        <GithubProjects />
        <ProjectCard
          title="NAS"
          purp="Keep personal device storages clear while sharing files. This helps keep projects and important files accessible from anywhere when working with my Pi VPN."
          impl="This project uses Samba to manage a 1TB HDD attached to my Pi. With this protocol I can expose this port to my home network to access this storage from any device."
          learn={["Linux", "SSH", "SMB"]}
        />
        <ProjectCard
          title="Pi VPN"
          purp="A Virtual Private Network that helps connect to my devices from anywhere. It also provides me a quick and secure way to be on public WiFi through encryption and sending packets using UDP"
          impl="Using a Raspberry Pi board, I installed PiVPN with a Wireguard configuration. After this, I just needed to keep a consistent IP address and port forward the server through my ISP's router. Once I've shared keys with trusted devices, I could now connect to my home lab from anywhere."
          learn={["Linux", "SSH", "Router Config"]}
        />
        <p className="text-xl italic text-zinc-400">
          More updates coming soon! Come back soon for more ;)
        </p>
      </InfoCard>
      <InfoCard
        id="Contact Me"
        title="Contact Me"
        subtitle='"Great communication begins with connection." - Oprah'
        pic="grad.webp"
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
