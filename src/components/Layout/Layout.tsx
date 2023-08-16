import RightSideBar from "./RightSideBar/RightSideBar";
import SideNav from "./SideNav/SideNav"


const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {

  const isLoggedIn = true;

  return (
    <div>

        { isLoggedIn ? (
          <>
            <SideNav />

            <div className="flex ml-[110px] bg-[#F5F7FA] h-full min-h-screen mr-[266px]">
              {children}
            </div>

            <RightSideBar />
          </>
        ) : (
          <div>{children}</div>
        )}
        
    </div>
  )
}

export default Layout