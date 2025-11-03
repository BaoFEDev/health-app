const MyExercise = () => {
  const exercises = Array(10).fill({
    title: "家事全般（立位・軽い）",
    kcal: 26,
    time: 10,
  });

  return (
    <div className="w-full h-full bg-dark-600 py-4! px-6!">
      <div className="flex mb-1!">
        <h2 className="text-[15px] leading-[18px] uppercase w-20 text-white">MY EXERCISE</h2>
        <span className="text-lg text-white">2021.05.21</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 max-h-48 overflow-y-auto pr-6! scrollbar-custom">
        {exercises.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center py-1! border-b! border-gray-500!"
          >
            <div>
              <p className="text-[15px] leading-[22px] text-white font-japanese">
                • {item.title}
              </p>
              <p className="text-primary-300 text-[15px] leading-[18px] text-sm font-light">
                {item.kcal}kcal
              </p>
            </div>
            <p className="text-primary-300 font-normal text-sub leading-[22px] text-sm">
              {item.time} min
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyExercise;