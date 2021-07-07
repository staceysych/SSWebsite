import React from "react";

import styles from "./CrossIcon.module.scss";

interface Props {
  style?: object;
}

const CrossIcon: React.FC<Props> = ({ style }) => <span style={style} className={styles.CrossIcon} />;

export default CrossIcon;
