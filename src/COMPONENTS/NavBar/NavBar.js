import React from "react";

class NavLink {
  constructor(title, route, routeElement) {
    this.title = title;
    this.route = route;
    this.routeElement = routeElement;
  }
}
const NavBarLinks = [
  new NavLink("Home"),
  new NavLink("Services"),
  new NavLink("Our Works"),
  new NavLink("Clients"),
  new NavLink("Contacts"),
];

export const NavBar = () => {
  return (
    <nav id="NavBar">
      <div className="logo">
        <p>Edie</p>
      </div>
      <ul className="navBarLinks">
        {NavBarLinks.map((link) => (
          <li className="nav-item" key={link.route}>
            {link.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};
