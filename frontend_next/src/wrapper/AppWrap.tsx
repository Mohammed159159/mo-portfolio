import React from 'react'
import Socials from '../components/Socials/Socials'
import NavigationDots from '../components/NavigationDots/NavigationDots'
import { username, year } from '../constants/text'

const AppWrap = (Component: React.FunctionComponent, idName: string, classNames?: string) => function HOC() {

  return (
    <div id={idName} className={`app__container ${classNames}`}>
          <Socials />
          <div className={`app__wrapper app__flex`}>
              <Component />
              <div
                  className='copyright'>
          {/* <p className='p-text'>@{year} {username}</p> */}
              </div>
          </div>
          <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap
