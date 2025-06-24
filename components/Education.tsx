interface Props {
  degree: string;
  where: string;
  when: string;
  coursework?: string[];
}

export default function Education(props: Props) {
  return (
    <div>
      <p className="text-xl font-bold">{props.degree}</p>
      <p className="text-lg">{props.where}</p>
      <p className="italic">{props.when}</p>
      {props.coursework && (
        <>
          <p className="my-3">Coursework:</p>
          <div className="columns-3">
            {props.coursework.map((course) => (
              <p>{course}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
