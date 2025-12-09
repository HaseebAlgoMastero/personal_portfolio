import { Link, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { navLinks } from '~/layouts/navbar/nav-data';
import styles from './nav-bar.module.css';

export const NavBar = ({ items = navLinks }) => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className={styles.navBar}>
      <div className={styles.bar}>
        {items.map(item => {
          const isActive = activePath === item.pathname;
          return (
            <Link key={item.pathname} to={item.pathname} className={`${styles.link} ${isActive ? styles.active : ''}`}>
              {item.label}
              {isActive ? (
                <motion.div
                  layoutId="nav-pill"
                  className={styles.pill}
                  transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                />
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
