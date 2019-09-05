import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Service from './Services'

//Компоненты для дома
import SpringСleaning from './components/services_home.js/springCleaning';
import CleaningAfterRepair from './components/services_home.js/CleaningAfterRepair';
import WashingWindows from './components/services_home.js/washingWinows'
import Housekeeper from './components/services_home.js/houskeeper'
import Sale from './components/services_home.js/sale';
import './components/services_home.js/springСleaning.css'

//Компоненты для оргонизации
import Office from './components/services_corp.js/office';
import Shops from './components/services_corp.js/shops';
import Hotel from './components/services_corp.js/hotel';
import CleaningIndustrial from './components/services_corp.js/cleaningIndustrial';
import './components/services_corp.js/office.css';

/*Компоненты для дополнительных услуг*/

export default class GlobalRouters extends React.Component {
  render(){
    return(
      <>
        <Switch>
           <Route exact path="/" component={ () => <Service /> }></Route>
           <Route path="/springСleaning" component={ () => <SpringСleaning /> }></Route>
           <Route path="/cleaningAfterRepair" component={ () => <CleaningAfterRepair />}></Route>
           <Route path="/washingWindows" component={ () => <WashingWindows />}></Route>
           <Route path="/housekeeper" component={ () => <Housekeeper />}></Route>
           <Route path="/sale" component={ () => <Sale />}></Route>

           <Route path="/office" component={ () => <Office /> }></Route>
           <Route path="/shops" component={ () => <Shops />}></Route>
           <Route path="/hotel" component={ () => <Hotel />}></Route>
           <Route path="/cleaningIndustrial" component={ () => <CleaningIndustrial />}></Route>
        </Switch>
      </>
    );
  };
};