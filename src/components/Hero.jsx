
function Hero() {
  return (
    <div className="my-10 mb-20">
    <img src="https://media.licdn.com/dms/image/D4D03AQH9V3rRkGSIiA/profile-displayphoto-shrink_200_200/0/1687114916636?e=2147483647&v=beta&t=2rnle68ci6iV-4TewFypHy49uUsRKFrxJdi0OswX_d0" className="rounded-md float-right "/>
        <div>
            <p className="flex items-center text-indigo-800 mb-10"><span className="block w-10 h-px bg-indigo-800 align-middle mr-1 "></span> Orhan Kalsın</p>
      <h1 className=" text-7xl leading-none font-bold mb-10">Creative thinker Minimalism lover</h1>
      <p className="ttext-lg leading-7 font-normal w-3/4 mb-10">Hi, I’m Orhan. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
        <div className="flex gap-2 ">
        <button className="border-2 text-indigo-800 px-4 py-2 rounded border-indigo-800 hover:bg-indigo-800  hover:text-white">Hire me</button>
        <button className="border-2 text-indigo-800 px-4 py-2 rounded border-indigo-800 hover:bg-indigo-800  hover:text-white"><i className="fab fa-github "></i> Github </button>
        <button className="border-2 text-indigo-800 px-4 py-2 rounded border-indigo-800 hover:bg-indigo-800  hover:text-white"><i className="fa-brands fa-linkedin-in"></i> Linkedin</button>
        </div>
        </div>
        
    </div>    
    )
}

export default Hero
