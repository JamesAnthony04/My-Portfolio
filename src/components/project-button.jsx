import github from "../assets/github-blue.svg";
import live from "../assets/view-live-blue.svg";
import { useNavigate } from "react-router-dom";

export default function Button({ url, repo }) {
  const navigate = useNavigate();

  async function handleLiveClick() {
    try {
      const response = await fetch(url, { method: 'HEAD' }); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      window.open(url, "_blank"); 
    } catch (error) {
      console.error("Error fetching URL:", error);
      navigate('/notfound'); 
    }
  }
  function handleRepoClick() {
    console.log("Live URL:", url);
    window.open(repo, "_blank");
  }
  return (
    <div className="flex flex-row justify-evenly gap-2">
      <div className="holo-card">
        <img src={live} alt="View Live" className="w-5 h-5" />
        <button onClick={handleLiveClick}>View Live</button>
      </div>
      <div className="holo-card">
        <img src={github} alt="View Repository" className="w-5 h-5" />
        <button onClick={handleRepoClick}>View Repository</button>
      </div>
    </div>
  );
}
