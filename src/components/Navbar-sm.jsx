import { useState } from 'react';
import { Plus, Home, Book, Code, Contact, Info } from 'lucide-react';

const SpeedDialAction = ({ icon: Icon, label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-2"
    >
      <div className="w-8 h-8 rounded-full  hover:bg-gray-700 transition-colors flex items-center justify-center">
        <Icon className="h-4 w-4 text-blue-900" />
      </div>
      <span className="text-xs text-gray-800 font-medium">
        {label}
      </span>
    </button>
  );
};

const SpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }

  const actions = [
    { icon: Home, label: 'Home', id: 'home'},
    { icon: Info , label: 'About', id: 'about'},
    { icon: Book, label: 'Education', id: 'education'},
    { icon: Code, label: 'Project', id: 'project'},
    { icon: Contact, label: 'Contact', id: 'contact'},
  ];

  return (
    <div className="">
      <div className="relative"> 
        {isOpen && (
          <div className="absolute top-12 right-10 flex flex-col items-center gap-1 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
            {actions.map((action, index) => (
              <SpeedDialAction
                key={index}
                icon={action.icon}
                label={action.label}
                onClick={() => {
                  scrollToSection(action.id);
                }}
              />
            ))}
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 bg-gray-500 hover:bg-gray-700 rounded-full shadow-lg transition-all flex items-center justify-center"
        >
          <Plus 
            className={`h-5 w-5 text-white transition-transform duration-200 ${
              isOpen ? 'rotate-45' : ''
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default SpeedDial;