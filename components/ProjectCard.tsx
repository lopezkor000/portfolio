interface ProjectCardProps {
  title: string;
  purp: string;
  impl: string;
  learn: string[];
  children?: React.ReactNode;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xl font-bold">{props.title}</p>
      </div>
      <div>
        <div className="text-lg italic underline">Purpose</div>
        <p>{props.purp}</p>
      </div>
      <div>
        <div className="text-lg italic underline">Implementation</div>
        <p>{props.impl}</p>
      </div>
      <div className="columns-3">
        {props.learn.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
    </div>
  );
}
