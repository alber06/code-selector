import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import { Tabs, Tab } from 'material-ui/Tabs'
import { GREY } from 'constants/colors'

const CodePaper = styled(Paper)`
  height: 50px;
  width: 100%;
  display: flex;
  cursor: pointer;
  margin-right: 0;
  margin: 10px 0 10px 0;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: auto;
`

const SelectedCode = styled.div`
  height: 25px;
`

const ValueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-right: 1px solid ${GREY};
`

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 5;
`

class Modal extends Component {
  static propTypes = {
    codes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      open: props.open,
      value: 'chapter',
      chapter: null,
      heading: null,
      subheading: null,
      tabs: ['chapter', 'heading', 'subheading'],
    }
    this.onClose = this.onClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onSelectNewCode = this.onSelectNewCode.bind(this)
    this._renderCodes = this._renderCodes.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState({ open: newProps.open })
  }

  onClose() {
    this.setState({
      chapter: null,
      heading: null,
      subheading: null,
      value: 'chapter',
    })
    this.props.onToggle()
  }

  handleChange(value) {
    const { tabs } = this.state
    const index = tabs.indexOf(value)
    const newState = { value }

    for (let i = index + 1; i < tabs.length; i++) {
      newState[tabs[i]] = null
    }
    this.setState(newState)
  }

  setValue(key, value, nextKey) {
    this.setState({ [key]: value, value: nextKey })
  }

  onSelectNewCode() {
    const { chapter, heading, subheading } = this.state

    this.props.onChange(`${chapter} - ${heading} - ${subheading}`)
    this.onClose()
  }

  getActions() {
    const { chapter, heading, subheading } = this.state
    const disabled = !chapter || !heading || !subheading

    return [
      <FlatButton label="Cancel" primary={true} onClick={this.onClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.onSelectNewCode}
        disabled={disabled}
      />,
    ]
  }

  _renderCodes(codes, key, nextKey) {
    if (codes && codes.length)
      return codes.map(code => {
        return (
          <CodePaper
            key={code.value}
            onClick={() => this.setValue(key, code.value, nextKey)}
          >
            <ValueContainer>{code.value}</ValueContainer>
            <DescriptionContainer>{code.description}</DescriptionContainer>
          </CodePaper>
        )
      })
  }

  _renderTitle() {
    const { chapter, heading, subheading } = this.state
    const headingText = heading ? ` - ${heading}` : null
    const subheadingText = subheading ? ` - ${subheading}` : null

    return (
      <Title>
        <h3>Selected HS code</h3>
        <SelectedCode>
          {chapter}
          {headingText}
          {subheadingText}
        </SelectedCode>
      </Title>
    )
  }

  render() {
    const { codes } = this.props

    return (
      <Dialog
        title={this._renderTitle()}
        actions={this.getActions()}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
        autoScrollBodyContent={true}
      >
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="Chapter" value="chapter">
            {this._renderCodes(codes.chapter, 'chapter', 'heading')}
          </Tab>
          <Tab
            label="Heading"
            value="heading"
            disabled={this.state.value === 'chapter'}
          >
            {this._renderCodes(codes.heading, 'heading', 'subheading')}
          </Tab>
          <Tab
            label="Subheading"
            value="subheading"
            disabled={this.state.value !== 'subheading'}
          >
            {this._renderCodes(codes.subheading, 'subheading')}
          </Tab>
        </Tabs>
      </Dialog>
    )
  }
}

export default Modal
