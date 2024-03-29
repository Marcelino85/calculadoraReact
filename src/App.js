import Input from './components/Input'
import Button from './components/Button'
import{Container, Content, Row} from './styles'
import { useState } from 'react'


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const[operation, setOperation] = useState('')


  // Função Limpar
  const handleOnClear = () =>{
    setCurrentNumber('0');
    setFirstNumber('0')
    setOperation('')
        
  };

  const handleAddNumber = (num)=>{
    
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)

  }
// Função Adição
  const handleSunNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else{
      const sun = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sun));
      setOperation('');
    
      
    }
  }

  // Função subtração

  const handleMinusNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else{
      const sun = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sun));
      setOperation('');
    
      
    }
  }
   // Função Multiplicação
  const handleMultipNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    } else{
      const sun = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sun));
      setOperation('')
    }
  }

  // Função Divisão
  const handleDivisibpNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    } else{
      const sun = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sun));
      setOperation('')
    }
  }


   // Função Igual
  const handleEquals = () =>{
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSunNumbers();
        break;
        case '-':
          handleMinusNumbers();
        break;
        case '*':
          handleMultipNumbers();
        break;
        case '/':
          handleDivisibpNumbers();
        break;
        default:
        break;
      }
    }
  }

  

  return (
        <Container>
          <Content>
            <Input value={currentNumber}/>
            <Row>
            <Button label={'x'} onClick={handleMultipNumbers}/>
            <Button label={'/'} onClick={handleDivisibpNumbers}/>
            <Button label={'C'} onClick={handleOnClear}/>
            <Button label={'.'}  onClick={()=> handleAddNumber('.')}/>
            </Row>
            <Row>
            <Button label={'7'} onClick={()=> handleAddNumber('7')}/>
            <Button label={'8'} onClick={()=> handleAddNumber('8')}/>
            <Button label={'9'} onClick={()=> handleAddNumber('9')}/>
            <Button label={'-'} onClick={handleMinusNumbers}/>
            </Row>
            <Row>
            <Button label={'4'} onClick={()=> handleAddNumber('4')}/>
            <Button label={'5'} onClick={()=> handleAddNumber('5')}/>
            <Button label={'6'} onClick={()=> handleAddNumber('6')}/>
            <Button label={'+'} onClick={handleSunNumbers}/>
            </Row>
            <Row>
            <Button label={'1'} onClick={()=> handleAddNumber('1')}/>
            <Button label={'2'} onClick={()=> handleAddNumber('2')}/>
            <Button label={'3'} onClick={()=> handleAddNumber('3')}/>
            <Button label={'='} onClick={handleEquals}/>
            </Row>
            <Row >
            <Button  label={'0'} onClick={()=> handleAddNumber('0')}/>

            </Row>
           
          </Content>

        
        </Container>
  );
}

export default App;
