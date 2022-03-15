let counter = 0;

const toggle = () => {
  if (counter % 2 === 0)
    document
      .querySelector(".homepage")
      .setAttribute("class", "homepage darkmode");
  else document.querySelector(".homepage").setAttribute("class", "homepage");
  counter++;
};

export default function Darkmode() {
  return <button onClick={toggle}>Toggle Dark Mode</button>;
}
