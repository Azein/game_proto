import React from 'react';
import styles from './gameLayout.css';
import TopBar from './top_bar/topBar.js';
import MainViewport from './main_viewport/mainViewport.js';
import BottomBar from './bottom_bar/bottomBar.js';

export default class GameLayout extends React.Component {
  render(){
    return(
      <div className={styles.container}>
        <TopBar />
        <MainViewport />
        <BottomBar />
      </div>
    )
  }
}