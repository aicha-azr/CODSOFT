const Education = () => {
  return (
    <>
      <div className="h-screen mt-20 flex flex-col items-center" id="education">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF] font-bold">
          Diplômes et Formations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10 pt-28">
          <div className="block rounded-xl shadow shadow-[#FF5FA5] p-4">
            <span className="inline-block rounded-lg p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-graduation-cap"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
            </span>

            <h2 className="mt-2 font-semibold text-base sm:text-lg ">
              2023-2024
            </h2>
            <p className="font-bold">
              Concepteur développeur d'application MERN Stack chez Simplon
              Maghreb et JobIntech Casablanca
            </p>
          </div>

          <div className="block rounded-xl shadow shadow-[#FF5FA5] p-4">
            <span className="inline-block rounded-lg p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-graduation-cap"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
            </span>
            <h2 className="mt-2 font-semibold text-base sm:text-lg ">
              2020-2023
            </h2>
            <p className="sm:mt-1 block text-sm sm:text-base font-bold">
              {" "}
              Licence en Sciences Mathématiques Informatiques à
              l'Universite Hassan 2
            </p>
          </div>

          <div className="block rounded-xl p-4 shadow shadow-[#FF5FA5]">
            <span className="inline-block rounded-lg p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-graduation-cap"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
            </span>

            <h2 className="mt-2 font-semibold text-base sm:text-lg">
              2019-2020{" "}
            </h2>
            <p className="sm:mt-1 block text-sm sm:text-base font-bold ">
              {" "}
              Baccalauréat en sciences Mathématiques (B) à Lycée technique Anwal
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Education;
