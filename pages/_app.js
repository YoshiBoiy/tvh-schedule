import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@hackclub/design-system'
import theme from '../components/style'

export default class extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Schedule – Flagship Summit</title>
          <link href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap" rel="stylesheet" />
          {/* <style children={`body{background:${cx('darker')};}`} /> */}
          <style children={`body{background:${theme.cx('#2433ed')};background-image:${theme.gradient('#2433ed','#6930c3')};}`} />
        </Head>
        <ThemeProvider theme={theme} webfonts>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}