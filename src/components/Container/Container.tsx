

const Container = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className="flex items-center justify-center h-screen">
        {children}
    </div>
  )
}

export default Container