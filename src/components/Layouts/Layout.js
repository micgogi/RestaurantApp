import React  from 'react';

import Aux from '../../hoc/Aux';
import styles from './Layout.module.css'

const layout = (props) => (
    <Aux>
    <div>
        ToolBar, SideDrawer, BackDrop
    </div>
    <main className={styles.Content}>
        {props.children}
    </main>
    </Aux>
);

export default layout;