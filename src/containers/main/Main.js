import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'
import { ViewContentDiv, Modal } from 'components'
import { getCodes } from 'reducers/codes'

const OvPaper = styled(Paper)`
  height: 20vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 48em) {
    width: 50vh;
  }
`

class Main extends Component {
  static propTypes = {
    codes: PropTypes.object,
    getCodes: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      selectedCode: '00 - 00 - 00',
      showCodeModal: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  async componentDidMount() {
    await this.props.getCodes()
  }

  toggleModal() {
    this.setState({ showCodeModal: !this.state.showCodeModal })
  }

  onChange(newCode) {
    this.setState({ selectedCode: newCode })
  }

  render() {
    const { selectedCode, showCodeModal } = this.state

    return (
      <ViewContentDiv>
        <Modal
          onToggle={this.toggleModal}
          open={showCodeModal}
          codes={this.props.codes}
          onChange={this.onChange}
        />
        <OvPaper zDepth={1} onClick={this.toggleModal}>
          <h1>{selectedCode}</h1>
        </OvPaper>
      </ViewContentDiv>
    )
  }
}

const mapStateToProps = state => ({
  codes: state.codes.codes,
})

const mapDispatchToProps = dispatch => ({
  getCodes: () => dispatch(getCodes()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
