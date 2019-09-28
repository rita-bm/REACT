import React from 'react';
import Select from './Select';
import InputText from './InputText';
import TextArea from './TextArea';
import InputNumber from './InputNumber';
import RadioButton from './RadioButton';
import ConditionalRender from './ConditionalRender';
import CheckBox from './CheckBox';

const countries = [
    {
      value: 'es',
      text: 'spain'
    },
    {
      value: 'usa',
      text: 'usa'
    }
  ]

class Form extends React.Component {
    state = { 
        name : '',
        firstName: '',
        description: '',
        age: 0,
        gender: 'none',
        selectedCountry: 'españa',
        selectedProv: '',
        selectedProvMx: '',
        selectedHobbis: [],

     }

     countries = [
         {
            value: 'es',
            text: 'Spain'
         },
         {
            value: 'mx',
            text: 'Mexico'
         }
     ]

     provinces = [
        {
           value: 'guadalajara',
           text: 'Guadalajara'
        },
        {
            value: 'madrid',
            text: 'Madrid'
         },
    ]

    provincesMx = [
        {
            value: 'chiapas',
            text: 'Chiapas'
         },
         {
             value: 'campeche',
             text: 'Campeche'
          },
    ]

    //hobbies = []

     handelChange = (e) => {
         let target = e.target
         //console.log(`target.name ${target.name}, target.value ${target.value}`)
        return(
            this.setState({
                [target.name] : target.value
            })
        )
     }

     //handelChangeInput

     /*handelChangeCheckBox = (e) => {
        let hobby = e.target
        console.log(hobby)
        if(is checked){
            lo añado al array hobbies
        }else{
            lo saco del array
        }
     }*/


     print = (e) => {
        //console.log(this.state)
        e.preventDefault()
     }
    render() { 
        return ( 
            <form onChange={this.print}>
            <InputText
            label="Name"
            name="name"
            value={this.state.name}
            onChange={this.handelChange}></InputText>
            <InputText
            label="Firstname"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handelChange}></InputText>
            <TextArea
            label="Description"
            name="description"
            value={this.state.description}
            onChange={this.handelChange}></TextArea>
            <RadioButton
            label="Gender"
            name="gender"
            value={this.state.gender}
            onChange={this.handelChangeInput}></RadioButton>
             <TextArea
            label="Age"
            type="Number"
            name="age"
            value={this.state.age}
            onChange={this.handelChange}></TextArea>
            <Select 
              items={this.countries} 
              value={this.state.selectedCountry}
              name="selectedCountry"
              onChange={this.handelChange}
            />
            {this.selectedCountry === 'es' ? (
                <Select 
                items={this.provinces} 
                value={this.state.selectedProv}
                name="selectedProv"
                onChange={this.handelChange}
              />
            ) : '' }
            <ConditionalRender if={this.state.selectedCountry === 'mx'} show={
                <Select 
                items={this.provincesMx} 
                value={this.state.selectedProv}
                name="selectedProvMx"
                onChange={this.handelChange}
              />
            }
            ></ConditionalRender>
            <CheckBox
            onChange={this.handelChangeCheckBox}></CheckBox>
             <CheckBox
             hobbies={this.hobbies}
            onChange={this.handelChangeCheckBox}
            selectedHobbies={this.state.selectedHobbies}></CheckBox>
          </form>
         );
    }
}
 
export default Form;