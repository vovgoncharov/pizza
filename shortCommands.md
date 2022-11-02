Short command
React

imr→	import React from 'react'
imrd→	import ReactDOM from 'react-dom'
imrc→	import React, { Component } from 'react'
imrpc→	import React, { PureComponent } from 'react'
imrm→	import React, { memo } from 'react'
imrr→	import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
imbr→	import { BrowserRouter as Router} from 'react-router-dom'
imbrc→	import { Route, Switch, NavLink, Link } from react-router-dom'
imbrr→	import { Route } from 'react-router-dom'
imbrs→	import { Switch } from 'react-router-dom'
imbrl→	import { Link } from 'react-router-dom'
imbrnl→	import { NavLink } from 'react-router-dom'
imrs→	import React, { useState } from 'react'
imrse→	import React, { useState, useEffect } from 'react'
redux→	import { connect } from 'react-redux'
est→	this.state = { }
cdm→	componentDidMount = () => { }
scu→	shouldComponentUpdate = (nextProps, nextState) => { }
cdup→	componentDidUpdate = (prevProps, prevState) => { }
cwun→	componentWillUnmount = () => { }
gdsfp→	static getDerivedStateFromProps(nextProps, prevState) { }
gsbu→	getSnapshotBeforeUpdate = (prevProps, prevState) => { }
sst→	this.setState({ })
ssf→	this.setState((state, props) => return { })
props→	this.props.propName
state→	this.state.stateName
rcontext→	const $1 = React.createContext()
cref→	this.$1Ref = React.createRef()
fref→	const ref = React.createRef()
bnd→	this.methodName = this.methodName.bind(this)

Console

clg→	console.log(object)
clo→	console.log(`object`, object)
clj→	console.log(`object`, JSON.stringify(object, null, 2))
ctm→	console.time(`timeId`)
cte→	console.timeEnd(`timeId`)
cas→	console.assert(expression,object)
ccl→	console.clear()
cco→	console.count(label)
cdi→	console.dir
cer→	console.error(object)
cgr→	console.group(label)
cge→	console.groupEnd()
ctr→	console.trace(object)
cwa→	console.warn
cin→	console.info

React Components

rafc

import React from 'react'

export const $1 = () => {
  return <div>$0</div>
}

rafce

import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1

rmc

import React, { memo } from 'react'

export default memo(function $1() {
  return <div>$0</div>
})

rmcp

import React, { memo } from 'react'
import PropTypes from 'prop-types'

const $1 = memo(function $1(props) {
  return <div>$0</div>
})

$1.propTypes = {}

export default $1

rcredux

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FileName extends Component {
  render() {
    return <div>$4</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)

rcreduxp

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class FileName extends Component {
  static propTypes = {
    $2: $3,
  }

  render() {
    return <div>$4</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
rfcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'

export const FileName = () => {
  return <div>$4</div>
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
rfreduxp
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const FileName = () => {
  return <div>$4</div>
}

FileName.propTypes = {
  $2: $3,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
reduxmap
const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}
