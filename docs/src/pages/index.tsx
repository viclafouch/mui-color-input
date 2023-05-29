import React from 'react'
import clsx from 'clsx'
import { MuiColorInput, MuiColorInputValue } from 'mui-color-input'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import DocusaurusImageUrl from '@site/static/img/logo.jpg'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import '../css/index.css'

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()
  const [color, setColor] = React.useState<MuiColorInputValue>('#ffffff')

  const handleChangeColor = (newColor: MuiColorInputValue) => {
    setColor(newColor)
  }

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src={DocusaurusImageUrl as string}
          width={100}
          alt="MUI color input"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          A color input designed for the React library{' '}
          <Link target="_blank" href="https://mui.com">
            MUI
          </Link>{' '}
          built with{' '}
          <Link
            target="_blank"
            href="https://www.npmjs.com/package/@ctrl/tinycolor"
          >
            TinyColor
          </Link>
          .
        </p>
        <MuiColorInput value={color} onChange={handleChangeColor} />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  )
}

const Home = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  )
}

export default Home
