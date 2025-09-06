import './App.css';
import VvaClassComp from './components/VvaClassComp';
import VvaFuncComp from './components/VvaFuncComp';
import VvaJsxExpression from './components/VvaJsxExpression';

function App() {
  return (
    <div className="container border">
        <h1>Làm việc với các thành phần cơ bản trong ReactJs</h1>
        <hr/>
        <VvaJsxExpression />

        <VvaFuncComp name="Khách chưa rõ" age="?" />
        <VvaFuncComp name="Vũ Việt Anh" age="21" />

        <VvaClassComp />
        <VvaClassComp fullName="Vũ Việt Anh" company="K22CNT1" />
        <VvaClassComp fullName="Nông Văn Bách" company="k22CNT1" />
    </div>
  );
}

export default App;
