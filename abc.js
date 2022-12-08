var arr = [1, 2, 3, 4];

const [a] = arr;

const h = "hello";
const w = "world";

console.log(`${h} ${w}!`);

import React from "react";

type Props = {
  abc: String,
};

const abc = ({ abc }: Props) => {
  const [first, setfirst] = useState(false);

  const renderAfucntion = () => {
    console.log("abc");
  };

  useEffect(() => {
    if (first) {
      renderAfucntion();
    }
    return () => {
      console.log("return");
    };
  }, []);

  return <div>abc</div>;
};

export default abc;

// api call

const result = await axios.get("/");
Promise.then().catch();

setTimeout(() => {
  //  throw and error
}, 5000);
