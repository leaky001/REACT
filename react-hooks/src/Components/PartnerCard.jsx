export const PartnerCard = ({ title, description, features = [], price, gradient = false }) => {
  return (
    <div className={`p-6 rounded-2xl space-y-4 flex flex-col justify-between shadow-md  duration-300 ${
      gradient
        ? "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white"
        : "bg-[#1e1e1e] text-white"
    }`}>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm mt-1">{description}</p>

        {features.length > 0 && (
          <ul className="list-disc list-inside mt-4 space-y-1 text-sm">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}
      </div>

      {price && (
        <p className="text-xl font-bold mt-4">{price}</p>
      )}

      <button className=" mx-auto w-40  bg-[#7163e1] text-white px-4 rounded-md  ">
        Let's go
      </button>
    </div>
  );
};