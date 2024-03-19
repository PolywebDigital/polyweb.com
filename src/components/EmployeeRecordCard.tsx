interface EmployeeRecordCardProps {
  pictureUrl: string;
  lastname: string;
  firstname: string;
  email: string;
  description: string;
  skills: {
    icon: React.ReactNode;
    title: string;
  }[];
  socials: {
    icon: React.ReactNode;
    link: string;
    accountTag: string;
  }[];
}

const EmployeeRecordCard: React.FC<EmployeeRecordCardProps> = (props) => {
  const {
    pictureUrl,
    lastname,
    firstname,
    email,
    description,
    skills,
    socials,
  } = props;

  const fullName = `${lastname.toUpperCase()} ${
    firstname.charAt(0).toUpperCase() + firstname.slice(1)
  }`;

  return (
    <div className="relative flex items-center mt-24 md:mt-0 bg-blue-50 w-full p-[10%] sm:p-8 rounded-3xl gap-2 sm:gap-10 ">
      <img
        className="md:static md:translate-y-0 md:translate-x-0 md:w-[35%] absolute top-0 right-[50%] -translate-y-[60%] translate-x-[50%] w-40 rounded-full"
        src={pictureUrl}
        alt="profile picture"
      />
      <div className="flex flex-col py-10 gap-6">
        <div>
          <h3 className="text-xl sm:text-4xl font-bold">{fullName}</h3>
          <span className="text-sm sm:text-base">{email}</span>
        </div>
        <p className="text-sm sm:text-base">{description}</p>
        <ul className="flex flex-col gap-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex gap-4 text-sm sm:text-base">
              {skill.icon}
              {skill.title}
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex flex-col gap-4 grow">
        {socials.map((social, index) => (
          <li key={index}>
            <a title={social.accountTag} href={social.link}>
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeRecordCard;
