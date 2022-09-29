import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Nudge,
  Button,
  BigKicker,
} from "../ui";
import {
  mobileNavOverlay,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "../Navbar/index.css";

import { AuthButton } from "../Auth/auth.css";
import { UserIcon } from '@heroicons/react/20/solid'
import auth from '../../utils/auth'
import { Cross as Hamburger } from "hamburger-react";
import Logo from "../../../svgs/logo";


export default function Header({}) {
  const [isOpen, setOpen] = React.useState(false)
  let navigate = useNavigate();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen]);

  // CONVERT USER INFO TO JSON
  const userObj = JSON.parse(localStorage.getItem('userInfo'));


  return (
    <header>
      <Container className={desktopHeaderNavWrapper}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <Logo/> affinity
          </NavLink> 
          <nav>
            <FlexList gap={4}>
                {
                  auth.getToken() === null ? 
                  <>
                    <Button variant="primary" to={'/sign-in'}>Sign In</Button> 
                    <Button variant="primary" to={'/sign-up'}>Sign Up</Button>
                  </>
                  :
                  <>
                    <button 
                      className={AuthButton}
                      onClick={ () => { 
                         auth.clearAppStorage();
                         navigate('/sign-in', { replace: true });
                      }}
                    >
                      Log Out
                    </button>
                    <Button variant="primary" to={'/dashboard'}>Dashboard</Button>
                    <NavLink to={'/'}>
                      <Flex>
                         <UserIcon />
                        { userObj.username }
                      </Flex>
                    </NavLink>
                  </>
                }
            </FlexList> 
          </nav>
        </Flex>
      </Container>
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
            }
          >
            <NavLink to="/">
            </NavLink>
          </span>
          <Flex>
            <Space />
            <Nudge right={3}>
              <Hamburger toggled={isOpen} toggle={setOpen} color={"#fff"}/>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="column">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/article'}>Articles</NavLink>
                <NavLink>
                  <Button variant="primary">Resume</Button>
                </NavLink>
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  );
};