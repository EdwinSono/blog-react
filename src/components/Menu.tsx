// import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../services/auth';
import {routes} from '../data/menu'

function Menu() {

  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;
          
          return (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue',
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { Menu };
