import React from 'react'
import Socials from '../components/Socials/Socials'
import NavigationDots from '../components/NavigationDots/NavigationDots'

const AppWrap = (Component: React.FunctionComponent, idName: string, classNames?: string) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
          <Socials />
          <div className={`app__wrapper app__flex`}>
              <Component />
              <div
                  className='copyright'>
                  <p className='p-text'>@2023 Mohammed</p>
              </div>
          </div>
          <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap
