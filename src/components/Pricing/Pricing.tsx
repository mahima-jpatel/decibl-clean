import Image from "next/image";
import { Bricolage_Grotesque } from 'next/font/google';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

// Define the team members data
const teamMembers = [
  {
    name: "Akhil Dua",
    affiliation: "Carnegie Mellon University",
    imageSrc: "/images/akhil.jpeg"
  },
  {
    name: "Mahima Jagadeesh Patel",
    affiliation: "Carnegie Mellon University",
    imageSrc: "/images/mahima1.jpeg"
  },
  {
    name: "Reuben George Mathew",
    affiliation: "Carnegie Mellon University",
    imageSrc: "/images/reuben2.jpeg"
  },
  {
    name: "Arihant Seth",
    affiliation: "Carnegie Mellon University",
    imageSrc: "/images/arihant.jpeg"
  }
];

const TeamMember = ({ member }) => {
  return (
    <div className="team-card bg-white shadow-md rounded-lg p-6 text-center max-w-xs">
      <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden relative" >
        <Image 
          src={member.imageSrc} 
          alt={member.name} 
          className="object-cover"
          width={200}
          height={200}
        />
      </div>
      <h3 className="text-xl font-semibold text-[#4e4e4e]">{member.name}</h3>
      <p className="text-lg text-[#555] mb-2">{member.affiliation}</p>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className={`${bricolageGrotesque.className}`}>
      {/* <h2 className="text-center mb-8 text-4xl font-extrabold" style={{ color: '#9F78E5' }}>Meet The Team</h2> */}
      {/* <p className="text-center mb-12 max-w-2xl mx-auto">Our amazing team of founders and contributors.</p> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{paddingLeft: '10%', paddingRight: '10%'}}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;