import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import style from './style'

class CitationRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    }
  }

  handleOpen = () => {
    this.setState({ isVisible: true })
  }

  handleClose = () => {
    this.setState({ isVisible: false })
  }

  render() {
    const dialogActions = [
      <FlatButton
        key="cancel"
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        key="add-citation"
        label="Adicionar"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ]

    return (
      <div>
        <FlatButton
          label={this.props.buttonLabel}
          icon={this.props.buttonIconRenderer()}
          style={{...style.buttonStyle}}
          onTouchTap={this.handleOpen}
        />
        <Dialog
          title={this.props.dialogTitle}
          actions={dialogActions}
          modal={false}
          open={this.state.isVisible}
          onRequestClose={this.handleClose}
        >
          {this.props.children}
        </Dialog>
      </div>
    );
  }
}

CitationRegister.propTypes = {
  children: PropTypes.node,
  buttonIconRenderer: PropTypes.func,
  buttonLabel: PropTypes.string,
  dialogTitle: PropTypes.string,
}

CitationRegister.defaultProps = {
  children: 'Ops! Ainda não trabalhamos com esse tipo de citação :(',
  buttonIconRenderer: () => { '' },
  buttonLabel: 'Citação',
  dialogTitle: 'Adicionar Citação',
}

export default CitationRegister
