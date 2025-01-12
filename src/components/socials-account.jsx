import instagram from "../assets/instagram-icon.svg";
import facebook from "../assets/facebook-icon.svg";
import github from "../assets/github-icon.svg";
import linked from "../assets/linkedin-icon.svg";

export default function SocialAccount() {
  return (
    <div>
      <a
        href="https://www.facebook.com/jamesanthonyguevarraaa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-10 h-10 rounded-full hover:bg-gray-200  transform transform-transition hover:scale-110">
          <img className="w-full h-full" src={facebook} alt="Facebook" />
        </button>
      </a>
      <a
        href="https://www.instagram.com/dyames.crds/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-10 h-10 rounded-full hover:bg-gray-200 transform transform-transition hover:scale-110">
          <img className="w-full h-full" src={instagram} alt="Instagram" />
        </button>
      </a>
      <a
        href="https://github.com/JamesAnthony04"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-10 h-9 rounded-full hover:bg-gray-200 transform transform-transition hover:scale-110">
          <img className="w-full h-full" src={github} alt="GitHub" />
        </button>
      </a>
      {/*
                              <a
                                href="https://linkedin.com/JamesAnthony"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <button className="w-10 h-10 rounded-full hover:bg-gray-200 transform transform-transition hover:scale-110">
                                  <img className="w-full h-full" src={linked} alt="LinkedIn" />
                                </button>
                              </a>*/}
    </div>
  );
}
