import { useState, useEffect } from "react"

export const Counter = ({number, title, delay, increment}) => {
  const [count, setCount] = useState(0);

  const maxCount = number; // Change this to your desired maximum count

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < maxCount) {
        if (count > maxCount) {
          setCount(maxCount)
        } else {
          setCount(count + increment);
        }
      }
    }, delay); // Adjust the interval (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, [count, maxCount]);

  return (
    <div className="px-10 text-center">
      <p className="text-4xl font-semibold text-lime-600">{ count.toLocaleString() }</p>
      <p className="text-lg text-lime-600">{ title }</p>
    </div>
  )
}