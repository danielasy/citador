import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar as BaseToolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper'
import MoreVerticalIcon from 'material-ui/svg-icons/navigation/more-vert';
import { BookCitationRegister, SiteCitationRegister, ThesisCitationRegister } from '../CitationRegister'
import style from './style'

const Toolbar = (props) => {
  return (
    <Paper rounded={false} zDepth={3}>
      <BaseToolbar style={{...style}}>
        <ToolbarGroup>
          <ToolbarTitle style={{...style.toolbarTitleStyle}} text="Adicionar citação" />
          <BookCitationRegister
            onRegisterFormSubmit={props.actions.submitForm}
            onRegister={props.actions.addCitation} />
          <SiteCitationRegister />
          <ThesisCitationRegister />
          <IconMenu
            iconButtonElement={<IconButton><MoreVerticalIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="Em breve :)" />
          </IconMenu>
        </ToolbarGroup>
      </BaseToolbar>
    </Paper>
  )
}

Toolbar.propTypes = {
  actions: PropTypes.object.isRequired,
}

Toolbar.defaultProps = {
}

export default Toolbar
