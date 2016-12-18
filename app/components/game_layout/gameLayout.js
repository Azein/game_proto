import React from 'react';
import styles from './gameLayout.css';
import TopBarContainer from './top_bar/topBarContainer.js';
import MainViewport from './main_viewport/mainViewport.js';
import BottomBarContainer from './bottom_bar/bottomBarContainer.js';

export default class GameLayout extends React.Component {
  render(){
    return(
      <div className={styles.container}>
        <TopBarContainer />
        <MainViewport />
        <BottomBarContainer />
      </div>
    )
  }
}