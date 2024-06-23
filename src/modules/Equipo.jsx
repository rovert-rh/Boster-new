import React, { useState } from 'react';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import fotojanice from '../assets/fotojanice.jpg';
import fotogino from '../assets/fotogino.jpg';
import fotorobert from '../assets/fotorobert.jpg';
import fotokevin from '../assets/fotokevin.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Janice',
    photo: fotojanice,
    social: {
      instagram: 'https://www.instagram.com/hey.janiz/',
      linkedin: 'https://www.linkedin.com/in/janice-chen97/',
    },
  },
  {
    id: 2,
    name: 'Marcos',
    photo: fotogino,
    social: {
      instagram: 'https://www.instagram.com/ginolml/',
      linkedin: 'https://www.linkedin.com/in/marcos-hernandez-896b11185/',
    },
  },
  {
    id: 3,
    name: 'Robert',
    photo: fotorobert,
    social: {
      instagram: 'https://instagram.com/rovert.lh?igshid=YzAwZjE1ZTI0Zg==',
      linkedin: 'https://www.linkedin.com/in/roberto-reyes-ib/',
    },
  },
  {
    id: 4,
    name: 'Kevin',
    photo: fotokevin,
    social: {
      instagram: 'https://www.instagram.com/kevin_f11/',
      linkedin: 'https://www.linkedin.com/in/kevin-cárdenas-365210283/',
    },
  },
];

const Equipo = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const toggleSocialLinks = (member) => {
    setSelectedMember(selectedMember === member ? null : member);
  };

  return (
    <div className="border-purple-600 border-solid rounded-2xl border-4 my-16 backdrop-blur-sm bg-white/5 ">
      <h1 className="text-5xl font-bold text-center my-8 text-white">Nuestro Equipo</h1>
      <div className="flex justify-center p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="max-w-xs rounded-2xl overflow-hidden relative transform transition-transform hover:scale-105"
            >
              <img src={member.photo} alt={member.name} className="w-full" />
              <div
                className="flex bg-purple-800 bg-opacity-60 text-white text-center justify-center cursor-pointer"
                onClick={() => toggleSocialLinks(member)}
              >
                <p className="font-bold text-xl mb-2">{member.name}</p>
              </div>
              {selectedMember === member && (
                <div className="flex justify-around mt-2">
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <IoLogoInstagram size={24} className="text-white hover:text-purple-200" />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin size={24} className="text-white hover:text-purple-200" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipo;
