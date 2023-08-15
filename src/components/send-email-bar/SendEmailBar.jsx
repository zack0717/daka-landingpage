import { useEffect, useState } from 'react';
import './index.less';
import axios from 'axios';

export default props => {
  const { baseBg, errorBg, placeholder } = props;

  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (isLoading) return;
    var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidate = reg.test(email);
    if (!isValidate) {
      setIsError(true);
      return;
    }
    setIsError(false);
    setIsLoading(true);

    axios
      .post('https://api-test.daka.social/landing/email', {
        email,
      })
      .then(res => {
        const { statusCode } = res?.data || {};
        if (statusCode === 200) {
          setSubmitStatus(true);
          sessionStorage.setItem('submit', true);
        } else {
          setIsError(true);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const isSubmit = sessionStorage.getItem('submit');
    setSubmitStatus(!!isSubmit);
  }, []);

  return (
    <>
      {submitStatus ? (
        <div className="send-email-done">THANKS FOR SIGNING UP</div>
      ) : (
        <div className="send-email-bar">
          <img src={isError ? errorBg : baseBg} alt="bg" className="bg" />
          <div className="content">
            <input type="text" value={email} placeholder={placeholder} onInput={handleInput} />
            <div className="submit" onClick={handleSubmit}>
              SEND
            </div>
          </div>
          {isError && <div className="error-info">WRONG EMAIL ADDRESS</div>}
        </div>
      )}
    </>
  );
};
