interface ProjectProps {
  title: string;
  items: string[];
}

export function ExperienceList(props: ProjectProps) {
  return (
    <div>
      <p className="underline">{props.title}</p>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

interface ExperienceProps {
  position: string;
  where: string;
  when: string;
  skills: string[];
  reverse: boolean;
  children: React.ReactNode;
}

export default function ExperienceCard(props: ExperienceProps) {
  return (
    <div className={`flex flex-col ${props.reverse && "flex-row-reverse"}`}>
      <div>
        <div className="font-bold text-xl">{props.position}</div>
        <div className="text-bold">{props.where}</div>
        <div className="text-bold">{props.when}</div>
      </div>
      <div>{props.children}</div>
      <div className="columns-3 text-center">
        {props.skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
    </div>
  );
}
