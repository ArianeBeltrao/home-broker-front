import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import {
  BusinessCenterOutlined,
  ContentPasteOutlined,
  CreditCardOutlined,
  PaidOutlined,
  PeopleAltOutlined,
  SyncAltOutlined
} from '@mui/icons-material'

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SyncAltOutlined />
      </ListItemIcon>
      <ListItemText primary='Transactions' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PaidOutlined />
      </ListItemIcon>
      <ListItemText primary='Make a payment' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CreditCardOutlined />
      </ListItemIcon>
      <ListItemText primary='Cards' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleAltOutlined />
      </ListItemIcon>
      <ListItemText primary='Team' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ContentPasteOutlined />
      </ListItemIcon>
      <ListItemText primary='Documents' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BusinessCenterOutlined />
      </ListItemIcon>
      <ListItemText primary='Accounts' />
    </ListItemButton>
  </React.Fragment>
)
