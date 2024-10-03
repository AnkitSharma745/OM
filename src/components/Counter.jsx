// App.js
import { useEffect, useState, useRef } from "react";

const counters = [
  { value: 700, label: "Happy Customers" },
  { value: 50, label: "Products Available" },
  { value: 25, label: "Years Experience" },
];

// eslint-disable-next-line react/prop-types
function Counter({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            animateCount();
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animateCount = () => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const end = value;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
  };

  return (
    <div className="flex flex-col items-center" ref={ref}>
      <span className="text-4xl font-bold text-purple-600">{count}+</span>
      <span className="mt-2 text-lg text-gray-800">{label}</span>
    </div>
  );
}

function CounterShow() {
  return (
    <div className="flex justify-around py-12 bg-white sm:flex-wrap">
      {counters.map((counter, index) => (
        <Counter key={index} value={counter.value} label={counter.label} />
      ))}
    </div>
  );
}

export default CounterShow;
