import { useState } from 'react';
import dataB from './dataB';
import './App.css';

function App() {
  const [mail, setMail] = useState(dataB);

  const clickLido = (emailId) => {
    setMail((prevMail) => {
      return prevMail.map(email => {
        if (email.id === emailId) {
          return { ...email, status: 1 };
        }
        return email;
      });
    });
  };

  const clickNaoLido = (emailId) => {
    setMail((prevMail) => {
      return prevMail.map(email => {
        if (email.id === emailId) {
          return { ...email, status: 0 };
        }
        return email;
      });
    });
  };

  const todosLido = ()=> {
    setMail((prevMail) => {
      return prevMail.map(email => {
          return { ...email, status: 1 };
        })
      });
    };

  const todosNaoLido = () => {
    setMail((prevMail) => {
      return prevMail.map(email => {
          return { ...email, status: 0 };
        })
      });
  };



  return (
    <>
      <div>
        <button type="button" onClick={todosNaoLido}>Todos não lidos</button>
        <button type="button" onClick={todosLido}>Todos lidos</button>
        {mail.map((email) => (
          <div key={email.id}>
            <p className={email.status === 0 ? 'nlido' : ''}>{email.title}</p>
            <button type="button" onClick={() => clickLido(email.id)}>
              Lido
            </button>
            <button type="button" onClick={() => clickNaoLido(email.id)}>
              Não lido
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
