import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './Logo';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo></Logo>
          </header>
          <NavLinks isBigSidebar></NavLinks>
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
