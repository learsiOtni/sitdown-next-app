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

            <div className="flex ml-[110px] bg-[#F5F7FA] h-screen">{children}</div>
          </>
        ) : (
          <div>{children}</div>
        )}
        
    </div>
  )
}

export default Layout