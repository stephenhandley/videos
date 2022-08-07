import Nav from 'src/components/Nav'

type SignedInLayoutProps = {
  children?: React.ReactNode
}

const SignedInLayout = ({ children }: SignedInLayoutProps) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="pt-4">{children}</main>
    </>
  )
}

export default SignedInLayout
