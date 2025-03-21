import data from "@/data/experiences.json";

export default function Experiences() {
  return (
    <div>
      {Object.entries(data).map(([key, exp]) => {
        return (
          <div key={key} className="flex flex-col pb-20 gap-10">
            <div>
              <div className="font-bold text-xl">{exp.position}</div>
              <div className="text-bold">
                {Array.isArray(exp.company) ? exp.company[0] : exp.company}
              </div>
              <div className="text-bold">
                {Array.isArray(exp.when) ? exp.when[0] : exp.when}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {exp.description.map((desc) => {
                return <p>{desc}</p>;
              })}
            </div>
            <div className="columns-3 text-center">
              {exp.skills.map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
