import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'MUI V5 compatible',
    /* eslint-disable */
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    /* eslint-enable */
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    )
  },
  {
    title: 'React 18 compatible',
    /* eslint-disable */
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    /* eslint-enable */
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    )
  },
  {
    title: 'Easy to use',
    /* eslint-disable */
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    /* eslint-enable */
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    )
  }
]

const Feature = ({ title, Svg, description }: FeatureItem) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

const HomepageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, index) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Feature key={index} {...props} />
          })}
        </div>
      </div>
    </section>
  )
}

export default HomepageFeatures
