const Container = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className="flex items-center justify-center h-screen p-5">
        {children}
    </div>
  )
}

export default Container