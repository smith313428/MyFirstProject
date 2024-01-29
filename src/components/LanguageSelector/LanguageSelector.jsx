import React from 'react'
import {Input,Label} from "reactstrap";
import { Tab, Tabs, TabList} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const LanguageSelector = ({langOptions,onChangeName,selectedLangIndex, onChangeTab})=>{
    return(
        <div className="language-cover">
            <Label>
                Languages 
            </Label>
            <Tabs selectedIndex={selectedLangIndex}  onSelect={(index)=>{onChangeTab(index)}}>
            <TabList>
                {
                   langOptions.map((lang,idx)=>{
                    return(
                    <Tab key={idx}>{lang.lang_code}</Tab>
                    )
                })
                }
                
            </TabList>
            </Tabs>
            <Input  onChange={(e)=>{onChangeName(e.target.value)}} value={langOptions[selectedLangIndex]?.title}/>
        </div>
    )
    
}
export default LanguageSelector