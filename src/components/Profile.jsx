function Profile() {
  return (
    <div className="w-full py-10 border-b border-line-color mb-10">
      <div className="text-5xl leading-none font-semibold mb-10vvvvvvvvvvvvvvvvvv">Profile</div>
      <div className="flex justify-between">
       
        <div className="w-1/2">
          <h1 className="text-3xl text-indigo-800 mb-4">Profile</h1>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-md">
            <span className="font-bold">Doğum Tarihi</span>
            <span>24.03.1996</span>

            <span className="font-bold">İkamet Şehri</span>
            <span>Ankara</span>

            <span className="font-bold">Eğitim Durumu</span>
            <span>
              Hacettepe Ünv. Biyoloji Lisans, 2016
            </span>

            <span className="font-bold">Tercih Ettiği Rol</span>
            <span>Frontend, UI</span>
          </div>
        </div>

        
        <div className="w-3/4">
          <h1 className="text-3xl text-indigo-800 mb-4">About Me</h1>
          <p className="text-md mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p className="text-md">
            Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile;
