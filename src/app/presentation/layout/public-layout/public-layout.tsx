import { Box } from "@mui/material"
import { ReactElement } from 'react'
import PublicHeader from "./components/header/public-header"

type Props = {
  children: ReactElement | ReactElement[]
}

const PublicLayout = ({ children }: Props) => {
    return (
      <Box>
        <PublicHeader />

        {children}
      </Box>
        
    )
}

export default PublicLayout