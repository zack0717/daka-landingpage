import { useState, useEffect } from 'react';
import './index.less';
import imgLogo1 from '../../assets/images/common/logo1.png';

import { loadDakaGif } from '../../utils/utils';

export default () => {
  const [dakaLogo, setDakaLogo] = useState(imgLogo1);
  const [className, setClassName] = useState('gif-daka');

  useEffect(() => {
    loadDakaGif(gifDaka => {
      const cw = window.innerWidth;

      if (cw < 900) {
        setClassName('gif-daka-m');
      } else {
        setClassName('gif-daka-pc');
      }
      setDakaLogo(gifDaka);
    });
  }, []);

  return <img src={dakaLogo} alt="daka" className={className} />;
};
