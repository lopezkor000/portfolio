import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <main className="flex flex-col space-y-20 items-center">
      <InfoCard
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
        title="Experience"
        subtitle='"We are not what we know but what we are willing to learn." - Mary Catherine Bateson'
        pic="fly.jpg"
        reverse={true}
        className="w-3/4"
      >
        Eu aute eiusmod qui non ex ad labore duis do mollit officia non. Ut anim
        aliqua anim nulla occaecat qui voluptate irure tempor quis tempor
        nostrud labore. Est consectetur reprehenderit minim commodo aliquip
        laborum. Laboris mollit dolor id veniam cupidatat eu eu nisi consectetur
        commodo. Amet ipsum sint sunt reprehenderit qui et laboris eu laborum
        deserunt nisi id nulla exercitation. Laboris irure ea consequat fugiat
        laboris non excepteur tempor cillum ipsum qui labore. Ullamco voluptate
        laboris adipisicing adipisicing cupidatat.
      </InfoCard>
      <InfoCard
        title="Projects"
        subtitle="subtitle"
        pic="pi.jpg"
        reverse={false}
        className="w-3/4"
      >
        Eu aute eiusmod qui non ex ad labore duis do mollit officia non. Ut anim
        aliqua anim nulla occaecat qui voluptate irure tempor quis tempor
        nostrud labore. Est consectetur reprehenderit minim commodo aliquip
        laborum. Laboris mollit dolor id veniam cupidatat eu eu nisi consectetur
        commodo. Amet ipsum sint sunt reprehenderit qui et laboris eu laborum
        deserunt nisi id nulla exercitation. Laboris irure ea consequat fugiat
        laboris non excepteur tempor cillum ipsum qui labore. Ullamco voluptate
        laboris adipisicing adipisicing cupidatat.
      </InfoCard>
      <InfoCard
        title="Contact Me"
        subtitle='"Great communication begins with connection." - Oprah'
        pic="grad.jpg"
        reverse={true}
        className="w-3/4"
      >
        Eu aute eiusmod qui non ex ad labore duis do mollit officia non. Ut anim
        aliqua anim nulla occaecat qui voluptate irure tempor quis tempor
        nostrud labore. Est consectetur reprehenderit minim commodo aliquip
        laborum. Laboris mollit dolor id veniam cupidatat eu eu nisi consectetur
        commodo. Amet ipsum sint sunt reprehenderit qui et laboris eu laborum
        deserunt nisi id nulla exercitation. Laboris irure ea consequat fugiat
        laboris non excepteur tempor cillum ipsum qui labore. Ullamco voluptate
        laboris adipisicing adipisicing cupidatat.
      </InfoCard>
    </main>
  );
}
