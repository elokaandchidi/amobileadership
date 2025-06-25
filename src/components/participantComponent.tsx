import { useEffect, useState } from 'react'
import { ParticipantInfo } from '../utils/interface';
import { client } from '../utils/client';
import { participantsQuery } from '../utils/data';

const ParticipantsComponent = () => {
    const [participantList, setParticipantList] = useState<ParticipantInfo[]>([]);
    
    const fetchParticipants = () =>{
        // setLoading(true);
        client.fetch(participantsQuery())
        .then((data) => {
        setParticipantList(data);
        // setLoading(false);
        })
    }

    useEffect(() => {
        fetchParticipants();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="flex flex-col w-full gap-5">
          {participantList?.map((participant, index) => (
            <div key={index} className={`flex flex-col gap-5 w-full`}>
              <div className="font-EB font-semibold text-lg">{participant.title}</div>
              {participant?.schools?.map((school, subIndex) => (
                <div key={subIndex} className={`flex flex-col gap-4`}>
                  <div className="text-sm">{school?.name}</div>
                  <img src={school.imageUrl} alt="participant" className="lg:min:h-[25rem] lg:object-cover"/>
                </div>

              ))}
            </div>
          ))}
        </div>
    )
}

export default ParticipantsComponent