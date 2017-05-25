import React from 'react'
import PropTypes from 'prop-types'
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { Toolbar as BaseToolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper'
import Book from 'material-ui/svg-icons/action/book'
import Laptop from 'material-ui/svg-icons/hardware/laptop-mac'
import School from 'material-ui/svg-icons/social/school'
import MoreVerticalIcon from 'material-ui/svg-icons/navigation/more-vert';
import style from './style'

injectTapEventPlugin();

const Toolbar = (props) => {
  return (
    <Paper rounded={false} zDepth={3}>
      <BaseToolbar style={{...style}}>
        <ToolbarGroup>
          <ToolbarTitle style={{...style.toolbarTitleStyle}} text="Adicionar citação" />
          <FlatButton
            label="Livro"
            icon={<Book />}
            style={{...style.toolbarButtonStyle}}
          />
          <FlatButton
            label="Site"
            icon={<Laptop />}
            style={{...style.toolbarButtonStyle}}
          />
          <FlatButton
            label="Monografia"
            icon={<School />}
            style={{...style.toolbarButtonStyle}}
          />
          <IconMenu
            iconButtonElement={<IconButton><MoreVerticalIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="Opção 1" />
            <MenuItem primaryText="Opção 2" />
            <MenuItem primaryText="Opção 3" />
          </IconMenu>
        </ToolbarGroup>
      </BaseToolbar>
    </Paper>
  )
}

Toolbar.propTypes = {
}

Toolbar.defaultProps = {
}

export default Toolbar
