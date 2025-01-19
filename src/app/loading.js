import "../Component/Loader/loader.css";

const Loading = () => {
  return (
    <div className ="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <div className ="flex space-x-4 text-6xl font-extrabold relative">
      <div className ="relative">
        <div className ="ball"></div>
        <span className ="letter">S</span>
      </div>
      <div className ="relative">
        <div className ="ball"></div>
        <span className ="letter">A</span>
      </div>
      <div className ="relative">
        <div className ="ball"></div>
        <span className ="letter">D</span>
      </div>
      <div className ="relative">
        <div className ="ball"></div>
        <span className ="letter">I</span>
      </div>
      <div className ="relative">
        <div className ="ball"></div>
        <span className ="letter">A</span>
      </div>
    </div>
  </div>
  );
};

export default Loading;