import { useEffect, useState } from 'react'
import { TeamInfo } from '../utils/interface';
import { client } from '../utils/client';
import { teamQuery } from '../utils/data';

const TeamsComponent = () => {
    const [teamList, setTeamList] = useState<TeamInfo[]>([]);
    const fetchTeamMember = () =>{
        // setLoading(true);
        client.fetch(teamQuery())
        .then((data) => {
        setTeamList(data);
        // setLoading(false);
        })
    }

    useEffect(() => {
        fetchTeamMember();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="flex flex-col w-full gap-5">
          <div className="font-EB text-[2rem] font-semibold">Our Team</div>
          {teamList?.map((member, index) => (
            <div key={index} className={` grid md:grid-cols-2 items-center mt-5 w-full gap-10 border-b pb-5`}>
              <div className={`${index % 2 === 0 ? '' : 'order-last'} flex flex-col gap-3 w-full font-nunito`}>
                <div className="font-EB font-semibold text-xl lg:text-2xl">{member.fullname}</div>
                <div className="opacity-80 text-sm">{member.body}</div>
              </div>
              <div className={`${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                <img src={member.imageUrl} alt="elokaImg" className="aspect-square h-[20rem] object-cover"/>
              </div>
            </div>
          ))}
        </div>
    )
}

export default TeamsComponent