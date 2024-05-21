import { Navbar, NavbarBrand } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <header className="border bg-light">
        <Navbar className="p-3 bg-white border">
          <NavbarBrand href="/">Szótár</NavbarBrand>
        </Navbar>
        <div className="p-3">
          <h1 style={{ fontSize: "1.4rem" }}>Szavak</h1>
        </div>
      </header>
    </>
  );
}
