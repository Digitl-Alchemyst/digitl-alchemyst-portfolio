import Image from 'next/image';

const Profile = () => {
  return (
    <Image
      src='/profile.png'
      alt=''
      width={537}
      height={478}
      className='translate-z-0 h-full w-full'
    />
  );
};

export default Profile;
