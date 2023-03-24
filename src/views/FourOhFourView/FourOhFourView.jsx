import { Link } from "react-router-dom";

export function FourOhFourView() {
  return (
    <div>
      <h1>404</h1>
      <h3>თქვენ მოხვდით არასწორ გვერდზე</h3>
      <Link to="/">დაბრუნდით მთავარ გვერდზე</Link>
    </div>
  );
}
