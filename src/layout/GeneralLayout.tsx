interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return <div className='general-layout'>{children}</div>
}

export default GeneralLayout
