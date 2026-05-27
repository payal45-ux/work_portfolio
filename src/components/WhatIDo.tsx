import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  const services: Service[] = [
    {
      id: 1,
      title: "DJ & LIVE PERFORMANCE",
      subtitle: "High-Energy Club Performances",
      description:
        "Professional DJ performances across Delhi & NCR's premium clubs, bars, and private events. 6+ years of experience delivering unforgettable nights with state-of-the-art Pioneer CDJ equipment and professional audio setup.",
      skills: [
        "Club Performances",
        "Private Events",
        "Pioneer CDJ 2000",
        "Live Mixing",
        "Event Energy",
        "Audience Control",
      ],
    },
    {
      id: 2,
      title: "MUSIC PRODUCTION & CREATION",
      subtitle: "Original Tracks & Remixes",
      description:
        "Original track production and professional remixing. Specializing in multiple genres including Bollywood, Techno, Deep House, and Afro House. Creating dynamic mashups and transforming popular tracks into high-energy club banners.",
      skills: [
        "Original Tracks",
        "Remixing",
        "Mashups",
        "Bollywood",
        "Punjabi",
        "Deep House",
      ],
    },
    
  ];

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {services.map((service, index) => (
            <div
              key={service.id}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>{service.title}</h3>
                <h4>{service.subtitle}</h4>
                <p>{service.description}</p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  {service.skills.map((skill, idx) => (
                    <div key={idx} className="what-tags">
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
