const Card = ({ name, username, email, phone, website }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-300 mb-2">{name}</div>
        <p className="text-gray-200 text-base">
          {phone} || {username}
        </p>
        <a
          target="_blank"
          className="text-gray-100"
          href={`https://${website}`}
        >
          {website}
        </a>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href="#"
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          #photos
        </a>
        <a
          href="#"
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          #todo
        </a>
        <a
          href="#"
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          #albums
        </a>
      </div>
    </div>
  );
};

export default Card;
